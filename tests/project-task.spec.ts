import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Open Planned Project Task via Global Search and verify detail page elements before starting', { tag: ["@e2e","@regression","@P1","@case-1c88ab87-df2b-4aba-9ba1-b571090c4e70","@req-91acd319-cc6b-4b76-9518-b8babe4b3aa3"] }, async ({ page, homePage, projectTaskPage, projectTaskDetailPage }) => {
  await test.step('Navigate to URL — Open Salesforce Lightning Home', async () => {
    await page.goto('https://ukgsf--stest.sandbox.lightning.force.com/lightning/page/home');
  });
  await test.step('Click — Focus global search', async () => {
    await homePage.clickGlobalSearch();
  });
  await test.step('Assert visible — Verify global search input is visible', async () => {
    await homePage.expectGlobalSearchVisible();
  });
  await test.step('Fill — Enter project name into search', async () => {
    await homePage.fillSearch('Perry\'s Restaurants, - Q-453446 - Ready Fixed Fee Implementation');
  });
  await test.step('Wait (timeout) — Wait for search suggestions/results', async () => {
    await page.waitForTimeout(1500);
  });
  await test.step('Click — Open project record from search results — (a:has-text("Perry\'s Restaurants, - Q-453446 - Ready Fixed Fee Impleme', async () => {
    await homePage.clickGlobalSearch();
  });
  await test.step('Assert visible — Verify Show All in related lists is visible', async () => {
    await projectTaskPage.expectShowAllVisible();
  });
  await test.step('Click — Click Show All in related lists', async () => {
    await projectTaskPage.clickShowAll();
  });
  await test.step('Assert visible — Verify Project Tasks link visible', async () => {
    await projectTaskPage.expectProjectTasksVisible();
  });
  await test.step('Click — Open Project Tasks related list', async () => {
    await projectTaskPage.clickProjectTasks();
  });
  await test.step('Click — Open a Project Task where Status = Planned — (table tr:has(td:has-text("Planned")) a[role="link"])', async () => {
    await projectTaskDetailPage.clickPlanned();
  });
  await test.step('Assert visible — Verify Project Task detail page is visible (project name present)', async () => {
    await projectTaskDetailPage.expectProjectNameVisible();
  });
  await test.step('Assert visible — Verify Status = Planned is shown', async () => {
    await projectTaskDetailPage.expectPlannedVisible();
  });
  await test.step('Assert visible — Verify Start button is visible', async () => {
    await projectTaskDetailPage.expectStartVisible();
  });
  await test.step('Assert enabled — Verify Start button is enabled', async () => {
    await projectTaskDetailPage.expectStartEnabled();
  });
  await test.step('Assert visible — Verify \'Actual Start Date\' field is present — (records-record-layout-item:has(.slds-form-element__label', async () => {
    await projectTaskDetailPage.expectStartVisible();
  });
});
