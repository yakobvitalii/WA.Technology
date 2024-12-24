import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { 
  HomePage, 
  LoginPageComponents, 
  NavigathionComponents, 
  PromotionsComponent, 
  ResultsComponents 
} from '../src/main/page_objects';
import { Title } from '../src/main/constats';

test('login with non-existing user', async ({ page }) => {
  /*
    1. Go to https://www.efbet.net/en/;
    2. Check sighIn Button is displayed and click on it;
    3. Check FillForm is open;
    4. Enter not valid email and password;
    5. Check the error message is shown
  */
  const homePage = new HomePage(page);
  const loginPage = new LoginPageComponents(page);
  const data = {
    email:`${faker.internet.email()}`,
    password:`${faker.internet.password()}`,
  };
  await homePage.openHomePage();
  await homePage.clickOnSighIn();
  await loginPage.fillForm(data.email, data.password);
  await loginPage.errorMessage();
});

test('check results of the day', async ({ page }) => {
  /*
    1. Go to https://www.efbet.net/en/;
    2. Check all navigathion button is present;
    3. Click Spotrs link;
    4. Check all sub menu Sports is displayed;
    5. Select 21 DEC start and end Date, select fooltball and England Premiere league
    6. Check Sort by this parametr is displayed correctly
  */
  const homePage = new HomePage(page);
  const navigationComponents = new NavigathionComponents(page);
  const resultsComponents = new ResultsComponents(page)
  const data = {
    from:`day--021`,
    to:`day--021`,
    competition: 'Premier League - England'
  };
  await homePage.openHomePage();
  await navigationComponents.checkAllNavItemIsPresent();
  await navigationComponents.navigationToSport();
  await navigationComponents.subMenuSports();
  await navigationComponents.results.click();
  await resultsComponents.filterFormIsPresent();
  await resultsComponents.fillFilterForm(
    data.from,
    data.to
  );  
  await expect(resultsComponents.time).toContainText('21.12.2024');
  await expect(resultsComponents.title).toContainText('Premier League (England)');
});

test('check promotions "Welcome"', async ({ page }) => {
  /*
    1. Go to https://www.efbet.net/en/;
    2. Check all navigathion button is present;
    3. Hover to More, and click Promotions;
    4. Check all sub menu Promotions is displayed;
    5. Click Welcome
    6. Check Welcome Bonus is displayed
  */
  const homePage = new HomePage(page);
  const navigationComponents = new NavigathionComponents(page);
  const promotionComponents = new PromotionsComponent(page)
  await homePage.openHomePage();
  await navigationComponents.checkAllNavItemIsPresent();
  await navigationComponents.navigateToPromotions();
  await promotionComponents.subMenuSPromotions();
  await promotionComponents.navigateToWelcome();
  await expect(promotionComponents.titleFirst).toContainText(Title.WELCOME_BONUS);
  await expect(promotionComponents.titleSecond).toContainText(Title.FREE_SPINS);
});