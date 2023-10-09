import fs from "fs";

export function getAuthData() {
  const filePath = "login-data.json";
  const rawData = fs.readFileSync(filePath);
  const jsonData = JSON.parse(rawData.toString());

  return {
    email: jsonData.email as string,
    password: jsonData.password as string,
  };
}