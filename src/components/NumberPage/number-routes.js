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
    comp: NumOverview
  },
  {
    path: "/numbers/isinteger",
    name: "isInteger()",
    exact: true,
    comp: NumIsInteger
  },
  {
    path: "/numbers/number",
    name: "Number()",
    exact: true,
    comp: NumNumber
  },
  {
    path: "/numbers/parseFloat",
    name: "parseFloat()",
    exact: true,
    comp: NumParseFloat
  },
  {
    path: "/numbers/parseint",
    name: "parseInt()",
    exact: true,
    comp: NumParseInt
  },
  {
    path: "/numbers/toExpoenential",
    name: "toExpoenential()",
    exact: true,
    comp: NumToExponentail
  },
  {
    path: "/numbers/toFixed",
    name: "toFixed()",
    exact: true,
    comp: NumToFixed
  },
  {
    path: "/numbers/toPrecision",
    name: "toPrecision()",
    exact: true,
    comp: NumToPrecision
  },
  {
    path: "/numbers/toString",
    name: "toString()",
    exact: true,
    comp: NumToString
  }
];

export default routes;
