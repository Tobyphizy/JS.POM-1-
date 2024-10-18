import{elements}from'../fixtures/selector'
describe('Page Object Practice', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    it ('standard_user',() => {
      cy.get(elements.usernameField).should('be.visible').type(elements.standardUser) 
      cy.get(elements.passwordField).should('be.visible').type(elements.password)
      cy.get(elements.loginButton).should('be.visible').click()
      cy.get(elements.backPackimage).should('be.visible')
      cy.get(elements.bikeLight).click()
      cy.get(elements.boltTshirt).should('be.visible').click()
      cy.get(elements.fleeceJacket).should('be.visible').click()
      cy.get(elements.oneSie).should('be.visible').click()
      cy.get(elements.redTshirt).should('be.visible').click()
      cy.get(elements.shoppingCart).click()
      cy.get(elements.shoppingCartitem).should('have.length.greaterThan', 4).and('not.be.empty')
      cy.get(elements.checkOut).click() 
      cy.get(elements.firstNamefield).type(elements.firstName)
      cy.get(elements.lastNamefield).type(elements.lastName)
      cy.get(elements.zipCodefield).type(elements.zipCode)
      cy.get(elements.continue).click()
      cy.get(elements.finish).click()
      cy.get(elements.selectButton).click()
      cy.get(elements.logOut).click()
    })
  })
  
  