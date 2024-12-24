import { expect, Locator, Page } from '@playwright/test';
export class NavigathionComponents {
    readonly page: Page;
    readonly root: Locator;
    readonly subMenu: Locator;
    readonly navigationLive: Locator;
    readonly navigationSport: Locator;
    readonly navigationCasino: Locator;
    readonly navigationWonderWheel: Locator;
    readonly navigationLiveCasino: Locator;
    readonly signIn: Locator;
    readonly eventView: Locator;
    readonly liveCalendar: Locator;
    readonly statistics: Locator;
    readonly results: Locator;
    readonly more: Locator;
    readonly promotions: Locator;

    constructor(page: Page) {
        this.page = page;
        this.root = page.locator('[class=nav-content-menu] ul[class*="hide-items"]');
        this.subMenu = page.locator('[class*="nav-content-bc"] nav:nth-child(2)')
        this.navigationLive = this.root.locator('>li:first-child');
        this.navigationSport = this.root.locator('>li:nth-child(2)');
        this.navigationCasino =  this.root.locator('>li:nth-child(3)');
        this.navigationWonderWheel =  this.root.locator('>li:nth-child(4)');
        this.navigationLiveCasino =  this.root.locator('>li:nth-child(5)');
        this.eventView = this.subMenu.getByText('Event view');
        this.liveCalendar = this.subMenu.getByText('Live Calendar');
        this.statistics = this.subMenu.getByText('Statistics');
        this.results = this.subMenu.getByText('Results');
        this.more = page.locator('[class*="nav-menu-other"]')
        this.promotions = this.more.locator('[href*="/promotions"]')
    };

    async checkAllNavItemIsPresent() {
        await this.navigationLive.waitFor({state:"visible"});
        await expect(this.navigationSport).toBeVisible();
        await expect(this.navigationCasino).toBeVisible();
        await expect(this.navigationWonderWheel).toBeVisible();
        await expect(this.navigationLiveCasino).toBeVisible();
    };

    async navigationToLive(){
        await this.navigationLive.waitFor({state:"visible"});
        await this.navigationLive.click();
    };

    async navigationToSport(){
        await this.navigationSport.waitFor({state:"visible"});
        await this.navigationSport.click();
    };

    async subMenuSports() {
        await expect(this.eventView).toBeVisible();
        await expect(this.liveCalendar).toBeVisible();
        await expect(this.statistics).toBeVisible();
        await expect(this.results).toBeVisible();
    };

    async navigateToPromotions() {
        await this.more.waitFor({state:"visible"});
        await this.more.hover();
        await this.promotions.waitFor({state:"visible"});
        await this.promotions.click();
    };
}