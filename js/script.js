/* =========================
   LOAD HEADER / FOOTER
========================= */

function loadComponent(id, file){
  fetch(file)
    .then(res => res.text())
    .then(data => {
      const el = document.getElementById(id);
      if(el) el.innerHTML = data;
    });
}

const path = window.location.pathname.includes("detailed-projects")
  ? "../"
  : "";

loadComponent("header", path + "header.html");
loadComponent("footer", path + "footer.html");


/* =========================
   MEDIA HELPER (PNG/GIF/MP4)
========================= */

function getMediaHTML(path){
  const ext = path.split('.').pop().toLowerCase();

  if(ext === "mp4" || ext === "webm"){
    return `
      <video class="project-thumb" autoplay muted loop playsinline>
        <source src="${path}" type="video/mp4">
      </video>
    `;
  }

  return `<img class="project-thumb" src="${path}">`;
}


/* =========================
   RENDER PROJECT GRID
========================= */

function renderProjects(){
  const grid = document.getElementById("projects-grid");
  if(!grid) return;

  projects.forEach(project => {

    const media = getMediaHTML(project.thumb);

    let detailsBtn = "";

    if(project.detailsPage){
      detailsBtn = `
        <a href="detailed-projects/${project.detailsPage}" class="btn-details">
          Detailed
        </a>
      `;
    }

    grid.innerHTML += `
      <div class="project-card">
        ${media}

        <div class="project-overlay">
          <h3>${project.title}</h3>

          <div class="project-buttons">
            <button class="btn-overview" data-id="${project.id}">
              Overview
            </button>

            ${detailsBtn}
          </div>
        </div>
      </div>
    `;
  });
}


/* =========================
   OPEN PROJECT MODAL
========================= */

function openProjectModal(project){

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");
  if(!modal) return;

  const index = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[(index + 1) % projects.length];
  const prevProject = projects[(index - 1 + projects.length) % projects.length];

  let galleryHTML = "";

  project.gallery.forEach(file => {
    const ext = file.split('.').pop().toLowerCase();

    if(ext === "mp4" || ext === "webm"){
      galleryHTML += `
        <video class="modal-gallery-media" muted loop playsinline controls>
          <source src="${file}" type="video/mp4">
        </video>
      `;
    } else {
      galleryHTML += `<img src="${file}" class="modal-gallery-media">`;
    }
  });

  modalContent.innerHTML = `
    <h2 class="modal-title">${project.title}</h2>

    <div class="modal-meta">
      <span><b>Date:</b> ${project.date}</span>
      <span><b>Role:</b> ${project.role}</span>
      <span><b>Genre:</b> ${project.genre}</span>
      <span><b>Location:</b> ${project.location}</span>
    </div>

    <div class="modal-desc">${project.description}</div>

    <video class="modal-video" src="${project.previewVideo}"
      autoplay muted loop controls></video>

    <div class="modal-gallery">
      ${galleryHTML}
    </div>

    <div class="modal-bottom-buttons">
      <button class="modal-btn modal-prev" data-prev="${prevProject.id}">
        ← Previous
      </button>

      <a href="detailed-projects/${project.detailsPage}" class="modal-btn modal-details">
        Detailed View
      </a>

      <button class="modal-btn modal-next" data-next="${nextProject.id}">
        Next →
      </button>
    </div>
  `;

  modal.style.display = "flex";
  modal.scrollTop = 0;
}


/* =========================
   MODAL CLICK HANDLING
========================= */

function setupModal(){

  const modal = document.getElementById("project-modal");
  if(!modal) return;

  document.addEventListener("click", e => {

    if(e.target.classList.contains("btn-overview")){
      const id = e.target.dataset.id;
      const project = projects.find(p => p.id === id);
      if(project) openProjectModal(project);
    }

    if(e.target.classList.contains("modal-next")){
      const next = projects.find(p => p.id === e.target.dataset.next);
      if(next) openProjectModal(next);
    }

    if(e.target.classList.contains("modal-prev")){
      const prev = projects.find(p => p.id === e.target.dataset.prev);
      if(prev) openProjectModal(prev);
    }

    if(e.target.classList.contains("modal-close")){
      modal.style.display = "none";
    }

    if(e.target === modal){
      modal.style.display = "none";
    }
  });
}


/* =========================
   FULLSCREEN GALLERY VIEWER
========================= */

function setupGalleryViewer(){

  const viewer = document.getElementById("image-viewer");
  const viewerContent = document.getElementById("viewer-content");
  if(!viewer) return;

document.addEventListener("click", e => {

  if(e.target.tagName === "VIDEO") return;

  if(e.target.classList.contains("modal-gallery-media")){

    const src = e.target.src;
    if(!src) return;

    viewerContent.innerHTML = `
      <img src="${src}"
      style="max-width:90vw;max-height:90vh;border-radius:12px;">
    `;

    viewer.style.display = "flex";
  }

  if(e.target === viewer){
    viewer.style.display = "none";
    viewerContent.innerHTML = "";
  }
});


  document.addEventListener("keydown", e=>{
    if(e.key === "Escape"){
      viewer.style.display = "none";
      viewerContent.innerHTML = "";
    }
  });
}

/* =========================
    SLIDESHOWS (IF ANY)
========================= */

function initSlideshows(){

  document.querySelectorAll(".slideshow").forEach(slideshow=>{

    const slides = slideshow.querySelectorAll(".slide");
    const prev = slideshow.querySelector(".prev");
    const next = slideshow.querySelector(".next");

    let index = 0;

    function showSlide(i){
      slides.forEach(s=>s.classList.remove("active"));
      slides[i].classList.add("active");
    }

    next.addEventListener("click", ()=>{
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    prev.addEventListener("click", ()=>{
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });

  });

}


/* =========================
INIT
========================= */

renderProjects();
setupModal();
setupGalleryViewer();
initSlideshows();
