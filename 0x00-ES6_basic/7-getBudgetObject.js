// export default function getBudgetObject(income, gdp, capita) {
//     const budget = {
//       income: income,
//       gdp: gdp,
//       capita: capita,
//     };

//     return budget;
//   }
// Modify the above function’s budget object to simply use the keyname instead.
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };
  return budget;
}
