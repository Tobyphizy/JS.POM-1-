import LoginPage from '../POM/POM4'
const demo = new LoginPage

describe('CLASS POM', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('equal', 'Swag Labs')
       
    })

    it ('Standard User', ()=>{
        demo.setUsername()
        demo.setPassword()
        demo.setLoginbutton()
    })

    it('Locked user', () => {
        demo.setLockeduser()
        demo.setPassword()
        demo.setLoginbutton()
    })

    it('Select Items', () => {
        demo.setUsername()
        demo.setPassword()
        demo.setLoginbutton()
        demo.setShoppingitem()
    })

    it('Shopping Checkout', () => {
        demo.setUsername()
        demo.setPassword()
        demo.setLoginbutton()
        demo.setCheckoutshopping()

    })

    it ('logout', () =>{
        demo.setUsername()
        demo.setPassword()
        demo.setLoginbutton()
        demo.setShoppingitem()
        demo.setCheckoutshopping()
        demo.setLogout()
    })


})