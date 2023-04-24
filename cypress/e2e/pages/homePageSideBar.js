export class HomePageSideBar{

    PIM_tab = ':nth-child(2) > .oxd-main-menu-item > .oxd-text'
    

    clickPIM(){
        cy.get(this.PIM_tab).click()

    }
}