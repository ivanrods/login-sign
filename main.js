const signUpButton = document.querySelector('.sign-up')
const signInButton = document.querySelector('.sign-in')
const signIn = document.querySelector('#containar-sign-in')
const signUp = document.querySelector('#containar-sign-up')

signUpButton.addEventListener('click', () => {
    signIn.classList.add("hide")
    signUp.classList.remove("hide")
})
signInButton.addEventListener('click', () => {
    signUp.classList.add("hide")
    signIn.classList.remove("hide")
})