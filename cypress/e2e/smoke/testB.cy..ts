xdescribe("Suite B", ()=>{
    it("Test B A", ()=>{
        cy.log("This is test B A ")
        expect(true).to.be.true
    })

    it("Test B B", ()=>{
        cy.log("This is test B B ")
        expect(true).to.be.true
    })

    it("Test B C", ()=>{
        cy.log("This is test B C ")
        expect(true).to.be.true
    })

    it("Test B D", ()=>{
        cy.log("This is test B D ")
        expect(true).to.be.false
    })
})