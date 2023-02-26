import { BASE_URL, POSTS_URL } from "../../constants/api";

import { getToken } from "../../utils/LocalStorage";

export default function PostList() {
  const URL = BASE_URL + POSTS_URL;
  async function SubmitLogin() {
    const response = await fetch(URL, getToken);
    const json = await response.json();

    console.log(json);
  }
  SubmitLogin();
}
