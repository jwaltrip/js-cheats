import React from 'react';
import strings from './notebook.gif';
import arrays from './arraysNotebook.gif';
import numbers from './numbersNotebook.gif';
import "./HomeCard.css";
import { Card, CardText, CardBody, CardTitle, CardImg } from 'reactstrap';

const HomeCard = (props) => {
  const { title, description } = props;

  let cardImg = "";
  if (props.title === "Strings") {
    cardImg = <CardImg top src={strings} alt="strings" width="100%" />;
  } else if (props.title === "Arrays") {
    cardImg = <CardImg top src={arrays} alt="arrays" width="100%" />;
  } else if (props.title === "Numbers") {
    cardImg = <CardImg top src={numbers} alt="numbers" width="100%" />;
  }

  return (
    <Card className="cards">
      {cardImg}
      <CardBody>
        <CardTitle className="cardTitle">{title}</CardTitle>
        {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
        <CardText className="cardText">{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default HomeCard;