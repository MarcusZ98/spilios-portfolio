/* =========================================
   HOW TO ADD A NEW PROJECT

   1. Copy an existing project block
   2. Paste below
   3. Change text + images
   4. Done

   Do NOT remove commas between objects

   - id: A unique identifier for the project. This is used to link the project card to the modal content. It should be a simple string without spaces (e.g., "my-project").
   - title: The name of the project.
   - thumb: The thumbnail media for the project card. This can be an image (png, jpg) or a video (mp4). If it's a video, it will autoplay in the grid.
   - previewVideo: A video that will be shown in the modal when the project card is clicked. This is optional but recommended for a more dynamic presentation.
   - date: The timeframe of the project (e.g., "January 2023 - June 2023").
   - role: Your role(s) in the project (e.g., "Game Designer, Level Designer").
   - genre: The genre of the project (e.g., "Puzzle Game").
   - location: Where the project was developed (e.g., "Stockholm, Sweden").
   - description: A detailed description of the project. You can use HTML tags for formatting (e.g., <br><br> for new paragraphs).
   - gallery: An array of image URLs that will be displayed in the modal gallery.
   - detailsPage: The filename of the detailed project page you create in the detailed-projects folder (e.g., "my-project.html"). This is used for the "Detailed" button on the project card.
========================================= */

