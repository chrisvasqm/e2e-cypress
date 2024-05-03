const LoginForm = require('./pageobjects/LoginForm');
const WelcomePage = require('./pageobjects/WelcomePage');
const Automaty = require('./pageobjects/Automaty');
const SidePanel = require('./pageobjects/SidePanel');
const StudentForm = require('./pageobjects/StudentForm');
const StudentModal = require('./pageobjects/StudentModal');

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

            form.errors().forEach(error => error.should('exist'));
        })

        it('should see alert with wrong credentials', () => {
            form.signIn('wrong_username', 'wrong_password');

            form.invalidAlert().should('exist');
        })

    })

    describe('Students', () => {
        const form = new StudentForm();

        beforeEach(() => {
            automaty.open();

            const sidePanel = new SidePanel();
            sidePanel.selectStudents();
        })

        it('should be able to apply as a Student', () => {
            form.fill({
                firstName: 'John',
                lastName: 'Smith',
                email: 'jsmith@gmail.com',
                phone: '8095555555',
                province: 'Distrito Nacional'
            });

            form.register();

            const modal = new StudentModal();
            modal.title().should('exist');
        })

        it('should see errors with invalid values', () => {
            form.register();

            form.errors().forEach(error => error.should('exist'));
        })

    })

})
