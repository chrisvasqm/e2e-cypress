class StudentForm {

    fill(student) {
        cy.get('#firstName').type(student.firstName);
        cy.get('#lastName').type(student.lastName);
        cy.get('#email').type(student.email);
        cy.get('#gender-male').click();
        cy.get('#phone').type(student.phone);
        cy.get('input[id=":r9:"]').click();
        cy.contains(student.province).click();
    }

    register() {
        cy.get('#register').click();
    }

}

module.exports = StudentForm;