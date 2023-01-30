/// <reference types = "Cypress" />>

const { first } = require("cypress/types/lodash")


describe("Check UI elements", () => {

//  it("Check radio buttons", () => {
   
//     cy.visit("https://itera-qa.azurewebsites.net/home/automation")
   
//     // visibility of radio button
//     cy.get("input#male").should('be.visible')
//     cy.get("input#female").should('be.visible')
    
//   // selecting the radio button

//   cy.get("input#male").check().should("be.checked")
//   cy.get("input#female").should("not.be.checked")

//   cy.get("input#female").check().should("be.checked")
//   cy.get("input#male").should("not.be.checked")

//  })


it("Checking check boxes", () => {
   
    cy.visit("https://itera-qa.azurewebsites.net/home/automation")


   // visibility of tyhe element
   cy.get("#monday").should("be.visible")
//    cy.get("#tuesday").should("be.visible")
//    cy.get("#wednesday").should("be.visible")
//    cy.get("#thursday").should("be.visible")
//    cy.get("#friday").should("be.visible")
//    cy.get("#saturday").should("be.visible")
//    cy.get("#sunday").should("be.visible")

// selecting single check-box monday

cy.get("#monday").check().should("be.checked")


// unselecting the check-box 

cy.get("#monday").uncheck().should("not.be.checked")

// selecting all the checkboxes

// cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
// cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

// select first check-box from all other checkboxes

cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")
cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")



 })
 


})