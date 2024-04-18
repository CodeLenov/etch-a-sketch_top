let container = document.querySelector("#container");

for (let i=0; i < (16*16); i++) {
	let items = document.createElement("div");
	items.classList.add("items");
	container.appendChild(items);
}

items.addEventListener("mouseover", () => {
	items.style.backgroundColor = "blue";
}
