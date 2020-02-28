export const formatDate = date => {
  const newDate = new Date(date);
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  };
  return newDate.toLocaleString('en-GB', options);
};
