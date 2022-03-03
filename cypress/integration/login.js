describe('Login behaviors', function () {
    beforeEach(function () {
        cy.navigateToLogin();
    });

    it('Login successfully with valid username and password', function () {
        cy.fillOutLoginEmail(Cypress.env('validUsername'));
        cy.fillOutLoginPwd(Cypress.env('validPwd'));
        cy.clickLoginBtn();
        cy.verifyStayAtHomePage();
    });

    it('Login failed with invalid username and password', function () {
        cy.fillOutLoginEmail(Cypress.env('invalidUsername'));
        cy.fillOutLoginPwd(Cypress.env('invalidPwd'));
        cy.clickLoginBtn();
        cy.verifyLoginErr(Cypress.env('invalidEmailPwdErrMsg'));
    });

});