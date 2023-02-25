import { BASE_URL, LOGIN_TOKEN } from "./api";
import { saveToken } from "../utils/LocalStorage";

export async function GetToken(email, password) {
  const URL = BASE_URL + LOGIN_TOKEN;

  const data = JSON.stringify({ email: email, password: password });
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(URL, options);
    const json = await response.json();

    console.log(json);

    if (json.accessToken) {
      saveToken(json.accessToken);
    }
  } catch (error) {
    console.log(error);
  }
}
