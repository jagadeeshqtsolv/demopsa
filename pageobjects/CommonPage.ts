import type { Locator, Page } from "@playwright/test";
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

export class CommonPage {
  private static readonly L = {
    toDo: { strategy: 'text' as const, value: 'to do', actionKind: 'button' as const },
  } as const;

  constructor(private readonly page: Page) {}


  async clickToDo(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CommonPage.L.toDo));
  }

  async doubleClickToDo(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.toDo));
  }

  async longPressToDo(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.toDo));
  }

  async expectToDoVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.toDo), timeoutMs);
  }

  async expectToDoHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.toDo), timeoutMs);
  }

  async expectToDoText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.toDo), expected, timeoutMs);
  }

  async expectToDoContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.toDo), substring, timeoutMs);
  }

  async expectToDoValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.toDo), value, timeoutMs);
  }

  async expectToDoEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.toDo), timeoutMs);
  }

  async expectToDoDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.toDo), timeoutMs);
  }

  async expectToDoChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.toDo), timeoutMs);
  }

  async expectToDoUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.toDo), timeoutMs);
  }

  async expectToDoFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.toDo), timeoutMs);
  }

  async expectToDoCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.toDo), count, timeoutMs);
  }

  async scrollToDoIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.toDo));
  }

}
