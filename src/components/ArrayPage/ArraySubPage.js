import React from 'react';
// import ARRAY sub-pages
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
// import ARRAY sub routes from external file to keep things clean
import ArrRoutes from './array-routes';

// function to select which component to show
const renderPath = (path) => {
  switch (path) {
    case "/arrays/overview":
      return <ArrOverview />;
    case "/arrays/concat":
      return <ArrConcat />;
    case "/arrays/copyWithin":
      return <ArrCopyWithin />;
    case "/arrays/filter":
      return <ArrFilter />;
    case "/arrays/foreach":
      return <ArrForEach />;
    case "/arrays/includes":
      return <ArrIncludes />;
    case "/arrays/indexof":
      return <ArrIndexOf />;
    case "/arrays/join":
      return <ArrJoin />;
    case "/arrays/lastIndexOf":
      return <ArrLastIndex />;
    case "/arrays/length":
      return <ArrLength />;
    case "/arrays/map":
      return <ArrMap />;
    case "/arrays/pop":
      return <ArrPop />;
    case "/arrays/push":
      return <ArrPush />;
    case "/arrays/reverse":
      return <ArrReverse />;
    case "/arrays/shift":
      return <ArrShift />;
    case "/arrays/slice":
      return <ArrSlice />;
    case "/arrays/sort":
      return <ArrSort />;
    case "/arrays/splice":
      return <ArrSplice />;
    case "/arrays/toString":
      return <ArrString />;
    case "/arrays/unshift":
      return <ArrUnshift />;
    default:
      return <ArrOverview />;
  }
}

const ArraySubPage = (props) => {
  const { match } = props;
  // console.log(`match.path: ${match.path}`);
  // console.log(`match.url:  ${match.url}`);
  
  const subRoute = ArrRoutes.find(sub => sub.path === match.url);
  // console.log(subRoute);
  
  return (
    <div>
      {renderPath(subRoute.path)}
    </div>
  );
}

export default ArraySubPage;
