import { PersonDetails } from "../fixtures/TypeDeclarations"
import * as Interfaces from "../support/e2e"

describe("Checkout tests", () => {

    beforeEach(()=>{
        cy.log("This is before each method from checkout page")
    })

    let person: PersonDetails = {
        "SSN": 242423423,
        "address": "123 Main",
        "firstName": "Heisenberg"
    }

    let p:any = {
        type: 'home',
        number: '(123) 456-7890',
    }

    it("Checkout Happy Test 1", () => {
        cy.log(JSON.stringify(person, null, 2))
        expect(true).to.be.true
    })

    it("Checkout Happy Test 2", () => {
        cy.log(JSON.stringify(person, null, 2))
        expect(true).to.be.true
    })

    it("Checkout Happy Test 3", () => {
        cy.log(JSON.stringify(person, null, 2))
        expect(true).to.be.true
    })

    it("Checkout Happy Test 4", () => {
        cy.log(JSON.stringify(person, null, 2))
        expect(true).to.be.false
    })
})