
function popUpTemplate() {
  return `<div class="popUp">
  <div class="popUp--wrapper">
    <header class="popUp--header">
      <h3>Delete Game</h3>
      <button onclick="closePopUp()" class="close"><i class="fas fa-times"></i></button>
    </header>
    <div class="popUp--content">
    <p>Are you sure you want  to delete this game?</p>
    </div>
    <div class="game--buttons">
    <button class="game--delete" onclick = "deleteGame()">Delete</button>
    <button onclick="closePopUp()" class="cancel">Cancel</button>
  </div>
  </div>
  </div>`
}

function createPopUp() {
  let popUpParent = document.querySelector(".popUp--template")
  let template = popUpTemplate();
  popUpParent.innerHTML = template;
}

function showPopUp() {
  createPopUp();
  document.querySelector(".popUp").style.display = "block";
  
}

function closePopUp() {
  document.querySelector(".popUp").style.display = "none";
}

function deleteGame(){
  let urlParams = new URLSearchParams(window.location.search);
  let gameId = urlParams.get('id');
  HttpService.delete(gameId).then(()=>window.location.href = "../../../index.html");
  
}

