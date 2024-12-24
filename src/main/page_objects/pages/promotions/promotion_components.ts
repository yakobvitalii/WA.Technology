import { expect, Locator, Page } from '@playwright/test';
export class PromotionsComponent {
    readonly page: Page;
    readonly root: Locator;
    readonly all: Locator;
    readonly sport: Locator;
    readonly casino: Locator;
    readonly welcome:Locator;
    readonly titleFirst:Locator;
    readonly titleSecond:Locator;

    constructor(page: Page) {
        this.page = page;
        this.root = page.locator('[class*="promotionsList-bc"]');
        this.all = page.locator('[data-id=all]')
        this.sport = page.locator('[data-id=sport]');
        this.casino = page.locator('[data-id=slots]');
        this.welcome = page.locator('[data-id=popular]');
        this.titleFirst = this.root.locator('>article:nth-child(1)>h3');
        this.titleSecond = this.root.locator('>article:nth-child(2)>h3');
    }

    async subMenuSPromotions() {
        await expect(this.all).toBeVisible();
        await expect(this.sport).toBeVisible();
        await expect(this.casino).toBeVisible();
        await expect(this.welcome).toBeVisible();
    };

    async navigateToWelcome() {
        await this.welcome.click();
    };
}