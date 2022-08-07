function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const colorBtn = document.querySelector(".change-color");
const colorBg = document.querySelector(".color");
const bodyEl = document.querySelector("body")
console.log(bodyEl)

colorBg.textContent = '#ffffff';

colorBtn.addEventListener('click', onColorBtn);

function onColorBtn(event) {
  event.preventDefault();
  const newcolor = getRandomHexColor();
  bodyEl.style.backgroundColor = newcolor;
  colorBg.textContent = `${newcolor}`;
  console.log(newcolor)
}