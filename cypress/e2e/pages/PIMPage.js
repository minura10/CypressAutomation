export class PIMPage{

    ename_text = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'
    eID_text = ':nth-child(2) > .oxd-input'
    estatus_dropdown = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'
    include_dropdown = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'
    supervisorname_text = ':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'
    jobtitle_dropdown = ':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'
    subunit_dropdown = ':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon'


    enterEName(ename){
        cy.get(this.ename_text).type(ename)
    }

    enterEID(eID){
        cy.get(this.eID_text).type(eID)
    }

    selectEmployeeStatus(eStatus){
        cy.get(this.estatus_dropdown).click({force: true})
        cy.contains(eStatus).click({force: true})
        
    }
    
    selectInculde(eInclude){
        cy.get(this.include_dropdown).click({force: true})
        cy.contains(eInclude).click({force: true})
    }

    enterSupervisorName(supervisorname){
        cy.get(this.supervisorname_text).type(supervisorname)
    }

    selectJobTitle(eJobTitle){
        cy.get(this.jobtitle_dropdown).click({force: true})
        cy.contains(eJobTitle).click({force: true})
    }

    selectSubUnit(eSubUnit){
        cy.get(this.subunit_dropdown).click({force: true})
        cy.contains(eSubUnit).click({force: true})

    }

}