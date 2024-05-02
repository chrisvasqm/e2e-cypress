const LoginForm = require('./pageobjects/LoginForm');
const WelcomePage = require('./pageobjects/WelcomePage');

describe('Login', () => {
    const form = new LoginForm();

    beforeEach(() => {
        form.open();
    })

    it('should login with valid credentials', () => {
        form.signIn('admin', 'admin');

        const welcome = new WelcomePage();

        welcome.title().should('exist');
    })

    it('should see errors invalid invalid credentials', () => {
        form.signIn('a', 'a');

        form.usernameError().should('exist');
        form.passwordError().should('exist');
    })

    it('should see alert with wrong credentials', () => {
        form.signIn('wrong_username', 'wrong_password');

        form.invalidAlert().should('exist');
    })

})
