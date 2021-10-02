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

describe("Test Owner related operations", () => {
  it("should load Owners page when menu button is clicked", () => {
    welcomePage.visitOwnersPage();
    cy.contains("h2", "Owners").should("be.visible");
    ownersPage.tableHeaderCells().then((columnHeaders) => {
      const headerNames = columnHeaders
        .map(function () {
          return this.innerText;
        })
        .get();
      expect(headerNames).to.eql(["Name", "Address", "City", "Telephone", "Pets"]);
    });
  });

  it("should successfully create owner", () => {
    cy.createOwner("firstName", "lastName");
  });

  describe("Test update user page", () => {
    const ownerName = getUniqueName();

    beforeEach(() => {
      cy.createOwner(ownerName.firstName, ownerName.lastName);

      ownersPage.visitOwnerDetails(ownerName.fullName);
      ownerDetailsPage.visitEditOwner();
    });

    it("should update owners first name when save edits is clicked", () => {
      const newOwnerName = getUniqueName();

      updateCreateOwnerPage
        .firstNameInput()
        .should("have.value", ownerName.firstName)
        .clear()
        .type(newOwnerName.firstName);
      updateCreateOwnerPage
        .secondNameInput()
        .should("have.value", ownerName.lastName)
        .clear()
        .type(newOwnerName.lastName);
      updateCreateOwnerPage.updateOwnerButton().click();

      ownerDetailsPage.ownerName().should("contain", newOwnerName.fullName);
    });

    it("should not update owners first name when back is clicked", () => {
      const newOwnerName = getUniqueName();

      updateCreateOwnerPage.firstNameInput().clear().type(newOwnerName.firstName);

      updateCreateOwnerPage.secondNameInput().clear().type(newOwnerName.lastName);
      updateCreateOwnerPage.discardOwnerButton().click();

      ownerDetailsPage.ownerName().should((el) => expect(el.text().trim()).not.equal(""));
      ownerDetailsPage.ownerName().should("not.have.text", newOwnerName.fullName);
    });

    it("should show error during owner update when first name is invalid", () => {
      updateCreateOwnerPage.firstNameInput().should("have.value", ownerName.firstName);
      updateCreateOwnerPage.helpBlock().should("not.exist");

      updateCreateOwnerPage.firstNameInput().clear();
      updateCreateOwnerPage
        .helpBlock()
        .should("be.visible")
        .and("contain.text", errors.FirstNameRequired);

      updateCreateOwnerPage.firstNameInput().type("J");
      updateCreateOwnerPage
        .helpBlock()
        .should("be.visible")
        .and("contain.text", errors.FirstNameMinimalLength);

      updateCreateOwnerPage.firstNameInput().type("o");
      updateCreateOwnerPage.helpBlock().should("not.exist");
    });

    it("should show error during owner update when telephone invalid", () => {
      updateCreateOwnerPage.telephoneInput().should("not.have.value");
      updateCreateOwnerPage.helpBlock().should("not.exist");

      updateCreateOwnerPage.telephoneInput().clear();
      updateCreateOwnerPage
        .helpBlock()
        .should("be.visible")
        .and("contain.text", errors.TelephoneRequired);
      updateCreateOwnerPage.updateOwnerButton().should("be.disabled");

      updateCreateOwnerPage.telephoneInput().type("1234b245");
      updateCreateOwnerPage
        .helpBlock()
        .should("be.visible")
        .and("contain.text", errors.TelephoneMustContainOnlyDigits);
      updateCreateOwnerPage.updateOwnerButton().should("be.disabled");

      updateCreateOwnerPage.telephoneInput().clear().type("123453");
      updateCreateOwnerPage.helpBlock().should("not.exist");
    });
  });
});
