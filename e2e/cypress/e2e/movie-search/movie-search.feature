Feature: Movie Search - Add and Delete to favorites

    Scenario Outline: Create a new Bank Accounts
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
        When the movies are returned to the movie list
        Then the user clicks on the "Add to Favorites" button 
        And the movie is added to the favorites list
        Examples:
          | Movie Name | 
          | "Romantic" | 
      
    Scenario Outline: Remove a movie from favorites
        Given that the user is in the "Movie Search" page
        And the user enters the movie <Movie Name> to the search bar
        And the user clicks on the "Search" button
        When the movies are returned to the movie list
        Then the user clicks on the "Remove from Favorites" button
        And the movie is removed to the favorites list
        Examples:
          | Movie Name | 
          | "Romantic" | 
         