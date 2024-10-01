const formatDate = (dateString: string | number | Date) => {
  const date = new Date(dateString);

  // Get day, month, and year
  const day = date.getDate();
  const month = date
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  const year = date.getFullYear();

  return `${day} ${month}, ${year}`;
};

export default formatDate;
