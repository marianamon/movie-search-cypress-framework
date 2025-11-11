import { BasePage } from "../../pages/base.page";
import { AppPagesEnum } from "../../src/shared/app-pages.enum";
import { ButtonTextEnum } from "../../src/shared/button-text.enum";
import { LoginApi } from "../../services/api-login";

const loginApi = new LoginApi();

export class BaseActions extends BasePage{
   generateTokenAndAuthentication(){
    loginApi.login();
    loginApi.visitAuthenticated(Cypress.env('AUTH_BASE_URL'))  
    }
    
    goToThePage(option: string){
        cy.wait(1000);
        switch (option){
            case AppPagesEnum.HOME:
                cy.get(this.loadMoreButton).contains('Home').click();
                break;
            case AppPagesEnum.MOVIESEARCH:
                cy.get(this.searchButton).contains('Movie Search').click();;
                break;
            default:
                throw Error(`Wrong page option: ${option}`);

        }
    }
    
    clickOnButton(option: string){
      cy.wait(1000)
      switch(option){
        case ButtonTextEnum.SEARCH:
            cy.get(this.searchButton).should('be.visible').contains('Search').click();
            break;
        case ButtonTextEnum.ADDTOFAVORITES:
            cy.get(this.addToFavoritesButton).should('be.visible').contains('Add to Favorites').click();
            break;
        case ButtonTextEnum.REMOVEFROMFAVORITES:
            cy.get(this.removeFromFavoritesButton).should('be.visible').contains('Remove from Favorites').click();
            break;
        
        default:
            throw Error(`Wrong botton option: ${option}`);
      }
    }
}