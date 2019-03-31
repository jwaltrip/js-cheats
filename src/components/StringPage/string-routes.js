// import sub-pages
// these are sorted alphabetically (except for overview page)
import StrOverview from './sub-pages/StrOverview';
import StrCharAt from './sub-pages/StrCharAt';
import StrConcat from './sub-pages/StrConcat';
import StrEndsWith from './sub-pages/StrEndsWith';
import StrIncludes from './sub-pages/StrIncludes';
import StrIndexOf from './sub-pages/StrIndexOf';
import StrLastIndexOf from './sub-pages/StrLastIndexOf';
import StrLength from './sub-pages/StrLength';
import StrMatch from './sub-pages/StrMatch';
import StrParseInt from './sub-pages/StrParseInt';
import StrRepeat from './sub-pages/StrRepeat';
import StrReplace from './sub-pages/StrReplace';
import StrSearch from './sub-pages/StrSearch';
import StrSlice from './sub-pages/StrSlice';
import StrSplit from './sub-pages/StrSplit';
import StrStartsWith from './sub-pages/StrStartsWith';
import StrSubstr from './sub-pages/StrSubstr';
import StrSubString from './sub-pages/StrSubString';
import StrValue from './sub-pages/StrValue';

// this will be used for the side nav bar
// all routes should push components

const routes = [
  {
    path: "/strings/overview",
    name: "Strings Overview",
    exact: true,
    comp: StrOverview,
    category: "Strings",
    searchValue: "strings overview"
  },
  {
    path: "/strings/charAt",
    name: "charAt()",
    exact: true,
    comp: StrCharAt,
    category: "Strings",
    searchValue: "strings charat"
  },
  {
    path: "/strings/concat",
    name: "concat()",
    exact: true,
    comp: StrConcat,
    category: "Strings",
    searchValue: "strings concat"
  },
  {
    path: "/strings/endswith",
    name: "endsWith()",
    exact: true,
    comp: StrEndsWith,
    category: "Strings",
    searchValue: "strings endswith"
  },
  {
    path: "/strings/includes",
    name: "includes()",
    exact: true,
    comp: StrIncludes,
    category: "Strings",
    searchValue: "strings includes"
  },
  {
    path: "/strings/indexOf",
    name: "indexOf()",
    exact: true,
    comp: StrIndexOf,
    category: "Strings",
    searchValue: "strings indexof"
  },
  {
    path: "/strings/lastIndexOf",
    name: "lastIndexOf()",
    exact: true,
    comp: StrLastIndexOf,
    category: "Strings",
    searchValue: "strings lastindexof"
  },
  {
    path: "/strings/length",
    name: "length",
    exact: true,
    comp: StrLength,
    category: "Strings",
    searchValue: "strings length"
  },
  {
    path: "/strings/match",
    name: "match()",
    exact: true,
    comp: StrMatch,
    category: "Strings",
    searchValue: "strings match"
  },
  {
    path: "/strings/parseInt",
    name: "parseInt()",
    exact: true,
    comp: StrParseInt,
    category: "Strings",
    searchValue: "strings parseint"
  },
  {
    path: "/strings/repeat",
    name: "repeat()",
    exact: true,
    comp: StrRepeat,
    category: "Strings",
    searchValue: "strings repeat"
  },
  {
    path: "/strings/replace",
    name: "replace()",
    exact: true,
    comp: StrReplace,
    category: "Strings",
    searchValue: "strings replace"
  },
  {
    path: "/strings/search",
    name: "search()",
    exact: true,
    comp: StrSearch,
    category: "Strings",
    searchValue: "strings search"
  },
  {
    path: "/strings/slice",
    name: "slice()",
    exact: true,
    comp: StrSlice,
    category: "Strings",
    searchValue: "strings slice"
  },
  {
    path: "/strings/split",
    name: "split()",
    exact: true,
    comp: StrSplit,
    category: "Strings",
    searchValue: "strings split"
  },
  {
    path: "/strings/startswith",
    name: "startsWith()",
    exact: true,
    comp: StrStartsWith,
    category: "Strings",
    searchValue: "strings startswith"
  },
  {
    path: "/strings/substr",
    name: "substr()",
    exact: true,
    comp: StrSubstr,
    category: "Strings",
    searchValue: "strings substr"
  },
  {
    path: "/strings/substring",
    name: "substring()",
    exact: true,
    comp: StrSubString,
    category: "Strings",
    searchValue: "strings substring"
  },
  {
    path: "/strings/valueof",
    name: "valueOf()",
    exact: true,
    comp: StrValue,
    category: "Strings",
    searchValue: "strings valueof"
  }
];

export default routes;
