import { BasePage } from "../../pages/base.page";
import { AppPagesEnum } from "../../src/shared/app-pages.enum";
import { ButtonTextEnum } from "../../src/shared/button-text.enum";
import { LoginApi } from "../../services/api-login";

const loginApi = new LoginApi();

export class BaseActions extends BasePage{
   visitUrl(url: string){
        cy.visit(this.baseUrl);
    }
    
    goToThePage(option: string){
        cy.wait(1000);
        switch (option){
            case AppPagesEnum.HOME:
                cy.get(this.loadMoreButton).contains('Home').click();
                break;
            case AppPagesEnum.MOVIESEARCH:
                cy.get(this.searchButton).contains('Search').click();;
                break;
            default:
                throw Error(`Wrong page option: ${option}`);

        }
    }
    
    clickOnButton(option: string){
      switch(option){
        case ButtonTextEnum.SEARCH:
            cy.get(this.searchButton).should('be.visible').contains('Search').click();
            break;
        case ButtonTextEnum.ADDTOFAVORITES:
            cy.contains('Add to Favorites').click();
            break;
        case ButtonTextEnum.REMOVEFROMFAVORITES:
            cy.contains('Remove from Favorites').click();
            break;
        case ButtonTextEnum.LOADMORE:
            cy.scrollTo('bottom');
            cy.contains('Load More').click();
            break;
        
        default:
            throw Error(`Wrong botton option: ${option}`);
      }
    }
}