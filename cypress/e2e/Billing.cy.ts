describe("Billing Page Tests", ()=>{
    it("Verify the billing methods", ()=>{
        cy.visit("https://google.ca")
        cy.contains("Non Existent", {timeout:10}).should('be.visible')
    })
})