// also add functional for yellow color (not randomize) and for randomize every square

let gridContainer = document.querySelector("#gridContainer");
let gridSize = "";
let gridSquares = "";
const SQUARESBACKGROUNDCOLOR = `#eee`; // use a few times
let mouseSquares = [];
let mouseHoveringColor = "";

getGridPerSide(); //initializing program

function getGridPerSide() {

	let gridForm = document.querySelector("#gridForm");

	gridForm.addEventListener("submit", (e) => {
		e.preventDefault();

		let gridInput = document.querySelector("#gridInput");
		let gridRadio = document.querySelectorAll(`input[name="gridRadio"]`);
		let gridRadioChecked = "";
		let gridText = document.querySelector("#gridText");

		mouseHoveringColor = ""; // clean color for new submit

		for (const gridRadioOne of gridRadio) {
			if (gridRadioOne.checked) {
				gridRadioChecked = gridRadioOne.value;
				break;
			} 
		}

		if (isNaN(gridInput.value) || gridInput.value < 1 || gridInput.value > 100) {
			gridText.innerHTML = `Enter a <em>right</em> number <strong>from 1 to 100</strong>`;
		} else if (gridRadioChecked === "yellow") {
			gridText.innerHTML = `
				The grid has <em>${gridInput.value}*${gridInput.value}</em> squares<br/>
				The mouse hover color is <strong>yellow</strong><br/>
				<em>(For erase color - click on the square)</em><br/>
			`;
			mouseHoveringColor = "yellow"; // value for doMouseHovering()
		} else if (gridRadioChecked === "randomize") {
			gridText.innerHTML = `
				The grid has <em>${gridInput.value}*${gridInput.value}</em> squares<br/>
				The mouse hover color is <strong>randomize</strong><br/>
				<em>(For erase color - click on the square)</em><br/>
			`;
			mouseHoveringColor = "randomize"; // value for doMouseHovering()
		} else {
			gridText.innerHTML = `
				The grid has <em>${gridInput.value}*${gridInput.value}</em> squares<br/>
				The mouse hover color is <strong>randomize every square</strong><br/>
				<em>(For erase color - click on the square)</em><br/>
			`;
			mouseHoveringColor = "randomizeEverySquare"; // value for doMouseHovering()
		}

		gridSize = gridInput.value * gridInput.value;

		createGrid();

	});
}

function createGrid() {

	gridContainer.innerHTML = ""; // clean gridContainer for new submit

	for (let i=0; i < (gridSize); i++) {

		gridSquares = document.createElement("div");
		gridSquares.classList.add("gridSquares");
		gridContainer.appendChild(gridSquares);

		gridSquares.style.cssText = `
			width: calc(100% / ${gridInput.value});
			height: calc(100% / ${gridInput.value});
			background-color: ${SQUARESBACKGROUNDCOLOR};
			border: 1px solid #ccc;
		`;

		gridContainer.style.cssText = `
			width: 95vmin;
			height: 95vmin;
			margin-top: 1vmin;
			display: flex;
			flex-wrap: wrap;
			aspect-ratio: 1/1;
		`;

		mouseSquares.push(gridSquares); // create array for doMouseHovering()

	}

	doMouseHovering();

}

function doMouseHovering() {

// need mouseBackgroundColor for calculate "randomize" (NOT for "randomizeEverySquare")

	let mouseBackgroundColor = ""; // clean color for new submit

	if (mouseHoveringColor === "yellow") {
		mouseBackgroundColor = "yellow";
	} else if (mouseHoveringColor === "randomize") {
		let r = Math.floor(Math.random() * 256);
		let g = Math.floor(Math.random() * 256);
		let b = Math.floor(Math.random() * 256);
		mouseBackgroundColor = `rgb(${r}, ${g}, ${b})`;
	}

	mouseSquares.forEach(gridSquares => {

		gridSquares.addEventListener('mouseover', () => {
			
			if (mouseHoveringColor === "yellow") {
				gridSquares.style.backgroundColor = mouseBackgroundColor;	
			} else if (mouseHoveringColor === "randomize") {
				gridSquares.style.backgroundColor = mouseBackgroundColor;
			} else {
				let r = Math.floor(Math.random() * 256);
				let g = Math.floor(Math.random() * 256);
				let b = Math.floor(Math.random() * 256);
				gridSquares.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
			}

		});

		gridSquares.addEventListener('click', () => {
			gridSquares.style.backgroundColor = SQUARESBACKGROUNDCOLOR;
		});

		// for touch screens
		gridSquares.addEventListener('touchmove', () => {
			
			if (mouseHoveringColor === "yellow") {
				gridSquares.style.backgroundColor = mouseBackgroundColor;	
			} else if (mouseHoveringColor === "randomize") {
				gridSquares.style.backgroundColor = mouseBackgroundColor;
			} else {
				let r = Math.floor(Math.random() * 256);
				let g = Math.floor(Math.random() * 256);
				let b = Math.floor(Math.random() * 256);
				gridSquares.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
			}

		});

		// erase color
		gridSquares.addEventListener('touchcancel', () => {
			gridSquares.style.backgroundColor = SQUARESBACKGROUNDCOLOR;
		});

	});

}
