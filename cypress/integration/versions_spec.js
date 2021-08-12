import { mockUserData } from "../fixtures";
import { setUrlVersions } from "../../utils";

describe('Versions', function () {
  const { small, smallpre, standard, full } = mockUserData
  it("Small Version", function () {
    const mockData = {
      version: { id: "small", rowversion: "AAAAAAAOhls=" },
      client: { id: 53, pc_count_number: 2 },
    };
    const url = setUrlVersions(mockData, small);
    cy.visit(url);
    cy.url().should(
      "includes",
      "/versions?version=small&addons=&pcCount=2&clientId=53&rowVersion=AAAAAAAOhls="
    );
  });

  it("Small Premium Version", function () {
    const mockData = {
      version: { id: "smallpre", rowversion: "AAAAAAAOhls=" },
      client: { id: 53, pc_count_number: 3 },
    };
    const url = setUrlVersions(mockData, smallpre);
    cy.visit(url);
    cy.url().should(
      "includes",
      "/versions?version=smallpre&addons=&pcCount=3&clientId=53&rowVersion=AAAAAAAOhls="
    );
  });

  it("Standard Version", function () {
    const mockData = {
      version: { id: "standard", rowversion: "AAAAAAAOhls=" },
      client: { id: 53, pc_count_number: 4 },
    };
    const url = setUrlVersions(mockData, standard);
    cy.visit(url);
    cy.url().should(
      "includes",
      "/versions?version=standard&addons=adm,aud&pcCount=4&clientId=53&rowVersion=AAAAAAAOhls="
    );
  });

  it("Full Version", function () {
    const mockData = {
      version: { id: "full", rowversion: "AAAAAAAOhls=" },
      client: { id: 53, pc_count_number: 2 },
    };
    const url = setUrlVersions(mockData, full);
    cy.visit(url);
    cy.url().should(
      "includes",
      "/versions?version=full&addons=adm,aud,osde&pcCount=2&clientId=53&rowVersion=AAAAAAAOhls="
    );
  });
});