/// <reference types="cypress" />

export class FavoritesApi {
  /**
   * Fetches the list of favorite movies.
   */
  public getFavorites() {
    return cy.request({
      method: 'GET',
      url: 'http://localhost:3000/favorites',
    }).then((response) => {
      
      expect(response.status).to.eq(200);

      
      expect(response.body).to.be.an('array');
      return response.body;
    });
  }

  /**
   * Adds a movie to the favorites list.
   * @param movieId The ID of the movie to add.
   */
  public addFavorite(movieId: string) {
    return cy.request({
      method: 'POST',
      url: 'http://localhost:3000/favorites',
      body: { movieId },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      
      expect(response.status).to.eq(201);

      
      expect(response.body).to.have.property('id', movieId);
      return response.body;
    });
  }

  /**
   * Removes a movie from the favorites list.
   * @param movieId The ID of the movie to remove.
   */
  public removeFavorite(movieId: string) {
    return cy.request({
      method: 'DELETE',
      url: `http://localhost:3000/favorites/${movieId}`,
    }).then((response) => {
      
      expect(response.status).to.eq(200);
    });
  }
}