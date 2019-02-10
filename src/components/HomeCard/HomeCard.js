import React from 'react';
// import PropTypes from 'prop-types';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

const HomeCard = (props) => {
  const { title, description } = props;

  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default HomeCard;