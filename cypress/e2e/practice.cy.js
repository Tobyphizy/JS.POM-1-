import {elements} from '../fixtures/selector'
describe('PAGE OF OBJECT PRACTICE', ()=>{ 
    beforeEach(()=>{
        cy.visit('/')
    })

    it ('standard_user',()=>{
        cy.get(elements.usernameField).should('be.visible').type(elements.standardUser)
        cy.get(elements.passwordField).should('be.visible').type(elements.password)
        cy.get(elements.loginButton).should('be.visible').click()
    })
})