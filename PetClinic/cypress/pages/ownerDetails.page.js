class OwnerDetailsPage {
  visitEditOwner() {
    return cy.get("button.editOwner").click();
  }

  visitAddNewPet() {
    return cy.get("button.addNewPet").click();
  }

  ownerName() {
    return cy.get(".ownerDetails > :nth-child(1) b");
  }

  petsTable() {
    return cy.get("table.petDetails app-pet-list");
  }

  petDetails(petName) {
    return cy.contains("table.petDetails app-pet-list", petName);
  }

  petBirthDate(petName) {
    return this.petDetails(petName).find(".petBirthDate");
  }

  petType(petName) {
    return this.petDetails(petName).find(".petType");
  }

  petName(petName) {
    return this.petDetails(petName).find(".petName");
  }

  deletePetButton(petName) {
    return this.petDetails(petName).find(".deletePet");
  }

  deletePetButtons() {
    return cy.get(".deletePet");
  }

  editPetButton(petDetailsContain) {
    return this.petDetails(petDetailsContain).find(".editPet");
  }
}

export const ownerDetailsPage = new OwnerDetailsPage();
