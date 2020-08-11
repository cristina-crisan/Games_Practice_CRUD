const baseUrl = "https://games-api-siit.herokuapp.com";
class HttpService {
  static getGames() {
    return fetch(`${baseUrl}/games`).then(response => response.json());
  }

  static regenerateGames() {
    return fetch(`${baseUrl}/regenerate-games`);
  }

  static getGame(gameId) {
    return fetch(`${baseUrl}/games/${gameId}`).then(response => response.json())
  }

  static updateGame(gameId, data) {
    return fetch(`${baseUrl}/games/${gameId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json());
  }

  static addNewGame(data) {
    return fetch(`${baseUrl}/games`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json());
  }
  
  static delete(gameId) {
    let url = `${baseUrl}/games/${gameId}`;
    return fetch(url, {
      method: "DELETE"
    }).then(response => response.text());
  }
}

