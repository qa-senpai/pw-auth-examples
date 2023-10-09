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
  storageState: async ({request, userToLogin}, use) => {
    // 1 якщо юзер вказаний
    if(userToLogin){
    const fileName = `./.auth/${userToLogin}.json` as string;

    // 2 ми перевіряємо чи існують кукі саме для цього юзера
    if(!fs.existsSync(fileName)){
    // 3 якщо не існують то ми створюємо нову сторінку
    //!! логінемось
    await request.post('https://conduit-api.learnwebdriverio.com/api/users/login', {
    form: { 
      user: `{
      email: 'qa-senpai@gmail.com',
      password: '12345'}
    }`}});
    await request.storageState({ path: fileName });
    await request.dispose();
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