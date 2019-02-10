import React from 'react';
// import PropTypes from 'prop-types';
import strings from './notebook.gif';
import arrays from './arraysNotebook.gif';
import numbers from './numbersNotebook.gif';
import "./HomeCard.css";
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const HomeCard = (props) => {
  const { title, description, cardType } = props;

  let whatToShow = "";
  if(props.title === "strings"){
    whatToShow = <img src={strings} alt="strings" width="275px" display="flex"/>;
  } else if(props.title === "arrays"){
    whatToShow = <img src={arrays} alt="arrays" width="275px" display="flex"/>;
  } else {
    whatToShow = <img src={numbers} alt="numbers" width="275px" display="flex"/>;
  }

  return (
    <Card className="cards">
      <CardBody>
        {whatToShow}
        <CardTitle className="cardTitle">{title}</CardTitle>
        {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
        <CardText classname="cardText">{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default HomeCard;