import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { MovieSearchActions } from '../actions/movie-search.actions';
import { BaseActions } from '../actions/base.action';

const movieSearchActions = new MovieSearchActions();
const baseActions = new BaseActions();

Given(/^that the user is in the "(Home|Movie Search)" page$/, (option: string, url: string)=> {
    baseActions.visitUrl(url);
    baseActions.goToThePage(option);
});
Given(/^the user clicks on the "(Search|Add to Favorites|Remove from Favorites|Load More)" button$/, (option: string)=> {
    baseActions.clickOnButton(option);
});
When(/^the user enters the movie "(.*?)" to the search bar$/, (movieName: string)=> {
    movieSearchActions.searchMovie(movieName);
});
Then(/^the movies are returned to the movie list$/, ()=> {
    movieSearchActions.verifyMovieList();
});
Then(/^the movie is removed to the favorites list$/, ()=> {
    movieSearchActions.verifyMovieremoved();
});
Then(/^the movie is added to the favorites list$/, ()=> {
    movieSearchActions.verifyMovieAdded();
});
