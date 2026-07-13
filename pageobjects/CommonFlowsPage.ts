import type { Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { ProjectTaskPage } from "./ProjectTaskPage";

export class CommonFlowsPage {
  private readonly projectTaskPage: ProjectTaskPage;
  private readonly homePage: HomePage;
  constructor(private readonly page: Page) {
    this.homePage = new HomePage(this.page);
    this.projectTaskPage = new ProjectTaskPage(this.page);
  }

  async userJourneyTillProjectTask(openSalesforceLightningHome: string = 'https://ukgsf--stest.sandbox.lightning.force.com/lightning/page/home', enterProjectNameIntoSearch: string = 'Perry\'s Restaurants, - Q-453446 - Ready Fixed Fee Implementation'): Promise<void> {
    await this.page.goto(openSalesforceLightningHome);
    await this.page.waitForTimeout(2000);
    await this.homePage.clickGlobalSearch();
    await this.homePage.expectGlobalSearchVisible();
    await this.homePage.expectSearchVisible();
    await this.homePage.fillSearch(enterProjectNameIntoSearch);
    await this.page.waitForTimeout(1500);
    await this.homePage.clickSelectedProject();
    await this.projectTaskPage.expectShowAllVisible();
    await this.projectTaskPage.clickShowAll();
    await this.projectTaskPage.expectProjectTasksVisible();
    await this.projectTaskPage.clickProjectTasks();
  }

}
