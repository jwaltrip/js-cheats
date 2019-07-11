import React from 'react';
// import NUMBER sub-pages
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
import MathAbs from './sub-pages/MathAbs';
import MathCeil from './sub-pages/MathCeil';
import MathFloor from './sub-pages/MathFloor';
import MathRound from './sub-pages/MathRound';
import MathPow from './sub-pages/MathPow';
import MathRandom from './sub-pages/MathRandom';
import MathMax from './sub-pages/MathMax';
import MathMin from './sub-pages/MathMin';
// import NUMBER sub routes from external file to keep things clean
import NumRoutes from './number-routes';

// function to select which component to show
const renderPath = (path) => {
  switch (path) {
    case "/numbers/overview":
      return <NumOverview />;
    case "/numbers/isinteger":
      return <NumIsInteger />;
    case "/numbers/number":
      return <NumNumber />;
    case "/numbers/parseFloat":
      return <NumParseFloat />;
    case "/numbers/parseint":
      return <NumParseInt />;
    case "/numbers/toExpoenential":
      return <NumToExponentail />;
    case "/numbers/toFixed":
      return <NumToFixed />;
    case "/numbers/toPrecision":
      return <NumToPrecision />;
    case "/numbers/toString":
      return <NumToString />;
    case "/numbers/MathAbs":
      return <MathAbs />;
    case "/numbers/MathCeil":
      return <MathCeil />;
    case "/numbers/MathFloor":
      return <MathFloor />;
    case "/numbers/MathRound":
      return <MathRound />;
    case "/numbers/MathPow":
      return <MathPow />;
    case "/numbers/MathRandom":
      return <MathRandom />;
    case "/numbers/MathMax":
      return <MathMax />;
    case "/numbers/MathMin":
      return <MathMin />;
    default:
      return <NumOverview />;
  }
}

const NumberSubPage = (props) => {
  const { match } = props;
  // console.log(`match.path: ${match.path}`);
  // console.log(`match.url:  ${match.url}`);
  
  const subRoute = NumRoutes.find(sub => sub.path === match.url);
  // console.log(subRoute);
  
  return (
    <div>
      {renderPath(subRoute.path)}
    </div>
  );
}

export default NumberSubPage;
