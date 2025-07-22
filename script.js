const ul = document.querySelector("#the-ul");
const newLi = document.createElement("li");
ul.appendChild(newLi);

const table = document.querySelector("table");

function makeRow() {
  const row = document.createElement("tr");
  for (let i = 0; i < 20; i++) {
    const td = document.createElement("td");
    row.appendChild(td);
  }
  table.appendChild(row);
}

makeRow();
makeRow();

const btn = document.querySelector("#add-row");
btn.addEventListener("click", makeRow);

// table.addEventListener("click", colorize);
// table.addEventListener("mousedown", addMouseOver);
// table.addEventListener("mouseup", removeMouseOver);

let chosenColor = "red";

const select = document.querySelector("select");
select.addEventListener("change", (event) => {
  chosenColor = event.target.value;
  console.log(chosenColor);
});

function colorize(event) {
  const target = event.target;
  // if (target !== table) {
  if (target.tagName === "TD") {
    //.tagname always returns uppercase so
    //is this fine?
    if (target.className === chosenColor) target.className = "";
    else target.className = chosenColor;
  }
}

table.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  colorize(e);
});
table.addEventListener("mouseup", () => (isMouseDown = false));
table.addEventListener("mouseover", (e) => {
  if (isMouseDown) colorize(e);
});
