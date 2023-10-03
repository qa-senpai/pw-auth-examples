import { Page } from "@playwright/test";
import { getAuthData } from "../utils";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto("https://github.com/login");
  }

  async login() {
    const authData = getAuthData();

    await this.page.fill("#login_field", authData.email);
    await this.page.fill("#password", authData.password);
    await this.page.click('[value="Sign in"]');
  }
}
