// import sub-pages
// these are sorted alphabetically (except for overview page)
import NumOverview from './sub-pages/NumOverview';
import NumIsInteger from './sub-pages/NumIsInteger';
import NumNumber from './sub-pages/NumNumber';
import NumParseFloat from './sub-pages/NumParseFloat';
import NumParseInt from './sub-pages/NumParseInt';
import NumToExponentail from './sub-pages/NumToExpoenential';
import NumToFixed from './sub-pages/NumToFixed';
import NumToPrecision from './sub-pages/NumToPrecision';
import NumToString from './sub-pages/NumToString';

const routes = [
  {
    path: "/numbers/overview",
    name: "Numbers Overview",
    exact: true,
    comp: NumOverview,
    category: "Numbers",
    searchValue: "numbers overview"
  },
  {
    path: "/numbers/isinteger",
    name: "isInteger()",
    exact: true,
    comp: NumIsInteger,
    category: "Numbers",
    searchValue: "numbers isinteger"
  },
  {
    path: "/numbers/number",
    name: "Number()",
    exact: true,
    comp: NumNumber,
    category: "Numbers",
    searchValue: "numbers number"
  },
  {
    path: "/numbers/parseFloat",
    name: "parseFloat()",
    exact: true,
    comp: NumParseFloat,
    category: "Numbers",
    searchValue: "numbers parsefloat"
  },
  {
    path: "/numbers/parseint",
    name: "parseInt()",
    exact: true,
    comp: NumParseInt,
    category: "Numbers",
    searchValue: "numbers parseint"
  },
  {
    path: "/numbers/toExpoenential",
    name: "toExpoenential()",
    exact: true,
    comp: NumToExponentail,
    category: "Numbers",
    searchValue: "numbers toexponential"
  },
  {
    path: "/numbers/toFixed",
    name: "toFixed()",
    exact: true,
    comp: NumToFixed,
    category: "Numbers",
    searchValue: "numbers tofixed"
  },
  {
    path: "/numbers/toPrecision",
    name: "toPrecision()",
    exact: true,
    comp: NumToPrecision,
    category: "Numbers",
    searchValue: "numbers toprecision"
  },
  {
    path: "/numbers/toString",
    name: "toString()",
    exact: true,
    comp: NumToString,
    category: "Numbers",
    searchValue: "numbers tostring"
  }
];

export default routes;
