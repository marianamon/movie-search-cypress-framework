Feature: Movie Search - Add and Delete to favorites
    As a user
    I want to search for movies and add or remove them from my favorites list
    So that I can easily access my preferred movies

    Scenario Outline: Search for a movie
        Given that the user is in the "Movie Search" page
        When the user enters the movie <Movie Name> to the search bar
        And the user clicks on the "Search" button
        Then the movies are returned to the movie list
        Examples:
          | Movie Name | 
          | "Romantic" | 
          | "Terror" | 
          | "Fiction" | 

    Scenario Outline: Add a movie to favorites
        Given that the user is in the "Movie Search" page
        And the user enters the movie <Movie Name> to the search bar
        And the user clicks on the "Search" button
        And the movies are returned to the movie list
        When the user clicks on the "Add to Favorites" button 
        Then the movie is added to the favorites list
        Examples:
          | Movie Name | 
          | "Romantic" | 
      
    Scenario Outline: Remove a movie from favorites
        Given that the user is in the "Movie Search" page
        And the user enters the movie <Movie Name> to the search bar
        And the user clicks on the "Search" button
        And the movies are returned to the movie list
        When the user clicks on the "Remove from Favorites" button
        Then the movie is removed to the favorites list
        Examples:
          | Movie Name | 
          | "Romantic" | 

    Scenario Outline: Load more movies
        Given that the user is in the "Movie Search" page
        And the user enters the movie <Movie Name> to the search bar
        And the user clicks on the "Search" button
        And the movies are returned to the movie list
        When the user clicks on the "Load More" button
        Then the movies are returned to the movie list
        Examples:
          | Movie Name | 
          | "Crazy" | 
          
    Scenario Outline: View movie details
        Given that the user is in the "Movie Search" page
        And the user enters the movie <Movie Name> to the search bar
        And the user clicks on the "Search" button
        When the movies are returned to the movie list
        Then the movie details are displayed
        Examples:
          | Movie Name | 
          | "Love" |


      Scenario Outline: Handle no results found
        Given that the user is in the "Movie Search" page
        When the user enters the movie <Movie Name> to the search bar
        And the user clicks on the "Search" button
        Then the movies are not returned to the movie list
        Examples:
          | Movie Name | 
          | "asdasdasd" |

      