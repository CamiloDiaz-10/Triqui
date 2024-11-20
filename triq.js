let turno = 'X';
let casillas = document.querySelectorAll('.casilla');
let tablero = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

casillas.forEach((casilla, indice) => {
  casilla.addEventListener('click', () => {
    if (tablero[Math.floor(indice / 3)][indice % 3] === '') {
      tablero[Math.floor(indice / 3)][indice % 3] = turno;
      casilla.classList.add(turno.toLowerCase()); // Cambiado a minúsculas
      turno = turno === 'X' ? 'O' : 'X';
      verificarGanador();
    }
  });
});

function verificarGanador() {
    // Verificar filas
    for (let i = 0; i < 3; i++) {
      if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2] && tablero[i][0] !== '') {
        alert(`El jugador ${tablero[i][0]} es el ganador`);
        reiniciarJuego();
        return; // Salir de la función después de reiniciar
      }
    }
    // Verificar columnas
    for (let i = 0; i < 3; i++) {
      if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i] && tablero[0][i] !== '') {
        alert(`El jugador ${tablero[0][i]} es el ganador`);
        reiniciarJuego();
        return; // Salir de la función después de reiniciar
      }
    }
    // Verificar diagonales
    if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2] && tablero[0][0] !== '') {
      alert(`El jugador ${tablero[0][0]} es el ganador`);
      reiniciarJuego();
      return; // Salir de la función después de reiniciar
    }
    if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0] && tablero[0][2] !== '') {
      alert(`El jugador ${tablero[0][2]} es el ganador`);
      reiniciarJuego();
      return; // Salir de la función después de reiniciar
    }
  
    // Verificar si hay un empate
    if (tablero.flat().every(casilla => casilla !== '')) {
      alert("No hay ganador");
      reiniciarJuego();
    }
  }

function reiniciarJuego() {
  turno = 'X';
  tablero = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  casillas.forEach((casilla) => {
    casilla.classList.remove('x', 'o'); // Cambiado a minúsculas
  });
}