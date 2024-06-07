export const dateFormat = (date: string) => {
  let d = new Date(date);
  return d.toDateString();
};