export const getToken = () => localStorage.getItem("TOKEN_KEY");
export const setToken = token => {
  localStorage.setItem("TOKEN_KEY", token);
};
