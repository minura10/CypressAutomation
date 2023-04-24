import { LoginPage } from "../pages/loginPage";
import { HomePageSideBar } from "../pages/homePageSideBar";
import { PIMPage } from "../pages/PIMPage";

const loginpage = new LoginPage();
const homepagesidebar = new HomePageSideBar();
const pimpage = new PIMPage();

describe('All Login Tests', function(){

    this.beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')

    })
it('Login Test  001', ()=>{
    loginpage.enterUserName('Admin')
    loginpage.enterPassword('admin123')
    loginpage.clickLogin()
    
    homepagesidebar.clickPIM()
    pimpage.enterEName('Test Name')
    pimpage.enterEID('Test123')
    pimpage.selectEmployeeStatus('Part-Time Contract')
    pimpage.selectInculde('Current and Past Employees')
    pimpage.enterSupervisorName('David Morris')
    pimpage.selectJobTitle('Content Specialist')
    pimpage.selectSubUnit('Human Resources')


})


})