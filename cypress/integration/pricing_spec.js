describe("Pricing Flow", function () {
  it("Continue without filling any field.", function () {
    cy.visit("/pricing");

    cy.get(".step-stats > .primary").contains("Continuar").click();
  });
  it("Fill first input and continue.", function () {
    cy.visit("/pricing");

    cy.get('input[type="number"]').eq(0).type("3");

    cy.get(".step-stats > .primary").contains("Continuar").click();
  });

  it("Fill all necessary inputs/checkbox and continue.", function () {
    cy.visit("/pricing");

    cy.get('input[type="number"]').eq(0).type("3");

    cy.get('input[type="number"]').eq(1).type("2");

    cy.get(".slider").eq(0).click();

    cy.get(".slider").eq(1).click();

    cy.get(".step-stats > .primary").contains("Continuar").click();
  });

  it("Check some checkboxes and continue.", function () {
    cy.get(".slider").eq(2).click();

    cy.get(".slider").eq(4).click();

    cy.get(".step-stats > .primary").eq(2).contains("Continuar").click();
  });

  it("Send without completing any field.", function () {
    cy.get(".step-stats > .primary").contains("Enviar").click();
  });

  it("Fill all necessary fields and send.", function () {
    cy.get('input[type="text"]').eq(0).type("Jose Perez");

    cy.get('input[type="text"]').eq(1).type("jose.perez@email.com");

    cy.get('input[type="text"]').eq(2).type("+54 011 5444 5575");

    cy.get('select[name="profession"] > option')
      .eq(3)
      .then((element) =>
        cy.get('select[name="profession"]').select(element.val())
      );

    cy.get(".step-stats > .primary").contains("Enviar");

    cy.visit("/versions?version=full&addons=adm,aud,osde&pcCount=2&clientId=53&rowVersion=AAAAAAAOhls=");

    cy.url().should(
      "includes",
      "/versions?version=full&addons=adm,aud,osde&pcCount=2&clientId=53&rowVersion=AAAAAAAOhls="
    );
  });
});
