import { expect, Locator, Page } from '@playwright/test';
export class HomePage {
    readonly page: Page;
    readonly homeLogo: Locator;
    readonly signIn: Locator;
    readonly productmenudropdown:Locator

    constructor(page: Page) {
        this.page = page;
        this.homeLogo = page.locator('[class*=hdr-logo]');
        this.signIn = page.locator('button[class*="sign-in"]')
        // this.productsMenu = page.getByText('#product-menu-toggle');
        this.productmenudropdown = page.locator('#product-menu-dropdown >div > ul >li >a >div[class="dropdown-link-heading"]');
    }

    async openHomePage() {
        await this.page.goto('https://www.efbet.net/en/');
    }

    async clickOnSighIn(){
        await this.signIn.waitFor({state:"visible"});
        await this.signIn.click();
    }
}