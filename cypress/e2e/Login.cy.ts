import { generateUUID } from "../support/e2e"

describe("Login Tests", ()=>{
    it("Verify the login tests", ()=>{
        cy.visit("https://google.ca")
        cy.log("Sample log")
        cy.contains("Non Existent", {timeout:10}).should('be.visible')
    })

    it("UUID Test", ()=>{
        cy.log(generateUUID())
    })
})