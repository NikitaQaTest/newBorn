import { ApiHelper } from "../support/apiHelper";

describe("First suite", () => {
  let apiCategories; // Объявляем переменные на уровне describe для области видимости

  beforeEach(() => {
    cy.loginByAPI().then(() => { // Добавляем then() для обработки успешного входа
      ApiHelper.getCategories().then((categories) => {
        apiCategories = categories.body; // Присваиваем apiCategories внутри then()
        console.log(apiCategories);
      });
    });
  });

  it("First", () => {
    cy.contains(" Огляд ").click();

    cy.visit("http://5.189.186.217/login");
    cy.get("[id='email']").type("test1@gmail.com");
    cy.get("[id='password']").type("12345Qq");
    cy.get("[type='submit']").click();
    cy.contains(" Асортимент ").click();
    cy.get(".collection").find("a").then((categories) => {
      const uiCategories = categories.Array;
      console.log(uiCategories);

      // Переносим эту часть внутрь блока then() для области видимости
      expect(apiCategories).to.equal(uiCategories);
    });
  });
});
