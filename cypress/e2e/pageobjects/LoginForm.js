class LoginForm {

    open() {
        cy.visit("https://automaty.vercel.app/");
    }

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
        return cy.contains('Invalid');
    }

}

module.exports = LoginForm;