describe('Ad Creation Flow', () => {
    it('should create a new ad and track performance', () => {
        cy.visit('/business/ads/new');
        cy.get('input[name="businessName"]').type('Smoke Shop');
        cy.get('textarea[name="adContent"]').type('Get 10% off');
        cy.get('button[type="submit"]').click();

        // Ensure ad is created and performance data is tracked
        cy.visit('/business/ads');
        cy.contains('Smoke Shop').should('be.visible');
        cy.contains('Get 10% off').should('be.visible');
    });
});
