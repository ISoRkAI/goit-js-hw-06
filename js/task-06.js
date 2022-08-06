const inputBlur = document.querySelector("#validation-input")
// const valid = document.querySelector("#validation-input .valid")
// const invalid = document.querySelector("#validation-input.invalid")



inputBlur.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(inputBlur.dataset.length)) {
    
    inputBlur.classList.remove("invalid")
    inputBlur.classList.add("valid")
    return inputBlur.style.borderColor = "valid";
  }
    inputBlur.classList.add("invalid")
    return inputBlur.style.borderColor = "invalid"
  }
);
