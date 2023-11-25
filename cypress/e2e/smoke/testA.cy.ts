describe("Suite A", ()=>{
    it("Test A A", ()=>{
        cy.log("This is test A A ")
        expect(true).to.be.true
    })

    it("Test A B", ()=>{
        cy.log("This is test A B ")
        expect(true).to.be.true
    })

    it("Test A C", ()=>{
        cy.log("This is test A C ")
        expect(true).to.be.true
    })

    it("Test A D", ()=>{
        cy.log("This is test A D ")
        expect(true).to.be.false
    })
})