const formatPrice = (price: number | undefined): string => {
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

export { formatPrice };
