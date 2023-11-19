import { PersonDetails } from "../fixtures/TypeDeclarations"
import * as Interfaces from "../support/e2e"

describe("Checkout tests", () => {

    let person: PersonDetails = {
        "SSN": 242423423,
        "address": "123 Main",
        "firstName": "Heisenberg"
    }

    let p:Interfaces.PhoneNumber = {
        type: 'home',
        number: '(123) 456-7890',
    }

    it("Checkout Happy Test", () => {
        cy.log(JSON.stringify(person, null, 2))
    })
})