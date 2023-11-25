describe("Suite C", ()=>{
    it("Test C A", ()=>{
        cy.log("This is test A A ")
        expect(true).to.be.true
    })

    it("Test C B", ()=>{
        cy.log("This is test A B ")
        expect(true).to.be.false
    })

    it("Test C C", ()=>{
        cy.log("This is test A C ")
        expect(true).to.be.true
    })

    it.skip("Test C D", ()=>{
        cy.log("This is test A D ")
        expect(true).to.be.false
    })
})