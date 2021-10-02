class OwnersPage {
  tableHeaderCells() {
    return cy.get("table th");
  }

  tableRows() {
    return cy.get("table tr");
  }

  getOwnerDetails(ownerName) {
    return cy.contains(".petOwner", ownerName);
  }

  visitOwnerDetails(ownerName) {
    return this.getOwnerDetails(ownerName).find(`.ownerFullName > a`).click();
  }
}

export const ownersPage = new OwnersPage();
