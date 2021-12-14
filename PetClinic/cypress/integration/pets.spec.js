import { ownersPage } from "../pages/owner.page";
import { ownerDetailsPage } from "../pages/ownerDetails.page";
import { updateCreateOwnerPage } from "../pages/updateCreateOwner.page";
import { welcomePage } from "../pages/welcome.page";
import { errors } from "../fixtures/editOwner.fixtures";
import { uuid } from "uuidv4";
import { updateCreatePetPage } from "../pages/updateCreatePet.page";
import {
  ANOTHER_DATE,
  getUniqueName,
  INVALID_DATE,
  PET_TYPES,
  DATE,
  FUTURE_DATE,
  PET_TYPE,
} from "../fixtures/profile.fixture";

describe("pets", () => {
  const ownerName = getUniqueName();

  beforeEach(() => {
    cy.createOwner(ownerName.firstName, ownerName.lastName);
  });

  const createNewPetArgs = [
    { name: getUniqueName().firstName },
    { name: getUniqueName().firstName },
    { name: getUniqueName().firstName },
  ];

  createNewPetArgs.forEach(({ name: petName }) => {
    it("should create new pet", () => {
      const birthDate = DATE;
      const type = PET_TYPE;

      cy.createPet(ownerName.fullName, petName, birthDate, type);

      ownerDetailsPage.petBirthDate(petName).contains(birthDate);
      ownerDetailsPage.petType(petName).contains(type);
      cy.deletePets(ownerName.fullName);
    });
  });

  describe("", () => {
    const petName = getUniqueName().firstName;
    const birthDate = DATE;
    const type = PET_TYPES.CAT;

    beforeEach(() => {
      cy.createPet(ownerName.fullName, petName, birthDate, type);

      welcomePage.visitOwnersPage();
      ownersPage.visitOwnerDetails(ownerName.fullName);
    });

    it("should delete pet", () => {
      ownerDetailsPage.deletePetButton(petName).click();
      ownerDetailsPage.petsTable().should("not.contain.text", petName);
    });

    it("should update pet", () => {
      const newPetName = getUniqueName().firstName;
      const newBirthDate = ANOTHER_DATE;
      const newType = PET_TYPES.DOG;

      ownerDetailsPage.editPetButton(petName).click();

      updateCreatePetPage.nameInput().should("have.value", petName).clear().type(newPetName);
      updateCreatePetPage
        .birthDateInput()
        .should("have.value", birthDate)
        .clear()
        .type(newBirthDate);
      updateCreatePetPage.typeSelect().select(newType);
      updateCreatePetPage.updatePet().click();

      ownerDetailsPage.petDetails(petName).should("not.exist");
      ownerDetailsPage
        .petBirthDate(newPetName)
        .contains(newBirthDate)
        .should("have.text", newBirthDate);
      ownerDetailsPage.petType(newPetName).contains(newType).should("have.text", newType);

      cy.deletePets(ownerName.fullName);
    });

    it("should not update pet, when invalid birth date", () => {
      const newPetName = getUniqueName().firstName;

      const invalidBirthDate = INVALID_DATE;
      const newType = PET_TYPES.DOG;

      ownerDetailsPage.editPetButton(petName).click();

      updateCreatePetPage.nameInput().clear().type(newPetName);
      updateCreatePetPage.birthDateInput().clear().type(invalidBirthDate);
      updateCreatePetPage.typeSelect().select(newType);

      cy.intercept("PUT", "petclinic/api/pets/*").as("update-pet");
      updateCreatePetPage.updatePet().click();
      cy.wait("@update-pet").its("response.statusCode").should("equal", 400);

      welcomePage.visitOwnersPage();
      ownersPage.visitOwnerDetails(ownerName.fullName);
      ownerDetailsPage.petDetails(newPetName).should("not.exist");
      cy.deletePets(ownerName.fullName);
    });

    it("should not update pet, when future birth date", () => {
      const newPetName = getUniqueName().firstName;
      const futureBirthDate = FUTURE_DATE;
      const newType = PET_TYPES.DOG;

      ownerDetailsPage.editPetButton(petName).click();

      updateCreatePetPage.nameInput().clear().type(newPetName);
      updateCreatePetPage.birthDateInput().clear().type(futureBirthDate);
      updateCreatePetPage.typeSelect().select(newType);

      cy.intercept("PUT", "petclinic/api/pets/*").as("update-pet");
      updateCreatePetPage.updatePet().click();
      cy.wait("@update-pet").its("response.statusCode").should("equal", 400);

      welcomePage.visitOwnersPage();
      ownersPage.visitOwnerDetails(ownerName.fullName);
      ownerDetailsPage.petDetails(newPetName).should("not.exist");
      cy.deletePets(ownerName.fullName);
    });
  });
});
