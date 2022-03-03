const homePage = {
    imgAvatar: '.ax-user-menu-button',
}

Cypress.Commands.add('verifyStayAtHomePage', () => {
    cy.get(homePage.imgAvatar).should('be.visible');
});
