describe("Landing Page Tests", ()=>{
    it("Verify the landing page elements", ()=>{
        cy.visit("https://google.ca")
        cy.contains("Non Existent", {timeout:10}).should('be.visible')
    })
})