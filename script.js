function run(size) {
  const content = document.querySelector(".content");

  const grid = document.createElement("div");
  grid.classList.add("wrapper");

  for (let i = 0; i < (size*size); i++) {
    const cell = document.createElement("div");
    //cell.innerText = `${i}`
    cell.style.cssText = "border: solid 1px;"
    cell.setAttribute("id", "cell");
    grid.appendChild(cell);
  }

  content.appendChild(grid);
  grid.style.cssText = `background-color: black; color:white; grid-template-columns: repeat(${size}, 1fr);`

  const cells = document.querySelectorAll("#cell");

  cells.forEach(element => {
    element.addEventListener("mouseover", (event) => {
      element.style.cssText = "background-color: red; border: solid 1px;";
    });
  });
}

run(16);

const clear = document.getElementById("clear");

clear.addEventListener("click", (event) => {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  run(16);
});

const newGrid = document.getElementById("new");

newGrid.addEventListener("click", (event) => {
  const sizeChoice = prompt();
  const content = document.querySelector(".content");
  content.innerHTML = "";
  run(sizeChoice);
});
