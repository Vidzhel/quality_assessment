import { ownerDetailsPage } from "../pages/ownerDetails.page";
import { updateCreatePetPage } from "../pages/updateCreatePet.page";
import { welcomePage } from "../pages/welcome.page";
import { ownersPage } from "../pages/owner.page";
import { updateCreateOwnerPage } from "../pages/updateCreateOwner.page";
import { DATE, PET_TYPE, ADDRESS, CITY, TELEPHONE } from "../fixtures/profile.fixture";

Cypress.Commands.add("createPet", (forOwner, petName, birthDate, type) => {
  cy.intercept("POST", "/petclinic/api/pets").as("create-pet");
  welcomePage.visitOwnersPage();
  ownersPage.visitOwnerDetails(forOwner);
  ownerDetailsPage.visitAddNewPet();

  updateCreatePetPage.nameInput().type(petName);
  updateCreatePetPage.birthDateInput().type(birthDate || DATE);
  updateCreatePetPage.typeSelect().select(type || PET_TYPE);
  updateCreatePetPage.savePet().click();

  cy.wait("@create-pet");
});

Cypress.Commands.add("createOwner", (firstName, secondName, address, city, telephone) => {
  cy.intercept("POST", "/petclinic/api/owners").as("create-owner");
  welcomePage.visitNewOwnerPage();

  updateCreateOwnerPage.firstNameInput().type(firstName);
  updateCreateOwnerPage.secondNameInput().type(secondName);
  updateCreateOwnerPage.addressInput().type(address || ADDRESS);
  updateCreateOwnerPage.cityInput().type(city || CITY);
  updateCreateOwnerPage.telephoneInput().type(telephone || TELEPHONE);
  updateCreateOwnerPage.createOwnerButton().click();

  cy.wait("@create-owner");
});

Cypress.Commands.add("deletePets", (forOwner) => {
  cy.intercept("GET", "/petclinic/api/owners/*").as("get-owner");

  welcomePage.visitOwnersPage();
  ownersPage.visitOwnerDetails(forOwner);

  cy.wait("@get-owner");
  ownerDetailsPage.deletePetButtons().click({ multiple: true });
});
