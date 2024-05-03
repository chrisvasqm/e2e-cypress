class StudentForm {

    fill(student: Student) {
        cy.get('#firstName').type(student.firstName);
        cy.get('#lastName').type(student.lastName);
        cy.get('#email').type(student.email);
        cy.get(`#gender-${student.gender.toLowerCase()}`).click();
        cy.get('#phone').type(student.phone);
        cy.get('input[id=":r9:"]').click();
        cy.contains(student.province).click();
    }

    register() {
        cy.get('#register').click();
    }

    errors() {
        return [
            cy.get('#firstName-helper-text'),
            cy.get('#lastName-helper-text'),
            cy.get('#email-helper-text'),
            cy.get('#phone-helper-text'),
            cy.get('#provinces-helper-text')
        ];
    }

}

export default StudentForm;