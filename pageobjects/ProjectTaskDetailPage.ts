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

export class ProjectTaskDetailPage {
  private static readonly L = {
    projectName: { strategy: 'text' as const, value: 'Perry\'s Restaurants, - Q-453446 - Ready Fixed Fee', shadowHost: 'lst-breadcrumbs', actionKind: 'text' as const },
    goLiveReadiness: { strategy: 'text' as const, value: 'Go-Live Readiness', shadowHost: 'force-lookup', actionKind: 'generic' as const },
    start: { strategy: 'role' as const, value: 'Start', role: 'button', shadowHost: 'lightning-button', actionKind: 'button' as const },
    plannedEditStatus: { strategy: 'text' as const, value: 'Planned Edit Status', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
    planned: { strategy: 'text' as const, value: 'Planned', shadowHost: 'records-record-layout-item', actionKind: 'text' as const },
  } as const;

  constructor(private readonly page: Page) {}

  async getInnerTextProjectName(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.projectName));
  }

  async expectProjectNameVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskDetailPage.L.projectName), timeoutMs, soft);
  }

  async clickGoLiveReadiness(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness));
  }

  async expectGoLiveReadinessVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), timeoutMs, soft);
  }

  async clickStart(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.start));
  }

  async doubleClickStart(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.start));
  }

  async expectStartVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskDetailPage.L.start), timeoutMs, soft);
  }

  async getInnerTextPlannedEditStatus(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus));
  }

  async expectPlannedEditStatusVisible(timeoutMs = 30_000, soft = true): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), timeoutMs, soft);
  }

  async getInnerTextPlanned(): Promise<string> {
    return getTextWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.planned));
  }


  async clickProjectName(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.projectName));
  }

  async doubleClickProjectName(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.projectName));
  }

  async longPressProjectName(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.projectName));
  }

  async expectProjectNameHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskDetailPage.L.projectName), timeoutMs);
  }

  async expectProjectNameText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskDetailPage.L.projectName), expected, timeoutMs);
  }

  async expectProjectNameContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskDetailPage.L.projectName), substring, timeoutMs);
  }

  async expectProjectNameValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskDetailPage.L.projectName), value, timeoutMs);
  }

  async expectProjectNameEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskDetailPage.L.projectName), timeoutMs);
  }

  async expectProjectNameDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskDetailPage.L.projectName), timeoutMs);
  }

  async expectProjectNameChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskDetailPage.L.projectName), timeoutMs);
  }

  async expectProjectNameUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskDetailPage.L.projectName), timeoutMs);
  }

  async expectProjectNameFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskDetailPage.L.projectName), timeoutMs);
  }

  async expectProjectNameCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskDetailPage.L.projectName), count, timeoutMs);
  }

  async scrollProjectNameIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.projectName));
  }

  async doubleClickGoLiveReadiness(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness));
  }

  async longPressGoLiveReadiness(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness));
  }

  async expectGoLiveReadinessHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), timeoutMs);
  }

  async expectGoLiveReadinessText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), expected, timeoutMs);
  }

  async expectGoLiveReadinessContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), substring, timeoutMs);
  }

  async expectGoLiveReadinessValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), value, timeoutMs);
  }

  async expectGoLiveReadinessEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), timeoutMs);
  }

  async expectGoLiveReadinessDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), timeoutMs);
  }

  async expectGoLiveReadinessChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), timeoutMs);
  }

  async expectGoLiveReadinessUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), timeoutMs);
  }

  async expectGoLiveReadinessFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), timeoutMs);
  }

  async expectGoLiveReadinessCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness), count, timeoutMs);
  }

  async scrollGoLiveReadinessIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.goLiveReadiness));
  }

  async longPressStart(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.start));
  }

  async expectStartHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskDetailPage.L.start), timeoutMs);
  }

  async expectStartText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskDetailPage.L.start), expected, timeoutMs);
  }

  async expectStartContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskDetailPage.L.start), substring, timeoutMs);
  }

  async expectStartValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskDetailPage.L.start), value, timeoutMs);
  }

  async expectStartEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskDetailPage.L.start), timeoutMs);
  }

  async expectStartDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskDetailPage.L.start), timeoutMs);
  }

  async expectStartChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskDetailPage.L.start), timeoutMs);
  }

  async expectStartUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskDetailPage.L.start), timeoutMs);
  }

  async expectStartFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskDetailPage.L.start), timeoutMs);
  }

  async expectStartCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskDetailPage.L.start), count, timeoutMs);
  }

  async scrollStartIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.start));
  }

  async clickPlannedEditStatus(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus));
  }

  async doubleClickPlannedEditStatus(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus));
  }

  async longPressPlannedEditStatus(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus));
  }

  async expectPlannedEditStatusHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), timeoutMs);
  }

  async expectPlannedEditStatusText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), expected, timeoutMs);
  }

  async expectPlannedEditStatusContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), substring, timeoutMs);
  }

  async expectPlannedEditStatusValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), value, timeoutMs);
  }

  async expectPlannedEditStatusEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), timeoutMs);
  }

  async expectPlannedEditStatusDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), timeoutMs);
  }

  async expectPlannedEditStatusChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), timeoutMs);
  }

  async expectPlannedEditStatusUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), timeoutMs);
  }

  async expectPlannedEditStatusFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), timeoutMs);
  }

  async expectPlannedEditStatusCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus), count, timeoutMs);
  }

  async scrollPlannedEditStatusIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.plannedEditStatus));
  }

  async clickPlanned(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.planned));
  }

  async doubleClickPlanned(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.planned));
  }

  async longPressPlanned(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.planned));
  }

  async expectPlannedVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, ProjectTaskDetailPage.L.planned), timeoutMs);
  }

  async expectPlannedHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, ProjectTaskDetailPage.L.planned), timeoutMs);
  }

  async expectPlannedText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, ProjectTaskDetailPage.L.planned), expected, timeoutMs);
  }

  async expectPlannedContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, ProjectTaskDetailPage.L.planned), substring, timeoutMs);
  }

  async expectPlannedValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, ProjectTaskDetailPage.L.planned), value, timeoutMs);
  }

  async expectPlannedEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, ProjectTaskDetailPage.L.planned), timeoutMs);
  }

  async expectPlannedDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, ProjectTaskDetailPage.L.planned), timeoutMs);
  }

  async expectPlannedChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, ProjectTaskDetailPage.L.planned), timeoutMs);
  }

  async expectPlannedUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, ProjectTaskDetailPage.L.planned), timeoutMs);
  }

  async expectPlannedFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, ProjectTaskDetailPage.L.planned), timeoutMs);
  }

  async expectPlannedCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, ProjectTaskDetailPage.L.planned), count, timeoutMs);
  }

  async scrollPlannedIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, ProjectTaskDetailPage.L.planned));
  }

}
