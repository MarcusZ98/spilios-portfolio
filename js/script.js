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

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");


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

    grid.innerHTML += `
      <div class="project-card">
        ${media}

        <div class="project-overlay">
          <h3>${project.title}</h3>

          <div class="project-buttons">
            <button class="btn-overview" data-id="${project.id}">
              Overview
            </button>

            <a href="detailed-projects/${project.detailsPage}" class="btn-details">
              Detailed
            </a>
          </div>
        </div>
      </div>
    `;
  });
}


/* =========================
   MODAL SYSTEM
========================= */

function openProjectModal(project){

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-content");

  if(!modal) return;

  /* find index for NEXT button */
const index = projects.findIndex(p => p.id === project.id);

const nextProject = projects[(index + 1) % projects.length];
const prevProject = projects[(index - 1 + projects.length) % projects.length];


  /* build gallery */
  let galleryHTML = "";
  project.gallery.forEach(img=>{
    galleryHTML += `<img src="${img}" class="modal-gallery-img">`;
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
}



function setupModal(){

  const modal = document.getElementById("project-modal");
  if(!modal) return;

  document.addEventListener("click", e => {

    /* PREVIOUS PROJECT */
if(e.target.classList.contains("modal-prev")){
  const prevId = e.target.dataset.prev;
  const prevProject = projects.find(p => p.id === prevId);
  if(prevProject) openProjectModal(prevProject);
}

      /* NEXT PROJECT BUTTON */
  if(e.target.classList.contains("modal-next")){
    const nextId = e.target.dataset.next;
    const nextProject = projects.find(p => p.id === nextId);
    if(nextProject) openProjectModal(nextProject);
  }

    /* OPEN OVERVIEW */
    if(e.target.classList.contains("btn-overview")){
      const id = e.target.dataset.id;
      const project = projects.find(p => p.id === id);
      if(!project) return;

      openProjectModal(project);
    }

    /* CLOSE BUTTON */
    if(e.target.classList.contains("modal-close")){
      modal.style.display = "none";
    }

    /* CLICK OUTSIDE */
    if(e.target === modal){
      modal.style.display = "none";
    }
  });
}

function setupGalleryViewer(){

  const viewer = document.getElementById("image-viewer");
  const viewerImg = document.getElementById("viewer-img");

  if(!viewer) return;

  document.addEventListener("click", e => {

    /* CLICK GALLERY IMAGE */
    if(e.target.classList.contains("modal-gallery-img")){
      viewer.style.display = "flex";
      viewerImg.src = e.target.src;
    }

    /* CLICK OUTSIDE TO CLOSE */
    if(e.target === viewer){
      viewer.style.display = "none";

      document.addEventListener("click", e => {

});

    }
  });

  /* ESC KEY CLOSE */
  document.addEventListener("keydown", e=>{
    if(e.key === "Escape"){
      viewer.style.display = "none";
    }
  });
}



/* =========================
   INIT
========================= */

renderProjects();
setupModal();
setupGalleryViewer();

