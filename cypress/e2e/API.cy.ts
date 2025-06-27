xdescribe("API Tests", () => {
  it("Verify the HTTP calls", () => {
    cy.visit("https://google.ca");
    cy.log("Sample log");
  });

  it("GET /api/spacecrafts - should return a list of spacecrafts", () => {
    cy.request("https://isro.vercel.app/api/spacecrafts").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("spacecrafts");
      expect(response.body.spacecrafts).to.be.an("array");
    });
  });
});
