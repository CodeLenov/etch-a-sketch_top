let gridContainer = document.querySelector("#gridContainer");
let gridSize = 16*16;
let gridSquares = "";
let mouseSquares = [];

getGridSize();

function getGridSize() {
	let gridForm = document.querySelector("#gridForm");

	gridForm.addEventListener("submit", (e) => {
		e.preventDefault();
		let gridInput = document.querySelector("#gridInput");
		let gridText = document.querySelector("#gridText");

		if (isNaN(gridInput.value) || gridInput.value < 1 || gridInput.value > 100) {
			gridText.innerHTML = `Enter a <em>right</em> number <strong>from 1 to 100</strong>`;
		} else {
			gridText.innerHTML = `This grid has ${gridInput.value}*${gridInput.value} squares`;
			gridSize = gridInput.value * gridInput.value;
			createGrid();
		}

	});
}

function createGrid() {

	gridContainer.innerHTML = ""; // grid clean for new submit

	for (let i=0; i < (gridSize); i++) {

		gridSquares = document.createElement("div");
		/*gridSquares.classList.add("gridSquares");*/
		gridContainer.appendChild(gridSquares);

		gridSquares.style.cssText = `
			width: calc(100% / ${gridInput.value});
			height: calc(100% / ${gridInput.value});
			background-color: #eee;
			border: 1px solid #ccc;
		`;

		gridContainer.style.cssText = `
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			aspect-ratio: 1/1;
		`;

		mouseSquares.push(gridSquares); // create array for doMouseHovering()

	}

	doMouseHovering();

}

function doMouseHovering() {
	mouseSquares.forEach(gridSquares => {
		gridSquares.addEventListener('mouseover', () => {
			gridSquares.style.backgroundColor = "yellow";
		});
	});
}
