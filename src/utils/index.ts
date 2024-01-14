import { IUser } from "./../types/";

export const formatPrice = (price: number | undefined): string => {
  // Check if price is defined before using it
  if (price !== undefined) {
    const rupiahFormat = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);

    return rupiahFormat;
  } else {
    // Handle the case where price is undefined
    return "N/A"; // or any default value or an empty string, depending on your use case
  }
};

export const formatDate = (createdAt: string): string => {
  const createdAtDate = new Date(createdAt);

  // Format tanggal menjadi string yang diinginkan (misalnya, 'dd/mm/yyyy hh:mm:ss')
  const formattedDate = `${createdAtDate.getDate()}/${
    createdAtDate.getMonth() + 1
  }/${createdAtDate.getFullYear()} ${createdAtDate.getHours()}:${createdAtDate.getMinutes()}:${createdAtDate.getSeconds()}`;

  return formattedDate;
};

export const addUserToLocalStorage = (user: IUser) => {
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

export const createTitlePage = (newTitle: string | undefined) => {
  return (document.title = newTitle || "Product");
};
