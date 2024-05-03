class SidePanel {

    selectStudents() {
        cy.contains('Students').click();
    }

}

module.exports = SidePanel;