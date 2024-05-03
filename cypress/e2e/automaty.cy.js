const LoginForm = require('./pageobjects/LoginForm');
const WelcomePage = require('./pageobjects/WelcomePage');
const Automaty = require('./pageobjects/Automaty');

describe('Automaty', () => {
    const automaty = new Automaty();

    describe('Login', () => {
        const form = new LoginForm();

        beforeEach(() => {
            automaty.open();
        })

        it('should login with valid credentials', () => {
            form.signIn('admin', 'admin');

            const welcome = new WelcomePage();

            welcome.title().should('exist');
        })

        it('should see errors with invalid credentials', () => {
            form.signIn('a', 'a');

            form.usernameError().should('exist');
            form.passwordError().should('exist');
        })

        it('should see alert with wrong credentials', () => {
            form.signIn('wrong_username', 'wrong_password');

            form.invalidAlert().should('exist');
        })

    })

    describe('Students', () => {

        beforeEach(() => {
            automaty.open();
            cy.contains('Students').click();
        })

        it('should be able to apply as a Student', () => {
            cy.get('#firstName').type('John');
            cy.get('#lastName').type('Smith');
            cy.get('#email').type('jsmith@gmail.com');
            cy.get('#gender-male').click();
            cy.get('#phone').type('8095555555');
            cy.get('input[id=":r9:"]').click();
            cy.contains('Distrito Nacional').click();
            cy.get('#register').click();

            cy.get('#alert-dialog-title').should('exist');
        })

        it.only('should see errors with invalid values', () => {
            cy.get('#register').click();

            cy.get('#firstName-helper-text').should('exist');
            cy.get('#lastName-helper-text').should('exist');
            cy.get('#email-helper-text').should('exist');
            cy.get('#phone-helper-text').should('exist');
            cy.get('#provinces-helper-text').should('exist');
        })

    })

})
