class WelcomePage {

    get title() {
        return cy.get('#title-welcome-back', { timeout: 10000 });
    }

}

export default WelcomePage;