describe("API Tests", ()=>{
    it("Verify the HTTP calls", ()=>{
        cy.visit("https://google.ca")
        cy.log("Sample log")
    })
})