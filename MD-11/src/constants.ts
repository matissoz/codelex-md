const apiURL = 'http://localhost:3004/countries?';
const asc = ['&_sort=', '&_order=asc'];
const desc = ['&_sort=', '&_order=desc'];
const tableHeaderClass = ["country__h", "capital__h", "currency__h", "language__h"];
const filterSearch = "_like=";
const tableHeaderIDs = ["capital", "name", "currency.name", "language.name"];
const tHeadSymbAscDesc = ["t__head-symb-asc","t__head-symb-desc"]

type Country = {
    name: string,
    code: string,
    capital: string,
    region: string,
    currency: {
      code: string,
      name: string,
      symbol: string
    },
    language: {
      code: string,
      name: string
    },
    flag: string,
    dialling_code: string,
    isoCode: string
}

// type Inputs = {
//   name: string,
//   capital: string,
//   currency:{
//     name: string;
//   },
//   language:{
//     name: string;
//   }
// }

export {
  apiURL,
  Country,
  asc,
  desc,
  tableHeaderClass,
  filterSearch,
  tHeadSymbAscDesc,
  tableHeaderIDs}