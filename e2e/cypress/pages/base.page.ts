export class BasePage {

    public baseUrl = 'http://localhost:3001/';
    public searchButton = 'button[type="submit"]';
    public addToFavoritesButton = 'button:has-text("Add to Favorites")';
    public removeFromFavoritesButton = 'button[style*="Remove from Favorites"]';
    public loadMoreButton = 'button[style*="background-color: blue"][style*="color: white"][style*="Load More"]';
}