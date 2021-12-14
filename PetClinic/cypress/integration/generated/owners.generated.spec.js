describe("Owners", () => {
  /* ==== Test Created with Cypress Studio ==== */
  it("I create new owner", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://20.50.171.10:8080/");
    cy.get(":nth-child(2) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a").click();
    cy.get("h2").should("have.text", "Owners");
    cy.get(".btn").should("have.text", "Add Owner");
    cy.get(".btn").should("be.enabled");
    cy.get(".btn").should("be.visible");
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(2) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(2) > a").click();
    cy.get("#firstName").clear();
    cy.get("#firstName").type("John");
    cy.get("#lastName").clear();
    cy.get("#lastName").type("Doe");
    cy.get("#address").clear();
    cy.get("#address").type("Address");
    cy.get("#city").clear();
    cy.get("#city").type("City");
    cy.get("#telephone").clear();
    cy.get("#telephone").type("123456789");
    cy.get(".addOwner").should("be.enabled");
    cy.get(".addOwner").click();
    cy.get(":nth-child(73) > .ownerFullName").should("have.text", "John Doe");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("Owners page accessible from header menu", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://20.50.171.10:8080/");
    cy.get(":nth-child(2) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a").click();
    cy.get("h2").should("have.text", "Owners");
    cy.get("h2").should("be.visible");
    cy.get(".btn").should("have.text", "Add Owner");
    cy.get(".btn").should("be.visible");
    cy.get(".btn").should("be.enabled");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("I update owner", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://20.50.171.10:8080/");
    cy.get(":nth-child(2) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a").click();
    cy.get(":nth-child(1) > .ownerFullName > a").click();
    cy.get(".editOwner").click();
    cy.get("#firstName").clear();
    cy.get("#firstName").type("Johnatan");
    cy.get("#lastName").clear();
    cy.get("#lastName").type("Doephwel");
    cy.get(".updateOwner").should("be.enabled");
    cy.get(".updateOwner").should("be.visible");
    cy.get("app-owner-edit > .container-fluid").click();
    cy.get(".updateOwner").click();
    cy.get("b").should("have.text", "Johnatan Doephwel");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("I cancel editing of an owner", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://20.50.171.10:8080/");
    cy.get(":nth-child(2) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a").click();
    cy.get(":nth-child(2) > .ownerFullName > a").click();
    cy.get(".editOwner").click();
    cy.get("#firstName").clear();
    cy.get("#firstName").type("Johnatan");
    cy.get("#lastName").clear();
    cy.get("#lastName").type("Doephwel");
    cy.get(".goBack").click();
    cy.get("b").should("have.text", "Betty Davis");
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("I see error when enter invalid values during Owner editing", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://20.50.171.10:8080/");
    cy.get(":nth-child(2) > .dropdown-toggle").click();
    cy.get(".open > .dropdown-menu > :nth-child(1) > a").click();
    cy.get(":nth-child(1) > .ownerFullName > a").click();
    cy.get(".editOwner").click();
    cy.get("#firstName").click();
    cy.get("#firstName").clear();
    cy.get(".help-block").should("have.text", "First name is required");
    cy.get(".help-block").should("be.visible");
    cy.get(".updateOwner").should("be.disabled");
    cy.get("#firstName").clear();
    cy.get("#firstName").type("J");
    cy.get(".help-block").should("have.text", "First name must be at least 2 characters long");
    cy.get(".help-block").should("be.visible");
    cy.get(".updateOwner").should("be.disabled");
    cy.get("#firstName").clear();
    cy.get("#firstName").type("JoJo");
    cy.get("#telephone").click();
    cy.get("#city").click();
    cy.get("#telephone").clear();
    cy.get(".help-block").should("have.text", "Phone number is required");
    cy.get(".help-block").should("be.visible");
    cy.get(".updateOwner").should("be.disabled");
    cy.get("#telephone").clear();
    cy.get("#telephone").type("123b45678");
    cy.get(".help-block").should("have.text", "Phone number only accept digits");
    cy.get(".help-block").should("be.visible");
    cy.get(".updateOwner").should("be.disabled");
    /* ==== End Cypress Studio ==== */
  });
});
