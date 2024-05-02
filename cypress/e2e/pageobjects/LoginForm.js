class LoginForm {

    signIn(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#sign-in').click();
    }

    usernameError() {
        return cy.get('#username-helper-text');
    }

    passwordError() {
        return cy.get('#password-helper-text');
    }

    invalidAlert() {
        return cy.contains('Invalid', { timeout: 500 });
    }

}

module.exports = LoginForm;