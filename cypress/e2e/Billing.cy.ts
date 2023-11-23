describe("Billing Page Tests", ()=>{
    it("Verify the billing methods", ()=>{
        cy.visit("https://google.ca")
        cy.log("Sample log")
        cy.contains("Non Existent", {timeout:10}).should('be.visible')
        cy.log("Sample log")
    })
})