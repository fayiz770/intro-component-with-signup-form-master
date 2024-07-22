const firstName  = document.getElementById('first-name')
const lastName  = document.getElementById('last-name')
const email  = document.getElementById('email')
const password  = document.getElementById('password')
const submit = document.getElementById('submit')

const iconFirstName  = document.getElementById('icon-first-name')
const iconLastName  = document.getElementById('icon-last-name')
const iconEmail  = document.getElementById('icon-email')
const iconPassword  = document.getElementById('icon-password')

const firstNameText  = document.getElementById('first-name-text')
const lastNameText  = document.getElementById('last-name-text')
const emailText  = document.getElementById('email-text')
const passwordText  = document.getElementById('password-text')

const inputs = document.querySelectorAll('.info')
const iconErrors = document.querySelectorAll('.icon-error')
const textErrors = document.querySelectorAll('.text-error')
const formInputs = document.querySelectorAll('input')

submit.addEventListener('click', (e) => {
    e.preventDefault()

    if(firstName.value.trim() === ""){
        iconFirstName.style.display = 'flex'
        firstNameText.style.display = 'flex'
    }else if(lastName.value.trim() === ""){
        iconLastName.style.display = 'flex'
        lastNameText.style.display = 'flex'
    }else if(email.value.trim() === ""){
        iconEmail.style.display = 'flex'
        emailText.style.display = 'flex'
    }else if(password.value.trim() === ""){
        iconPassword.style.display = 'flex'
        passwordText.style.display = 'flex'
    }else {
        formInputs.forEach(formInput => {
            formInput.value = ''
        })
    }
})


inputs.forEach(input => {
    input.addEventListener('click', () => {
        input.style.border = '1px solid var(--red)'
        iconErrors.forEach(iconError => {
            iconError.style.display = 'none'
        })

        textErrors.forEach(textError => {
            textError.style.display = 'none'
        })
    })
})
