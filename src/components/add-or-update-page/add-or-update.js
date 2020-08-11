window.onload = () => {
  let urlParams = new URLSearchParams(window.location.search);
  let gameId = urlParams.get('id');
  let title = document.querySelector(".header--title");
  if (gameId != 0) {
    title.innerText = "Edit game";
    HttpService.getGame(gameId).then(response => {
      populateInputs(response);
    })

  } else if (gameId == 0) {
    title.innerText = "Add new game";
  }
}

function getInputNodes() {
  let title = document.querySelector(".title");
  let genre = document.querySelector(".genre");
  let publisher = document.querySelector(".publisher");
  let description = document.querySelector(".description");
  let image = document.querySelector("[type=url]");

  var inputNode = {
    title: title,
    genre: genre,
    publisher: publisher,
    description: description,
    image: image
  }
  return inputNode;
}

function populateInputs(data) {
  let gameInputNode = getInputNodes();
  gameInputNode.title.value = data.title;
  gameInputNode.genre.value = data.genre;
  gameInputNode.publisher.value = data.publisher;
  gameInputNode.description.value = data.description;
  gameInputNode.image.value = data.imageUrl

  let imageGame = document.querySelector(".image--game img");
  imageGame.src = data.imageUrl;
}

function back() {
  let urlParams = new URLSearchParams(window.location.search);
  let gameId = urlParams.get('id');
  if (gameId != 0) {
    location.assign(`../details-page/details-page.html?id=${gameId} `);
  } else if (gameId == 0) {
    location.assign("../../../index.html");
  }
}

function save() {
  let urlParams = new URLSearchParams(window.location.search);
  let gameId = urlParams.get('id');
  if (gameId != 0) {
    update(gameId);
  } else if (gameId == 0) {
    addGame();
  }
}

function gameData() {
  let gameInputNode = getInputNodes();
  return {
    title: gameInputNode.title.value,
    genre: gameInputNode.genre.value,
    publisher: gameInputNode.publisher.value,
    description: gameInputNode.description.value,
    imageUrl: gameInputNode.image.value
  }
}

async function update(gameId) {
  let data = gameData();
  await HttpService.updateGame(gameId, data)
  location.assign(`../details-page/details-page.html?id=${gameId}`);
}

async function addGame() {
  let data = gameData();
  await HttpService.addNewGame(data)
  location.assign("../../../index.html");
}

function changeUrl(){
  let newImage = document.querySelector("[type=url]").value;
  let imageGame = document.querySelector(".image--game img");
  imageGame.src = newImage;
}