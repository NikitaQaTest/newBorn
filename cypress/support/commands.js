import { ApiHelper } from "./apiHelper";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



// Cypress.Commands.add("loginByAPI", () => {
//     cy.request("POST", "/api/auth/login", {
//         email: "test1@gmail.com",
//         password: "12345Qq"
//     }).then(res => {
//         const token = res.body.token;
//         console.log(token);
//         cy.visit("/overview", {
//             onBeforeLoad(win) {
//                 win.localStorage.setItem("auth-token", token);
//             }
//         });
        
//     })
// } )

Cypress.Commands.add("getToken", () => {
    cy.request("POST", "/api/auth/login", {
        email: "test1@gmail.com",
        password: "12345Qq"
    }).then(res => {
        const token = res.body.token;
        cy.wrap(token).as("token"); 
    });
} )

Cypress.Commands.add("loginByAPI", () => {
    ApiHelper.getToken().then((token) => {
        cy.visit("http://5.189.186.217/history", {
            onBeforeLoad(win) {
                win.localStorage.setItem("auth-token", token);
            }
        });
    });

    
});

// Cypress.Commands.add("loginByAPI", () => {
//     ApiHelper.getToken().then((token) => {
//       cy.visit("http://5.189.186.217/analytics", {
//         onBeforeLoad(win) {
//           win.localStorage.setItem("auth-token", token);
//         }
//       });
  
//       // Добавляем intercept для запроса /api/analytics/overview
//       cy.intercept(
//         'GET',
//         'http://5.189.186.217/api/analytics/analytics',
//         { statusCode: 200 } // Провалидируем статус-код запроса = 200
//       ).as('analyticsOverview');
  
//       // Устанавливаем максимальное время ожидания для intercept в 7 секунд
//       cy.wait('@analyticsOverview', { timeout: 7000 });
//     });
//   });
  