const projects = [
{
  id: "tailwind",
  title: "Tailwind Tropics",

  thumb: "assets/tailwind-tropics/tailwind-tropics-thumbnail.mp4",
  previewVideo: "assets/tailwind-tropics/tailwind-tropics-thumbnail.mp4",

  date: "November 2024 - Ongoing",
  role: "Producer, Game Designer, Level Designer, SFX Designer",
  genre: "Party Game",
  location: "Stockholm, Sweden",

  description: `
  A 3rd-person party game with six players that pits them against each other in teams of three for all out mayhem on land and sea! Play as either Red Pandas or Racoons and win by collecting, constructing and then combating.
  <br><br>The game focuses on fast paced gameplay and controlled chaos in the small arenas players are thrust into. The game offers a dichotomy of cute and approachable art and hectic competitive gameplay. The game remains light-hearted and focuses on incentivizing replayability with short matches and easy to understand controls.
  <br><br>My role as a producer and game & level designer in this project was both challenging and very rewarding. Having a team of nine allowed for all parts of the game to be made in-house with all assets belonging to the project. It did, however require lots of diligent planning and synchronization of deadlines to ensure parts would come together for each phase of development. Having an experienced and dedicated team that could provide quick feedback allowed me to balance all of the games elements such as combat, movement and economy.
  `,

  gallery: [
    "assets/tailwind-tropics/main-menu.png",
    "assets/tailwind-tropics/phase-1.png",
    "assets/tailwind-tropics/round-summary.png",
    "assets/tailwind-tropics/poster.png",
    "assets/tailwind-tropics/tailwind-tropics-thumbnail.mp4"
  ],

  detailsPage: "tailwind-tropics.html"
},
{
  id: "not-a-murder",
  title: "Not A Murder",

  thumb: "assets/not-a-murder/not-a-murder-thumbnail.mp4", 
  previewVideo: "assets/not-a-murder/not-a-murder-thumbnail.mp4",

  date: "June 2024 - ongoing",
  role: "Game Designer, Level Designer, Sound Designer",
  genre: "3rd-Person Rail-Shooter",
  location: "Stockholm, Sweden",

  description: `
  An on-rails-shooter game developed as a 3-person project. In the game you play as a crow flying though various environments whilst combating enemies.
  <br><br>The game features an arcade-style approach to gameplay and levels without the punishing mechanic of lives. The idea was provide the players the possibility to experience each level to the fullest and providing challenge by improving and comparing high scores.
  <br><br>My role as a game & level designer in this project was both fun and rewarding. Working with a smaller team simplified the pipeline and allowed for quick and efficient changes when necessary. By leading a project without any limitations I was able to create large and thought through environments that ensured captivating scenery.
  `,

  gallery: [
    "assets/not-a-murder/gallery-1.png",
    "assets/not-a-murder/gallery-2.png",
    "assets/not-a-murder/gallery-3.png",
    "assets/not-a-murder/gallery-4.png",
    "assets/not-a-murder/gallery-5.png"
  ],

  detailsPage: "not-a-murder.html"
},
{
  id: "mancer",
  title: "Mancer",

  thumb: "assets/mancer/mancer-thumbnail.png", 
  previewVideo: "assets/mancer/mancer-preview.mp4",
  date: "April 2024 - May 2024",
  role: "Game Designer & Level Designer",
  genre: "First-Person-Shooter",
  location: "Stockholm, Sweden",

  description: `"Mancer" is a First-Person shooter inspired by the likes of DOOM and Hexen.
  <br><br>In the game you fight as the protagonist by the titular name of "Mancer" against the antagonist known only as the "Robomancer". The game features large environments and fast paced gameplay with large distances being covered by the player in a short time.
  <br><br>For this project, as a level designer, I had to consider leaving enough space for the player to move freely whilst implementing looping 8's for platforming fluidity all whilst providing interesting environments for combat and exploration.
  <br><br>As a game designer, it was all about balancing combat and weapons and by focusing on clever engagements of the enemy AI. An "Overmind" system taking into account various factors such as damage taken by a specific enemy and current health of the player (to mention a few) worked towards providing an automated way of continuously challenging the player in a fair way by allowing the system to adapt the enemy types spawned in, helping the various AI classes communicate with eachother and using a token system for engaging the player.`,

  gallery: [
  ],

  detailsPage: "mancer.html"
},
{
  id: "the-call-of-the-ancients",
  title: "The Call of the Ancients",

  thumb: "assets/the-call-of-the-ancients/the-call-of-the-ancients-thumbnail.png", 
  previewVideo: "assets/the-call-of-the-ancients/the-call-of-the-ancients-preview.mp4",
  date: "November 2023 - December 2023",
  role: "Level Designer, Game Designer, Sound Designer & Node Coding in Unreal 5",
  genre: "3rd-Person Action Adventure",
  location: "Stockholm, Sweden",

  description: `This was a solo project done during the winter of 2023 spanning two months of half-time work.
  <br><br>"The Call of the Ancients" is a 3rd-Person action adventure game that focuses on exploration, combat and stealth.
  <br><br>The level was designed with the limitation of being 1000m2 and should provide adequate information to the player at a glance as to where they would be able to explore and traverse. With this in mind I chose to build a coastal fortress somewhere in northern Africa. I took inspiration from both Moroccan and Greek ancient culture to combine them into the theme presented.
  <br><br>This was my first time dipping my toes into proper game design by designing a combat system and a basic AI to go with it. An equip and inventory system for the various weapons was also implemented.`,

  gallery: [
  ],

  detailsPage: "the-call-of-the-ancients.html"
},
{
  id: "cursed-town-hall",
  title: "Cursed Town Hall",

  thumb: "assets/cursed-town-hall/cursed-town-hall-thumbnail.png", 
  previewVideo: "assets/cursed-town-hall/cursed-town-hall-preview.mp4",
  date: "August 2023",
  role: "3D-Modeler, Level Designer, VFX Artist",
  genre: "Prototype",
  location: "Stockholm, Sweden",

  description: `This was a solo project over four weeks where I 3D-Modelled and created a scene for rendering.
  <br><br>The scenery changes from day to night with a gruesome mystery being hinted at. The focus was to showcase the assets in the scene as well as provide a narrative with as few moving parts as possible. A large landmark consisting of a particle system as well as a smaller one consisting of "Niagara Fluids" are the key narrative components of the scene. As well as the overall lighting.
  <br><br>This was my first journey into Unreal Engine 5 and I had lots of fun exploring and learning the engine.`,

  gallery: [
  ],

  detailsPage: "cursed-town-hall.html"
},
{
  id: "Pathogen Patrol",
  title: "Pathogen Patrol",

  thumb: "assets/pathogen-patrol/pathogen-patrol-thumbnail.png", 
  previewVideo: "assets/pathogen-patrol/pathogen-patrol-preview.mp4",
  date: "February 2024",
  role: "Game & Level-Design",
  genre: "Twin-Stick Shooter & Learning game",
  location: "Stockholm, Sweden",

  description: `This was a three person project developed over two weeks to be a web-based learning game.
  <br><br>The game, a Twin-Stick Shooter-esque, focuses on the player protecting the body from waves of bacteria and parasites whilst providing information about how the body counteracts these in reality. The player character as well as the enemies are modeled after how these look under a microscope in reality and helps the player memorize these shapes and their natural counterpart by repetition.
  <br><br>As a game & level-designer I was challenged to create environments that are fun to play and have a rising difficulty curve without any significant spikes. Balancing of enemy spawning and variation also played a part in making sure that the player learned all types.
  <br><br>The game was developed in Unreal Engine 4.23 as it was one of the last versions to support web-based builds. This was my first time in Unreal Engine 4 and provided a valuable insight of developing towards web-based games as well as developing in an older engine.`,

  gallery: [
  ],

  detailsPage: "pathogen-patrol.html"
},

];