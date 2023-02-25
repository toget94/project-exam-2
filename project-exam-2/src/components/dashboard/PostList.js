import { BASE_URL, POSTS_URL } from "../../constants/api";

export default function PostList() {
  async function getPosts() {
    const URL = BASE_URL + POSTS_URL;

    const response = await fetch(URL);
    const json = await response.json();

    console.log(json);
  }
  getPosts();
}
