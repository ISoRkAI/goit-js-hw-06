const registerForm = document.querySelector(".login-form")

registerForm.addEventListener("submit", handleSubmit);

const users = [];
const user = {};

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value && password.value) {
        const data = {
            email: email.value,
            password: password.value
        };
        console.log(data)
        event.currentTarget.reset()
        return
    }
    alert('Все поля должны быть заполнены')
}
