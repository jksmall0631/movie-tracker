export const login = (username, password) => {
  return {
    type: 'USER_LOGIN',
    username,
    password,
  }
}
