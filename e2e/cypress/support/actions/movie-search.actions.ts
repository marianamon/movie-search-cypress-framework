import cypress from "cypress";
import { MovieSearchPage } from "../../pages/movie-search.page";


export class MovieSearchActions extends MovieSearchPage {
    searchMovie(movieName: string){
        cy.get(this.searchMoviesInput, {timeout: 1000}).type(movieName);
      
    }
  
    verifyMovieList(){
        cy.wait(3000);
        cy.get(this.favoriteList).should('be.visible');
    }

    verifyMovieremoved(){
        cy.contains('Remove from Favorites').should('not.exist');
    }

    verifyMovieAdded(){
        cy.contains('Remove from Favorites').should('be.enabled');
    }
}