class WelcomePage {
  visitOwnersPage() {
    cy.visit("");
    cy.contains("a", "owner", { matchCase: false }).click();
    cy.contains("a", "all", { matchCase: false }).click();
  }

  visitNewOwnerPage() {
    cy.visit("");
    cy.contains("a", "owner", { matchCase: false }).click();
    cy.contains("a", "add new", { matchCase: false }).click();
  }
}

export const welcomePage = new WelcomePage();
