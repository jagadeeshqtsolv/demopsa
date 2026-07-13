import type { Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { ProjectTaskPage } from "./ProjectTaskPage";
import { ProjectTaskDetailPage } from "./ProjectTaskDetailPage";

export class CommonFlowsPage {
  private readonly projectTaskDetailPage: ProjectTaskDetailPage;
  private readonly projectTaskPage: ProjectTaskPage;
  private readonly homePage: HomePage;
  constructor(private readonly page: Page) {
    this.homePage = new HomePage(this.page);
    this.projectTaskPage = new ProjectTaskPage(this.page);
    this.projectTaskDetailPage = new ProjectTaskDetailPage(this.page);
  }

  async userJourneyTillProjectTask(openSalesforceLightningHome: string = 'https://ukgsf--stest.sandbox.lightning.force.com/lightning/page/home', enterProjectNameIntoSearch: string = 'Perry\'s Restaurants, - Q-453446 - Ready Fixed Fee Implementation', waitForSearchSuggestionsResults: string = '1500'): Promise<void> {
    await this.page.goto(openSalesforceLightningHome);
    await this.homePage.clickGlobalSearch();
    await this.homePage.expectGlobalSearchVisible();
    await this.homePage.fillSearch(enterProjectNameIntoSearch);
    await this.page.waitForTimeout(waitForSearchSuggestionsResults);
    await this.homePage.clickGlobalSearch();
    await this.projectTaskPage.expectShowAllVisible();
    await this.projectTaskPage.clickShowAll();
    await this.projectTaskPage.clickProjectTasks();
    await this.projectTaskDetailPage.clickPlanned();
    await this.projectTaskDetailPage.expectProjectNameVisible();
    await this.projectTaskDetailPage.expectPlannedVisible();
    await this.projectTaskDetailPage.expectStartVisible();
  }

}
