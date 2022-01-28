function run() {
  const content = document.querySelector(".content");

  const grid = document.createElement("div");
  grid.classList.add("wrapper");
  grid.style.cssText = "grid-auto-rows: minmax(100px, auto);"

  for (let i = 0; i < 256; i++) {
    const cell = document.createElement("div");
    //cell.innerText = `${i}`
    cell.style.cssText = "border: solid 1px;"
    cell.setAttribute("id", "cell");
    grid.appendChild(cell);
  }

  content.appendChild(grid);
  grid.style.cssText = "background-color: black; color:white;"

  const cells = document.querySelectorAll("#cell");

  cells.forEach(element => {
    element.addEventListener("mouseover", (event) => {
      element.style.cssText = "background-color: red; border: solid 1px;";
    });
  });
}

run();

const clear = document.getElementById("clear");

clear.addEventListener("click", (event) => {
  const content = document.querySelector(".content");
  content.innerHTML = "";
  run();
});
