class UpdateCreateOwnerPage {
  firstNameInput() {
    return cy.get("input#firstName");
  }

  secondNameInput() {
    return cy.get("input#lastName");
  }

  addressInput() {
    return cy.get("input#address");
  }

  cityInput() {
    return cy.get("input#city");
  }

  telephoneInput() {
    return cy.get("input#telephone");
  }

  helpBlock() {
    return cy.get(".help-block");
  }

  updateOwnerButton() {
    return cy.get("button.updateOwner");
  }

  createOwnerButton() {
    return cy.get("button.addOwner");
  }

  discardOwnerButton() {
    return cy.get("button.goBack");
  }
}

export const updateCreateOwnerPage = new UpdateCreateOwnerPage();
