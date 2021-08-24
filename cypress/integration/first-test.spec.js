describe("sign in", () => {
    it("should visit login page", () => {
      cy.visit("http://localhost:4200");
    //   cy.get(selectors.usernameInput).type("test");
    //   cy.get(selectors.signInPasswordInput).type("@Test123");
    //   cy.get(selectors.signInSignInButton).contains('Sign In').click();  

    });
  });

  export const selectors = {
    // Auth component classes
    usernameInput: '[data-test="sign-in-username-input"]',
    signInPasswordInput: '[data-test="sign-in-password-input"]',
    signInSignInButton: '[data-test="sign-in-sign-in-button"]',
    signOutButton: '[data-test="sign-out-button"]'
  }