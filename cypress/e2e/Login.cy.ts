describe("Login Tests", ()=>{
    it("Verify the login tests", ()=>{
        cy.visit("https://google.ca")
        cy.contains("Non Existent", {timeout:10}).should('be.visible')
    })
})