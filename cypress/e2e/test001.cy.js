import { LoginPage } from "./pages/login_page";

const loginpage = new LoginPage();

describe('All Login Tests', function(){

    this.beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')

    })


    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // cy.get('.oxd-button').click()


it('Login Test  001', ()=>{
    // cy.visit('https://opensource-demo.orangehrmlive.com/')
    loginpage.enterUserName('Admin')
    loginpage.enterPassword('admin123')
    loginpage.clickLogin()
})

it('Login Test  002', function(){

    loginpage.enterUserName('Admin!!!!!!!!!')
    loginpage.enterPassword('admin1234!!!!!!')
    loginpage.clickLogin()
    cy.wait(5000)
    loginpage.errorMessage()

})

it('Login Test  003', function(){

    loginpage.enterUserName('Admin')
    loginpage.enterPassword('admin1234!!!!!!')
    loginpage.clickLogin()
    cy.wait(5000)
    loginpage.errorMessage()

})

it('Login Test  004', function(){

    loginpage.enterUserName('Admin!!!!!!!!!')
    loginpage.enterPassword('admin1234')
    loginpage.clickLogin()
    cy.wait(5000)
    loginpage.errorMessage()

})
})