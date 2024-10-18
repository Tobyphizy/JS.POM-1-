import{elements}from'../fixtures/selector'
describe('POM FIXTURE -SAUCE DEMO WEBSITE (LOCALLY)', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.title().should('equal', 'Swag Labs')
        })
    
        it('Verify if Standard User can login successfully', () => {
            cy.fixture('POM2').then((el) => {
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
    
            })
        })
    
        it('verify if Standard user cannot login with invalid password', () => {
            cy.fixture('POM2').then((el) => {
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.invalidPassword)
                cy.get(el.loginButton).click()
    
            })
        })
     
        it('verify if user can view product display and add to cart', () => {
            cy.fixture('POM2').then((el) => {
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
                cy.get(el.backPack).should('be.visible').click()
                cy.get(el.bikeLight).should('be.visible').click()
                cy.get(el.boltTshirt).should('be.visible').click()
                cy.get(el.oneSie).should('be.visible').click()
                cy.get(el.fleeceJacket).should('be.visible').click()
                cy.get(el.redTshirt).should('be.visible').click()
            })
        })
    
        it('Verify if user can view all added items on the shopping cart', () => {
            cy.fixture('POM2').then((el) => {
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
                cy.get(el.shoppingCart).should('be.visible').click()
                cy.get(el.checkOut).click()
                
            })
        })
    
        it('verify if user can checkout if only few items are selected', () =>{ 
            cy.fixture('POM2').then((el) => {
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
                cy.get(el.backPack).should('be.visible').click()
                cy.get(el.bikeLight).should('be.visible').click()
                cy.get(el.boltTshirt).should('be.visible').click()
                cy.get(el.shoppingCart).should('be.visible').click()
                cy.get(el.checkOut).click()
    
            })
        })
    
        it('Verfiy user can see all 6 items and proceed to checkout after selecting all items', () =>{
            cy.fixture('POM2').then((el) =>{
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
                cy.get(el.backPack).should('be.visible').click()
                cy.get(el.bikeLight).should('be.visible').click()
                cy.get(el.boltTshirt).should('be.visible').click()
                cy.get(el.oneSie).should('be.visible').click()
                cy.get(el.fleeceJacket).should('be.visible').click()
                cy.get(el.redTshirt).should('be.visible').click()
                cy.get(el.shoppingCart).should('be.visible').click()
                cy.get(el.shoppingCartitem).should('have.length.greaterThan', 5).and('not.be.empty')
                cy.get(el.checkOut).click()
                
            })
        })
    
        it('Verfiy user can input first, last name and zipcode after checkout', () =>{
            cy.fixture('POM2').then((el) =>{
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
                cy.get(el.backPack).should('be.visible').click()
                cy.get(el.bikeLight).should('be.visible').click()
                cy.get(el.boltTshirt).should('be.visible').click()
                cy.get(el.oneSie).should('be.visible').click()
                cy.get(el.fleeceJacket).should('be.visible').click()
                cy.get(el.redTshirt).should('be.visible').click()
                cy.get(el.shoppingCart).should('be.visible').click()
                cy.get(el.checkOut).click()
                cy.get(el.firstNamefield).should('be.visible').type(el.firstName)
                cy.get(el.lastNamefield).should('be.visible').type(el.lastName)
                cy.get(el.zipCodefield).should('be.visible').type(el.zipCode)
            })
    
        })
    
        it('Verfiy user can proceed to continue after inputting first, last name and zipcode', () =>{
            cy.fixture('POM2').then((el) =>{
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
                cy.get(el.backPack).should('be.visible').click()
                cy.get(el.bikeLight).should('be.visible').click()
                cy.get(el.boltTshirt).should('be.visible').click()
                cy.get(el.oneSie).should('be.visible').click()
                cy.get(el.fleeceJacket).should('be.visible').click()
                cy.get(el.redTshirt).should('be.visible').click()
                cy.get(el.shoppingCart).should('be.visible').click()
                cy.get(el.checkOut).click()
                cy.get(el.firstNamefield).should('be.visible').type(el.firstName)
                cy.get(el.lastNamefield).should('be.visible').type(el.lastName)
                cy.get(el.zipCodefield).should('be.visible').type(el.zipCode)
                cy.get(el.continue).should('be.visible').click()
    
            })
    
        })
    
        it('Verfiy user can proceed to finish after confirming items selected on display to complete the order', () =>{
            cy.fixture('POM2').then((el) =>{
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
                cy.get(el.backPack).should('be.visible').click()
                cy.get(el.bikeLight).should('be.visible').click()
                cy.get(el.boltTshirt).should('be.visible').click()
                cy.get(el.oneSie).should('be.visible').click()
                cy.get(el.fleeceJacket).should('be.visible').click()
                cy.get(el.redTshirt).should('be.visible').click()
                cy.get(el.shoppingCart).should('be.visible').click()
                cy.get(el.checkOut).click()
                cy.get(el.firstNamefield).should('be.visible').type(el.firstName)
                cy.get(el.lastNamefield).should('be.visible').type(el.lastName)
                cy.get(el.zipCodefield).should('be.visible').type(el.zipCode)
                cy.get(el.continue).should('be.visible').click()
                cy.get(el.finish).should('be.visible').click()
    
            })
        })
    
    
        it('Verfiy user can proceed to finish after confirming items selected on display to complete the order', () =>{
            cy.fixture('POM2').then((el) =>{
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
                cy.get(el.backPack).should('be.visible').click()
                cy.get(el.bikeLight).should('be.visible').click()
                cy.get(el.boltTshirt).should('be.visible').click()
                cy.get(el.oneSie).should('be.visible').click()
                cy.get(el.fleeceJacket).should('be.visible').click()
                cy.get(el.redTshirt).should('be.visible').click()
                cy.get(el.shoppingCart).should('be.visible').click()
                cy.get(el.checkOut).click()
                cy.get(el.firstNamefield).should('be.visible').type(el.firstName)
                cy.get(el.lastNamefield).should('be.visible').type(el.lastName)
                cy.get(el.zipCodefield).should('be.visible').type(el.zipCode)
                cy.get(el.continue).should('be.visible').click()
                cy.get(el.finish).should('be.visible').click()
            })
    
        })
    
        it('Verfiy user can go back to home page once order is completed', () =>{
            cy.fixture('POM2').then((el) =>{
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
                cy.get(el.backPack).should('be.visible').click()
                cy.get(el.bikeLight).should('be.visible').click()
                cy.get(el.boltTshirt).should('be.visible').click()
                cy.get(el.oneSie).should('be.visible').click()
                cy.get(el.fleeceJacket).should('be.visible').click()
                cy.get(el.redTshirt).should('be.visible').click()
                cy.get(el.shoppingCart).should('be.visible').click()
                cy.get(el.checkOut).click()
                cy.get(el.firstNamefield).should('be.visible').type(el.firstName)
                cy.get(el.lastNamefield).should('be.visible').type(el.lastName)
                cy.get(el.zipCodefield).should('be.visible').type(el.zipCode)
                cy.get(el.continue).should('be.visible').click()
                cy.get(el.finish).should('be.visible').click()
                cy.get(el.backToproduct).click()
    
            })
        })
    
        it('Verfiy user can logout successfully', () =>{
            cy.fixture('POM2').then((el) =>{
                cy.get(el.usernameField).type(el.standardUser)
                cy.get(el.passwordField).type(el.password)
                cy.get(el.loginButton).click()
                cy.get(el.backPack).should('be.visible').click()
                cy.get(el.bikeLight).should('be.visible').click()
                cy.get(el.boltTshirt).should('be.visible').click()
                cy.get(el.oneSie).should('be.visible').click()
                cy.get(el.fleeceJacket).should('be.visible').click()
                cy.get(el.redTshirt).should('be.visible').click()
                cy.get(el.shoppingCart).should('be.visible').click()
                cy.get(el.checkOut).click()
                cy.get(el.firstNamefield).should('be.visible').type(el.firstName)
                cy.get(el.lastNamefield).should('be.visible').type(el.lastName)
                cy.get(el.zipCodefield).should('be.visible').type(el.zipCode)
                cy.get(el.continue).should('be.visible').click()
                cy.get(el.finish).should('be.visible').click()
                cy.get(el.backToproduct).click()
                cy.get(el.selectButton).should('be.visible').click()
                cy.get(el.logOut).should('be.visible').click()
                
            })
        })
    })
    

