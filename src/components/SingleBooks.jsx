import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  const [selectedAsin, setSelectedAsin] = useState(props.selectedAsin);

  useEffect(() => {
    setSelectedAsin(props.selectedAsin);
  });

  return (
    <>
      <Card
        onClick={() => props.changeSelectedAsin(props.book.asin)}
        style={{
          border: selectedAsin === props.book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
