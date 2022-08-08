import React from 'react';
import Button from 'react-bootstrap/Button';
function Square(props) {
    return (
      <Button variant="outline-primary"className="square" size="lg" onClick={props.onClick}>{}
      {props.value}</Button>
    );
  }

 
export default Square;