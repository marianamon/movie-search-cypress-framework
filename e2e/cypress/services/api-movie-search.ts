/// <reference types="cypress" />

describe('Movie Search API', () => {
  it('should return movies for the search query "crazy"', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:3000/movies/search',
      qs: {
        q: 'crazy',
        page: 1,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.property('results');
      expect(response.body.results).to.be.an('array');
      expect(response.body.results.length).to.be.greaterThan(0);

      const firstResult = response.body.results[0];
      expect(firstResult).to.have.property('title');
      expect(firstResult).to.have.property('id');
    });
  });
});