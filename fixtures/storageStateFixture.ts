import { test as base } from "@playwright/test";
import fs from "fs";
import { getAuthData } from "../utils";

// Declare the types of your fixtures.
type MyFixtures = {
  userToLogin?: string;
};

export const test = base.extend<MyFixtures>({
  userToLogin: undefined,
  
  //!! ця фікстура виконається першою
  storageState: async ({browser, userToLogin}, use) => {
    // 1 якщо юзер вказаний
    if(userToLogin){
    const fileName = `./.auth/${userToLogin}.json` as string;

    // 2 ми перевіряємо чи існують кукі саме для цього юзера
    if(!fs.existsSync(fileName)){
    // 3 якщо не існують то ми створюємо нову сторінку
    const page = await browser.newPage({storageState: undefined});
    //!! логінемось
    const authData = getAuthData();
    await page.goto('https://demo.learnwebdriverio.com/login');
    await page.getByPlaceholder(`Email`).fill(authData.email);
    await page.getByPlaceholder(`Password`).fill(authData.password);
    await page.click("//button");
    // чекаємо поки сторінка повністю завантажиться
    await page.waitForLoadState('networkidle');
    //!! зберігаємо кукі
    await page.context().storageState({path: fileName});
    //!! закриваємо сторінку
    await page.close();
    }
    //використовуємо збережені кукі
    await use(fileName);
  } else
  {
    // якщо юзер не вказаний то ми і не використовуємо збережені кукі
    await use(undefined);
  }
  }
});

export { expect } from "@playwright/test";