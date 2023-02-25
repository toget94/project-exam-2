const tokenKey = "token";
const userKey = "name";

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function saveUser(name) {
  saveToStorage(userKey, name);
}

export function getUsername() {
  const object = getFromStorage(userKey);
  if (object) {
    return object.name;
  }
  return null;
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
  const value = localStorage.getItem(key);

  if (!value) {
    return [];
  }

  return JSON.parse(value);
}
