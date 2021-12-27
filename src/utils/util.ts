const authKey = '@auth:token';
const usernameKey = '@username';

function getAuth() {
  const token = localStorage.getItem(authKey)?.replaceAll('"', '');
  const username = localStorage.getItem(usernameKey)?.replaceAll('"', '');

  return {
    token,
    username,
  };
}

function setLocalToken(token: string) {
  localStorage.setItem(authKey, token);
}

function setLocalUsername(username: string) {
  localStorage.setItem(usernameKey, username);
}

export { getAuth, setLocalToken, setLocalUsername };
