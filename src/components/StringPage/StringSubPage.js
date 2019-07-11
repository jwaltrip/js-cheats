import React from 'react';
// import STRING sub-pages
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
// import STRING sub routes from external file to keep things clean
import routes from "./string-routes";

// function to select which component to show
const renderPath = (path) => {
  switch (path) {
    case "/strings/overview":
      return <StrOverview />;
    case "/strings/charAt":
      return <StrCharAt />;
    case "/strings/concat":
      return <StrConcat />;
    case "/strings/endswith":
      return <StrEndsWith />;
    case "/strings/includes":
      return <StrIncludes />;
    case "/strings/indexOf":
      return <StrIndexOf />;
    case "/strings/lastIndexOf":
      return <StrLastIndexOf />;
    case "/strings/length":
      return <StrLength />;
    case "/strings/match":
      return <StrMatch />;
    case "/strings/parseInt":
      return <StrParseInt />;
    case "/strings/repeat":
      return <StrRepeat />;
    case "/strings/replace":
      return <StrReplace />;
    case "/strings/search":
      return <StrSearch />;
    case "/strings/slice":
      return <StrSlice />;
    case "/strings/split":
      return <StrSplit />;
    case "/strings/startswith":
      return <StrStartsWith />;
    case "/strings/substr":
      return <StrSubstr />;
    case "/strings/substring":
      return <StrSubString />;
    case "/strings/valueof":
      return <StrValue />;
    default:
      return <StrOverview />;
  }
}

const StringSubPage = (props) => {
  const { match } = props;
  // console.log(`match.path: ${match.path}`);
  // console.log(`match.url:  ${match.url}`);
  
  const subRoute = routes.find(sub => sub.path === match.url);
  // console.log(subRoute);
  
  return (
    <div>
      {renderPath(subRoute.path)}
    </div>
  );
}

export default StringSubPage;