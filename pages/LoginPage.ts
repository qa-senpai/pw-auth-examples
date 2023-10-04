import { Page } from "@playwright/test";
import { getAuthData } from "../utils";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto("https://demo.learnwebdriverio.com/login");
  }

  async login() {
    const authData = getAuthData();
    await this.page.getByPlaceholder(`Email`).fill(authData.email);
    await this.page.getByPlaceholder(`Password`).fill(authData.password);
    await this.page.click("//button");
  }
}
