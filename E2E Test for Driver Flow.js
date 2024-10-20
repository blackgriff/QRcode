describe('Driver Profile Flow', () => {
    it('should create a new driver and display the QR code', () => {
        cy.visit('/admin/drivers/new');
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="vehicleId"]').type('1234');
        cy.get('button[type="submit"]').click();

        // Ensure QR code is generated
        cy.get('.qr-code').should('be.visible');
        cy.get('.qr-code img').should('have.attr', 'src').and('include', 'http://test.com/qr');
    });
});
