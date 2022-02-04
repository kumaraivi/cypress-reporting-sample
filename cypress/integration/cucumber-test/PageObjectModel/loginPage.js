const URL_='https://the-internet.herokuapp.com/login'
const USER_INPUT="#username"
const PWD_INPUT="#password"
const LOGIN_BTN=".radius"

class LoginPage{
    static visitURL(){
        cy.visit(URL_)
    }
    static userLogin(name, pwd){
        cy.get(USER_INPUT).type(name)
        cy.get(PWD_INPUT).type(pwd)
        cy.get(LOGIN_BTN).click()
    }
}
export default LoginPage