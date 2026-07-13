import type { Page } from "@playwright/test";
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class ProjectTaskPage {
  private static readonly L = {
    showAll: { strategy: 'role' as const, value: 'Show All (35)', role: 'link', shadowHost: 'lst-related-list-quick-links-grid', actionKind: 'link' as const },
    projectTasks: { strategy: 'text' as const, value: 'Project Tasks (10+)', shadowHost: 'records-hoverable-link', actionKind: 'generic' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async clickShowAll(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskPage.L.showAll));
  }

  async expectShowAllVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs, soft);
  }

  async clickProjectTasks(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskPage.L.projectTasks));
  }

  async expectProjectTasksVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskPage.L.projectTasks), timeoutMs, soft);
  }


  async doubleClickShowAll(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskPage.L.showAll));
  }

  async longPressShowAll(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskPage.L.showAll));
  }

  async expectShowAllHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskPage.L.showAll), expected, timeoutMs);
  }

  async expectShowAllContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskPage.L.showAll), substring, timeoutMs);
  }

  async expectShowAllValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskPage.L.showAll), value, timeoutMs);
  }

  async expectShowAllEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskPage.L.showAll), timeoutMs);
  }

  async expectShowAllCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskPage.L.showAll), count, timeoutMs);
  }

  async scrollShowAllIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskPage.L.showAll));
  }

  async doubleClickProjectTasks(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskPage.L.projectTasks));
  }

  async longPressProjectTasks(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskPage.L.projectTasks));
  }

  async expectProjectTasksHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskPage.L.projectTasks), expected, timeoutMs);
  }

  async expectProjectTasksContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskPage.L.projectTasks), substring, timeoutMs);
  }

  async expectProjectTasksValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskPage.L.projectTasks), value, timeoutMs);
  }

  async expectProjectTasksEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskPage.L.projectTasks), timeoutMs);
  }

  async expectProjectTasksCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskPage.L.projectTasks), count, timeoutMs);
  }

  async scrollProjectTasksIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskPage.L.projectTasks));
  }

}
