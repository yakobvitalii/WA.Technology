import { expect, Locator, Page } from '@playwright/test';
export class ResultsComponents {
    readonly page: Page;
    readonly root: Locator;
    readonly from: Locator;
    readonly to: Locator;
    readonly sport: Locator;
    readonly competition:Locator;
    readonly signInButton:Locator;
    readonly dropdown:Locator;
    readonly show:Locator;
    readonly title:Locator;
    readonly time:Locator;

    constructor(page: Page) {
        this.page = page;
        this.root = page.locator('[class="componentFilterBody-content"]');
        this.dropdown = page.locator('[class*="multi-select-label"]')
        this.from = page.locator('[placeholder=From]');
        this.to = page.locator('[placeholder=To]');
        this.competition = this.root.locator('[class*="item-holder"]:nth-child(4)');
        this.sport = this.root.locator('[class*="item-holder"]:nth-child(3)');
        this.show = page.locator('button[title*=Show]');
        this.title = page.locator('[class="competition-title-bc ellipsis"]');
        this.time = page.locator('div[id*="collapsed-panel"]>div:first-child time:nth-child(2)')
    }

    async filterFormIsPresent() {
        await expect(this.from).toBeVisible();
        await expect(this.to).toBeVisible();
        await expect(this.competition).toBeVisible();
        await expect(this.sport).toBeVisible();
    };

    async fillFilterForm(startDate:string, endDate:string) {
        await this.from.click();
        await this.page.locator(`div[class*=${startDate}]`).click();
        await this.to.click();
        await this.page.locator(`div[class*=${endDate}]`).click();
        await this.sport.click();
        await this.dropdown.locator('>label:nth-child(1)').click();
        await this.competition.click();
        await this.dropdown.locator('>label:nth-child(2)').click();
        await this.show.click();
    };
}