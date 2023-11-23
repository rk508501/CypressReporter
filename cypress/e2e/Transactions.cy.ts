describe("Transaction Tests", ()=>{
    it("Verify the transactions", ()=>{
        cy.visit("https://google.ca")
        cy.log("Sample log")
        cy.contains("Non Existent", {timeout:10}).should('be.visible')
    })
})