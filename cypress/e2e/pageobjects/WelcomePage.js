class WelcomePage {

    title() {
        return cy.get('#title-welcome-back', { timeout: 10000 });
    }

}

module.exports = WelcomePage;