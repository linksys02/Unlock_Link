

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

// Download Zip function
function downloadZip() {

  var link = document.createElement("a");

    link.href = "projects/assets/download_zip/Alucard%20X%20Tanjiro.zip";
    link.download = "Alucard X Tanjiro.zip";

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
}