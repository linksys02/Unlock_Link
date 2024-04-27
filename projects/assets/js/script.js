

//subscribe
function subscribe() {
  window.open('https://www.youtube.com/@dream_mlbb');
}

//-------------------------------------------------------------------Needs More

//Add new skins in here
function backToMainPanel() {
  var todoPanels = [
    document.querySelector('.AldousXSaitama'),
    document.querySelector('.AlucardXTanjiro')
  ];

  // Loop through each todoPanel element
  todoPanels.forEach(function(panel) {
    panel.style.display = 'none'; // Set display to none for each panel
  });

  selectionPanel.style.display = 'flex'; 
  puttingCreditsToBack(); 
}

//-------------------------------------------------------------------Needs More
//selection selecting what skin
function openAldousXSaitamaTodo() {
  window.location.href = "https://linksys02.github.io/AldousXSaitama/";
}

function openAlucardXTanjiro() {
  window.location.href = "https://linksys02.github.io/AlucardXTanjiro/";
}

function openPaquitoToKOFTodo(){
  window.location.href = "https://linksys02.github.io/PaquitoToKOF/";
}

function openYinXErenTodo(){
  window.location.href = "https://linksys02.github.io/YinToEren/";
}

function openChouToIoriTodo(){
  window.location.href = "https://linksys02.github.io/ChouToIori/";
}

function openLanceToZenitsuTodo(){
  window.location.href = "https://linksys02.github.io/LanceToZenitsu/";
}

function openSunToNarutoTodo(){
  window.location.href = "https://linksys02.github.io/SunToNaruto/";
}

function openAldousToStarStreamTodo(){
  window.location.href = "https://linksys02.github.io/AldousToStarStream/";
}