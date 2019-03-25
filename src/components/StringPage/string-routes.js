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

const routes = [
  {
    path: "/strings/overview",
    name: "Strings Overview",
    exact: true,
    comp: StrOverview
  },
  {
    path: "/strings/charAt",
    name: "charAt()",
    exact: true,
    comp: StrCharAt
  },
  {
    path: "/strings/concat",
    name: "concat()",
    exact: true,
    comp: StrConcat
  },
  {
    path: "/strings/endswith",
    name: "endsWith()",
    exact: true,
    comp: StrEndsWith
  },
  {
    path: "/strings/includes",
    name: "includes()",
    exact: true,
    comp: StrIncludes
  },
  {
    path: "/strings/indexOf",
    name: "indexOf()",
    exact: true,
    comp: StrIndexOf
  },
  {
    path: "/strings/lastIndexOf",
    name: "lastIndexOf()",
    exact: true,
    comp: StrLastIndexOf
  },
  {
    path: "/strings/length",
    name: "length",
    exact: true,
    comp: StrLength
  },
  {
    path: "/strings/match",
    name: "match()",
    exact: true,
    comp: StrMatch
  },
  {
    path: "/strings/parseInt",
    name: "parseInt()",
    exact: true,
    comp: StrParseInt
  },
  {
    path: "/strings/repeat",
    name: "repeat()",
    exact: true,
    comp: StrRepeat
  },
  {
    path: "/strings/replace",
    name: "replace()",
    exact: true,
    comp: StrReplace
  },
  {
    path: "/strings/search",
    name: "search()",
    exact: true,
    comp: StrSearch
  },
  {
    path: "/strings/slice",
    name: "slice()",
    exact: true,
    comp: StrSlice
  },
  {
    path: "/strings/split",
    name: "split()",
    exact: true,
    comp: StrSplit
  },
  {
    path: "/strings/startswith",
    name: "startsWith()",
    exact: true,
    comp: StrStartsWith
  },
  {
    path: "/strings/substr",
    name: "substr()",
    exact: true,
    comp: StrSubstr
  },
  {
    path: "/strings/substring",
    name: "substring()",
    exact: true,
    comp: StrSubString
  },
  {
    path: "/strings/valueof",
    name: "valueOf()",
    exact: true,
    comp: StrValue
  }
];

export default routes;
