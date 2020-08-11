window.onload = () => {
  HttpService.getGames().then(response => {
    loadGames(response);
  });
}

function regenerate() {
  HttpService.regenerateGames().then(function () {
    location.reload();
  });
}

function loadGames(games) {
  let allGamesTemplate = "";
  let parent = document.querySelector(".section-wrapper");
  games.forEach(game => {
    let gameTemplate = createGameTemplate(game);
    allGamesTemplate += gameTemplate;
  })
  parent.innerHTML = allGamesTemplate;

}

function createGameTemplate(game) {
  return `
  <div class="game" id=${game._id} onclick="openDetailsPage('${game._id}')">
    <div class="game--image_wrapper">
      <img class="game--image" src=${(game.imageUrl) ? game.imageUrl : "src/img/765-default-avatar.png"} alt="Game image" />
    </div>
    <div class="game--details">
      <div class="game-name_wrapper">
        <p class="game--name">${game.title}</p>
      </div>
    </div>
  </div>`
}

function openAddOrEditPage() {
  window.location.href = `src/components/add-or-update-page/add-or-update-page.html?id=0`;
}

function openDetailsPage(gameId) {
  window.location.href = `src/components/details-page/details-page.html?id=${gameId}`;
}