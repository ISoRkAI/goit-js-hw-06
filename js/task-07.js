const slider = document.querySelector('#font-size-control');
const changeableText = document.querySelector('#text');

slider.addEventListener("input", (event) => {
  changeableText.style.fontSize = `${event.currentTarget.value}px`;
});