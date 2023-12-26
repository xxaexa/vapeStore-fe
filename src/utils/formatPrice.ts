const formatPrice = (price: number | undefined) => {
  const rupiahFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price ?? 0);
  return rupiahFormat;
};

export { formatPrice };
