describe('Login', () => {
    before(() => {
        cy.visit("https://automaty.vercel.app/");
    })

    it('should login with valid credentials', () => {
        cy.get('#username').type('admin');
        cy.get('#password').type('admin');
        cy.get('#sign-in').click();

        cy.get('#title-welcome-back').should('exist');
    })
})
