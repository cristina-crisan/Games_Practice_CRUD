window.onload = () => {
  let urlParams = new URLSearchParams(window.location.search);
  let gameId = urlParams.get('id');
  HttpService.getGame(gameId).then(response => {
    loadGame(response);
  })
}

  function back() {
    location.assign("../../../index.html")
  }

function loadGame(game) {
  let parent = document.querySelector(".parent");
  let gameTemplate = gameDetailsTemplate(game);
  parent.innerHTML = gameTemplate;
}

function gameDetailsTemplate(game) {
  return `  
  <div class="game-wrapper">
<div class="game--image_wrapper">
  <img class="game--image" src=${(game.imageUrl) ? game.imageUrl : "../../ img / 765 -default -avatar.png"} alt="image game">
</div >
    <div class="game--content">
      <h2>${game.title}</h2>
      <p>Genre: ${game.genre}</p>
      <p>Publisher: ${game.publisher}</p>
      <p>Description: ${game.description}</p>
      <div class="game--buttons">
        <button class="game--edit" onclick="openAddOrEditPage('${game._id}')"><i class="fas fa-user-edit"></i></button>
        <button class="game--delete" onclick= "showPopUp()" ><i class="far fa-trash-alt"></i></button>
      </div>
    </div>
</div > `
}

function openAddOrEditPage(gameId) {
  window.location.href = `../add-or-update-page/add-or-update-page.html?id=${gameId}`;
}

