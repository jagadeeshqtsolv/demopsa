import { test as base, expect } from "@playwright/test";
import { CommonFlowsPage } from "../pageobjects/CommonFlowsPage";
import { HomePage } from "../pageobjects/HomePage";
import { ProjectTaskDetailPage } from "../pageobjects/ProjectTaskDetailPage";
import { ProjectTaskPage } from "../pageobjects/ProjectTaskPage";

type AppFixtures = {
  commonFlowsPage: CommonFlowsPage;
  homePage: HomePage;
  projectTaskDetailPage: ProjectTaskDetailPage;
  projectTaskPage: ProjectTaskPage;
};

export const test = base.extend<AppFixtures>({
  commonFlowsPage: async ({ page }, use) => {
    await use(new CommonFlowsPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  projectTaskDetailPage: async ({ page }, use) => {
    await use(new ProjectTaskDetailPage(page));
  },
  projectTaskPage: async ({ page }, use) => {
    await use(new ProjectTaskPage(page));
  },
});

export { expect };
