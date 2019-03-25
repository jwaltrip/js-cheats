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

const routes = [
  {
    path: "/arrays/overview",
    name: "Arrays Overview",
    exact: true,
    comp: ArrOverview
  },
  {
    path: "/arrays/concat",
    name: "concat()",
    exact: true,
    comp: ArrConcat
  },
  {
    path: "/arrays/copyWithin",
    name: "copyWithin()",
    exact: true,
    comp: ArrCopyWithin
  },
  {
    path: "/arrays/filter",
    name: "filter()",
    exact: true,
    comp: ArrFilter
  },
  {
    path: "/arrays/foreach",
    name: "forEach()",
    exact: true,
    comp: ArrForEach
  },
  {
    path: "/arrays/includes",
    name: "includes()",
    exact: true,
    comp: ArrIncludes
  },
  {
    path: "/arrays/indexof",
    name: "indexOf()",
    exact: true,
    comp: ArrIndexOf
  },
  {
    path: "/arrays/join",
    name: "join()",
    exact: true,
    comp: ArrJoin
  },
  {
    path: "/arrays/lastIndexOf",
    name: "lastIndexOf()",
    exact: true,
    comp: ArrLastIndex
  },
  {
    path: "/arrays/length",
    name: "length",
    exact: true,
    comp: ArrLength
  },
  {
    path: "/arrays/map",
    name: "map()",
    exact: true,
    comp: ArrMap
  },
  {
    path: "/arrays/pop",
    name: "pop()",
    exact: true,
    comp: ArrPop
  },
  {
    path: "/arrays/push",
    name: "push()",
    exact: true,
    comp: ArrPush
  },
  {
    path: "/arrays/reverse",
    name: "reverse()",
    exact: true,
    comp: ArrReverse
  },
  {
    path: "/arrays/shift",
    name: "shift()",
    exact: true,
    comp: ArrShift
  },
  {
    path: "/arrays/slice",
    name: "slice()",
    exact: true,
    comp: ArrSlice
  },
  {
    path: "/arrays/sort",
    name: "sort()",
    exact: true,
    comp: ArrSort
  },
  {
    path: "/arrays/splice",
    name: "splice()",
    exact: true,
    comp: ArrSplice
  },
  {
    path: "/arrays/toString",
    name: "toString()",
    exact: true,
    comp: ArrString
  },
  {
    path: "/arrays/unshift",
    name: "unshift()",
    exact: true,
    comp: ArrUnshift
  }
];

export default routes;