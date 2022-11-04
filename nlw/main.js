function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>  `
}

let delay = -0.3;
function createCard(data, day, games) {
  delay = delay + 0.4;
  return `
        <div class="card" style="animation-delay: ${delay}s">
          <h2>${data} <span>${day}</span>
          </h2>
          <ul>
            ${games}
          </ul>
        </div>
`
}

document .querySelector("#cards").innerHTML = 
    createCard("20/11", "domingo", 
      createGame("catar", "13:00", "equador")) +
    createCard("21/11", "segunda", createGame("inglaterra", "10:00", "iran") + 
      createGame("senegal", "13:00", "holanda") + 
      createGame("eua", "16:00", "gales")) +
    createCard("22/11", "terça",
      createGame("argentina","07:00", "arabia saudita" ) + 
      createGame("dinamarca", "10:00", "tunisia") + 
      createGame("mexico", "13:00", "polonia") + 
      createGame("frança", "16:00", "australia")) +
    createCard("23/11", "quarta", createGame("marrocos", "07:00", "croacia") + 
      createGame("alemanha", "10:00", "japão") + 
      createGame("espanha", "13:00", "costa rica") + 
      createGame("belgica", "16:00", "canada")) +
    createCard("24/11", "quinta", createGame("suiça", "07:00", "camaroes") + 
      createGame("uruguai", "10:00", "coreia") + 
      createGame("portugal", "13:00", "gana") + 
      createGame("brasil", "16:00", "servia")) + 
    createCard("25/11", "sexta", createGame("gales", "07:00", "iran") + 
      createGame("catar", "10:00", "senegal") + 
      createGame("holanda", "13:00", "equador") + 
      createGame("inglaterra", "16:00", "eua")) + 
    createCard("26/11", "sábado", createGame("tunisia", "07:00", "australia") + 
      createGame("polonia", "10:00", "arabia saudita") + 
      createGame("frança", "13:00", "dinamarca") + 
      createGame("argentina", "16:00", "mexico")) + 
    createCard("27/11", "domingo", createGame("japão", "07:00", "costa rica") + 
      createGame("belgica", "10:00", "marrocos") + 
      createGame("croacia", "13:00", "canada") + 
      createGame("espanha", "16:00", "alemanha"))

