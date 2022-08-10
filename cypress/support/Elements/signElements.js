
class SignElements {
    inputEmail = () => {return '.col-md-6 input[name="email"]'}
    InputPassword = () => {return 'input[type="password"]'}
    submitButton = () => {return '#submit-login'}

    textConfirm = () => {return 'h1'}

    alertText = () => {return 'li[class="alert alert-danger"]'}
}

export default new SignElements()