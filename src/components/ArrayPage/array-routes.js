// import sub-pages
// these are sorted alphabetically (except for overview page)
import ArrOverview from "./sub-pages/ArrOverview";
import ArrConcat from "./sub-pages/ArrConcat";
import ArrCopyWithin from "./sub-pages/ArrCopyWithin";
import ArrFilter from "./sub-pages/ArrFilter";
import ArrForEach from "./sub-pages/ArrForEach";
import ArrIncludes from "./sub-pages/ArrIncludes";
import ArrIndexOf from "./sub-pages/ArrIndexOf";
import ArrJoin from "./sub-pages/ArrJoin";
import ArrLastIndex from './sub-pages/ArrLastIndex';
import ArrLength from "./sub-pages/ArrLength";
import ArrMap from "./sub-pages/ArrMap";
import ArrPop from './sub-pages/ArrPop';
import ArrPush from "./sub-pages/ArrPush";
import ArrReverse from "./sub-pages/ArrReverse";
import ArrShift from "./sub-pages/ArrShift";
import ArrSlice from './sub-pages/ArrSlice';
import ArrSort from './sub-pages/ArrSort';
import ArrSplice from './sub-pages/ArrSplice';
import ArrString from './sub-pages/ArrString';
import ArrUnshift from './sub-pages/ArrUnshift';

// this will be used for the side nav bar
// all routes should push components

const routes = [
  {
    path: "/arrays/overview",
    name: "Arrays Overview",
    exact: true,
    comp: ArrOverview,
    category: "Arrays",
    searchValue: "arrays overview"
  },
  {
    path: "/arrays/concat",
    name: "concat()",
    exact: true,
    comp: ArrConcat,
    category: "Arrays",
    searchValue: "arrays concat"
  },
  {
    path: "/arrays/copyWithin",
    name: "copyWithin()",
    exact: true,
    comp: ArrCopyWithin,
    category: "Arrays",
    searchValue: "arrays copywithin"
  },
  {
    path: "/arrays/filter",
    name: "filter()",
    exact: true,
    comp: ArrFilter,
    category: "Arrays",
    searchValue: "arrays filter"
  },
  {
    path: "/arrays/foreach",
    name: "forEach()",
    exact: true,
    comp: ArrForEach,
    category: "Arrays",
    searchValue: "arrays foreach"
  },
  {
    path: "/arrays/includes",
    name: "includes()",
    exact: true,
    comp: ArrIncludes,
    category: "Arrays",
    searchValue: "arrays includes"
  },
  {
    path: "/arrays/indexof",
    name: "indexOf()",
    exact: true,
    comp: ArrIndexOf,
    category: "Arrays",
    searchValue: "arrays indexof"
  },
  {
    path: "/arrays/join",
    name: "join()",
    exact: true,
    comp: ArrJoin,
    category: "Arrays",
    searchValue: "arrays join"
  },
  {
    path: "/arrays/lastIndexOf",
    name: "lastIndexOf()",
    exact: true,
    comp: ArrLastIndex,
    category: "Arrays",
    searchValue: "arrays lastindexof"
  },
  {
    path: "/arrays/length",
    name: "length",
    exact: true,
    comp: ArrLength,
    category: "Arrays",
    searchValue: "arrays length"
  },
  {
    path: "/arrays/map",
    name: "map()",
    exact: true,
    comp: ArrMap,
    category: "Arrays",
    searchValue: "arrays map"
  },
  {
    path: "/arrays/pop",
    name: "pop()",
    exact: true,
    comp: ArrPop,
    category: "Arrays",
    searchValue: "arrays pop"
  },
  {
    path: "/arrays/push",
    name: "push()",
    exact: true,
    comp: ArrPush,
    category: "Arrays",
    searchValue: "arrays push"
  },
  {
    path: "/arrays/reverse",
    name: "reverse()",
    exact: true,
    comp: ArrReverse,
    category: "Arrays",
    searchValue: "arrays reverse"
  },
  {
    path: "/arrays/shift",
    name: "shift()",
    exact: true,
    comp: ArrShift,
    category: "Arrays",
    searchValue: "arrays shift"
  },
  {
    path: "/arrays/slice",
    name: "slice()",
    exact: true,
    comp: ArrSlice,
    category: "Arrays",
    searchValue: "arrays slice"
  },
  {
    path: "/arrays/sort",
    name: "sort()",
    exact: true,
    comp: ArrSort,
    category: "Arrays",
    searchValue: "arrays sort"
  },
  {
    path: "/arrays/splice",
    name: "splice()",
    exact: true,
    comp: ArrSplice,
    category: "Arrays",
    searchValue: "arrays splice"
  },
  {
    path: "/arrays/toString",
    name: "toString()",
    exact: true,
    comp: ArrString,
    category: "Arrays",
    searchValue: "arrays tostring"
  },
  {
    path: "/arrays/unshift",
    name: "unshift()",
    exact: true,
    comp: ArrUnshift,
    category: "Arrays",
    searchValue: "arrays unshift"
  }
];

export default routes;