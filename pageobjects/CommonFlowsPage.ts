import type { Page } from "@playwright/test";
import { HomePage } from "./HomePage";
import { ProjectRelatedPage } from "./ProjectRelatedPage";
import { ProjectTaskPage } from "./ProjectTaskPage";
import { TaskDetailPage } from "./TaskDetailPage";
import { CommonPage } from "./CommonPage";

export class CommonFlowsPage {
  private readonly commonPage: CommonPage;
  private readonly taskDetailPage: TaskDetailPage;
  private readonly projectTaskPage: ProjectTaskPage;
  private readonly projectRelatedPage: ProjectRelatedPage;
  private readonly homePage: HomePage;
  constructor(private readonly page: Page) {
    this.homePage = new HomePage(this.page);
    this.projectRelatedPage = new ProjectRelatedPage(this.page);
    this.projectTaskPage = new ProjectTaskPage(this.page);
    this.taskDetailPage = new TaskDetailPage(this.page);
    this.commonPage = new CommonPage(this.page);
  }

  async userJourneyTillProjectTask(openSalesforceHomeLightning: string = 'https://ukgsf--stest.sandbox.lightning.force.com/lightning/page/home', typeExactProjectNameInSearch: string = 'Perry\'s Restaurants, - Q-453446 - Ready Fixed Fee Implementation'): Promise<void> {
    await this.page.goto(openSalesforceHomeLightning);
    await this.homePage.clickGlobalSearch();
    await this.homePage.expectGlobalSearchVisible();
    await this.homePage.fillGlobalSearch(typeExactProjectNameInSearch);
    await this.homePage.expectGlobalSearchVisible();
    await this.homePage.clickSearchedProject();
    await this.projectRelatedPage.clickShowAll();
    await this.projectRelatedPage.clickProjectTasks();
    await this.projectTaskPage.expectNewVisible();
    await this.taskDetailPage.clickStatus();
    await this.commonPage.expectProjectTaskRecordPageLoadedVisible();
    await this.taskDetailPage.expectStatusContainsText('Planned');
    await this.taskDetailPage.expectStartVisible();
  }

}
