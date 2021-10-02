class UpdateCreatePetPage {
  nameInput() {
    return cy.get("input#name");
  }

  birthDateInput() {
    return cy.get("input[name='birthDate']");
  }

  typeSelect() {
    return cy.get("select#type");
  }

  backButton() {
    return cy.get(".goBack");
  }

  savePet() {
    return cy.get(".savePet");
  }

  updatePet() {
    return cy.get(".updatePet");
  }
}

export const updateCreatePetPage = new UpdateCreatePetPage();
