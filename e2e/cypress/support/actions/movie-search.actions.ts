import cypress from "cypress";
import { MovieSearchPage } from "../../pages/movie-search.page";


export class MovieSearchActions extends MovieSearchPage {
    searchMovie(movieName: string){
        cy.get(this.searchMoviesInput, {timeout: 1000}).type(movieName);
      
    }
  
    verifyMovieList(){
        cy.get(this.favoriteList, {timeout: 1000}).should('be.visible');
    }

    verifyMovieremoved(){
        cy.contains('Remove from Favorites').should('not.exist');
    }

    verifyMovieAdded(){
        cy.contains('Remove from Favorites').should('be.enabled');
    }

    verifyMovieDetails(){
        cy.get(this.movieDetails).should('be.visible');
    } 
    
    verifyMovieListEmpty(){
        cy.get(this.movieDetails, {timeout: 1000}).should('not.exist');
    }
}