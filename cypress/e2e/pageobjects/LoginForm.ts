class LoginForm {

    signIn(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#sign-in').click();
    }

    get errors() {
        return [
            cy.get('#username-helper-text'),
            cy.get('#password-helper-text')
        ];
    }

    get invalidAlert() {
        return cy.contains('Invalid', { timeout: 500 });
    }

}

export default LoginForm;