import { expect, Locator, Page } from '@playwright/test';
export class LoginPageComponents {
    readonly page: Page;
    readonly email: Locator;
    readonly signInForm: Locator;
    readonly password:Locator;
    readonly signInButton:Locator;
    readonly error:Locator;

    constructor(page: Page) {
        this.page = page;
        this.email = page.locator('[name=username]');
        this.signInForm = page.locator('div[class*="form-sign-bc"]')
        this.password = page.locator('[name=password]');
        this.signInButton = page.locator('button[type=submit]');
        this.error = page.locator('[class*="error-message"]')
    }

    async fillForm(username:string, password:string) {
        await this.signInForm.waitFor({state:"visible"});
        await this.email.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
    }

    async errorMessage() {
        await this.error.waitFor({state:"visible"});
        await expect(this.error).toHaveText('Invalid Username or Password')
    }
}