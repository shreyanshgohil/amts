const todaysDateObj = new Date();
const date = todaysDateObj.getDate();
const month = todaysDateObj.getMonth() + 1;
const year = todaysDateObj.getFullYear();
export const convertToDate = (time) => {
  const newDateForDb = new Date(`${date} ${month} ${year} ${time}`);
  return newDateForDb;
};
