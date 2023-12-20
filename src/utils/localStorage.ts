export interface IUser {
  email: string;
  username: string;
  password: string;
  id: string;
}

export const addUserToLocalStorage = (user: IUser) => {
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
