describe("Pets", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("I create new pet", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://20.50.171.10:8080/");
    cy.get(":nth-child(2) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a").click();
    cy.get(":nth-child(1) > .ownerFullName > a").click();
    cy.get(".addNewPet").click();
    cy.get("#name").clear();
    cy.get("#name").type("Didi");
    cy.get(":nth-child(5) > .col-sm-10 > .ng-untouched").clear();
    cy.get(":nth-child(5) > .col-sm-10 > .ng-untouched").type("2021/09/15");
    cy.get("#type").select("0: Object");
    cy.get(".savePet").click();
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .petName"
    ).should("have.text", "Didi");
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .petName"
    ).should("be.visible");
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .petBirthDate"
    ).should("have.text", "2021/09/15");
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .petBirthDate"
    ).should("be.visible");
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .petType"
    ).should("have.text", "cat");
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .petType"
    ).should("be.visible");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("I delete a pet", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://20.50.171.10:8080");
    cy.get(":nth-child(2) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a").click();
    cy.get(":nth-child(1) > .ownerFullName > a").click();
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .deletePet"
    ).click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("I update pet", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://20.50.171.10:8080");
    cy.get(":nth-child(2) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a > :nth-child(2)").click();
    cy.get(":nth-child(1) > .ownerFullName > a").click();
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .editPet"
    ).click();
    cy.get("#name").clear();
    cy.get("#name").type("Bibi");
    cy.get(":nth-child(5) > .ng-untouched").clear();
    cy.get(":nth-child(5) > .ng-valid").clear();
    cy.get(":nth-child(5) > .ng-valid").type("2020/09/15");
    cy.get("#type").select("1: Object");
    cy.get(".updatePet").click();
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .petName"
    ).should("have.text", "Bibi");
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .petBirthDate"
    ).should("have.text", "2020/09/15");
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .petType"
    ).should("have.text", "dog");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("I see errors when insert invalid values during a pet edditing", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://20.50.171.10:8080");
    cy.get(":nth-child(2) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a").click();
    cy.get(":nth-child(1) > .ownerFullName > a").click();
    cy.get(
      ":nth-child(1) > .table-striped > tr > :nth-child(1) > .dl-horizontal > .editPet"
    ).click();
    cy.get(":nth-child(5) > .ng-untouched").clear();
    cy.get(":nth-child(5) > .ng-untouched").type("2020/09/33");
    cy.get("#type").select("1: Object");
    cy.get(".updatePet").click();
    cy.get(":nth-child(5) > .ng-dirty").clear();
    cy.get(":nth-child(5) > .ng-dirty").type("2022/09/23");
    cy.get(".updatePet").click();
    /* ==== End Cypress Studio ==== */
  });
});
