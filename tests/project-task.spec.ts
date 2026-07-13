import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test('Open Planned Project Task via Global Search and verify detail page elements before starting', { tag: ["@e2e","@regression","@P1","@case-1c88ab87-df2b-4aba-9ba1-b571090c4e70"] }, async ({ page, homePage, projectTaskPage, projectTaskDetailPage }) => {
  await test.step('Open — Open Salesforce Lightning Home', async () => {
    await page.goto(env.baseURL);
  });

  await test.step('Assert visible — Verify global search input is visible', async () => {
    await homePage.expectSearchVisible();
  });

  await test.step('Click — Focus global search', async () => {
    await homePage.clickGlobalSearch();
  });

  await test.step('Fill — Enter project name into search', async () => {
    await homePage.fillSearch(testData.openPlannedProjectTaskViaGlobalSearchAndVerifyDetailPageElementsBeforeStarting.enterProjectNameIntoSearch);
  });

  await test.step('Wait — Wait for search suggestions/results', async () => {
    await homePage.expectSearchSuggestionsVisible();
  });

  await test.step('Click — Open project record from search results', async () => {
    await homePage.clickFirstSearchResult();
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

  await test.step('Click — Open a Project Task where Status = Planned', async () => {
    await projectTaskPage.clickFirstPlannedTask();
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

  await test.step("Assert unchecked — Verify 'Started' checkbox is currently unchecked", async () => {
    await projectTaskDetailPage.expectStartedUnchecked();
  });

  await test.step("Assert visible — Verify 'Actual Start Date' field is present", async () => {
    await projectTaskDetailPage.expectActualStartDateVisible();
  });
});
