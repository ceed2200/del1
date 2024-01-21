// Byte av textfärg vid mouseover

document
  .getElementById("date")
  .addEventListener("mouseover", changeColor, false);

function changeColor(e) {
  if (e.target.style.color == "black") {
    e.target.style.color = "darkblue";
  } else {
    e.target.style.color = "black";
  }
}
