import { Page } from "@playwright/test";
import { getAuthData } from "../utils";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto("/login");
  }

  async login(email: string) {
    const authData = getAuthData();
    await this.page.getByPlaceholder(`Email`).fill(email);
    await this.page.getByPlaceholder(`Password`).fill(authData.password);
    await this.page.click("//button");
  }
}