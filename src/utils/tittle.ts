export const title = (newTitle: string | undefined) => {
  return (document.title = newTitle || "Product");
};
