let container = document.querySelector("#container");
let numberOfSquares = 16 * 16;
let userGridRequest;
let drawGridRunCount = 0;

function gridDisplayText() {
     let gridSize = document.querySelector("#gridDisplay");
     gridSize.textContent = `Grid Size: ${Math.sqrt(numberOfSquares)} * ${Math.sqrt(numberOfSquares)}`;
}

function drawGrid(numberOfSquares) {
     let containerWidth = container.clientWidth;
     const itemSize = containerWidth / userGridRequest;

     for (let i = 0; i < numberOfSquares; i++) {

          let cell = document.createElement("div");
          cell.style.width = itemSize + 'px';
          cell.style.height = itemSize + 'px';

          cell.classList.add("grid-item");
          cell.addEventListener("mouseenter", () => {
               cell.style.backgroundColor = '#c38bfb';
          });
          container.appendChild(cell);
     }
     drawGridRunCount++;
};

function initialDrawGrid() {
     numberOfSquares = 16 * 16;
     userGridRequest = 16;
     gridDisplayText();
     drawGrid(numberOfSquares);

}
if (drawGridRunCount === 0) {
     initialDrawGrid();
}

let refreshBtn = document.querySelector("#refreshBtn");
refreshBtn.addEventListener('click', function () {
     numberOfSquares = userGridRequest * userGridRequest;
     gridDisplayText();
     container.innerHTML = "";
     initialDrawGrid();
});

function isNumber(request) {
     if (request !== null && request !== "" && !isNaN(request)) {
          return true;
     } else {
          return false;
     }
}

let changeGridBtn = document.querySelector("#btn");
changeGridBtn.addEventListener('click', function () {
     userGridRequest = parseInt(prompt("Insert your grid size(max 100): "));
     if (isNumber(userGridRequest) && userGridRequest <= 100) {
          numberOfSquares = userGridRequest * userGridRequest;
          gridDisplayText();
          container.innerHTML = "";
          drawGrid(numberOfSquares);
     } else if (userGridRequest > 100) {
          alert('Insert your preferred number of greed size again using the change grid size button. (Max 100');
          gridDisplayText();
     }
});
