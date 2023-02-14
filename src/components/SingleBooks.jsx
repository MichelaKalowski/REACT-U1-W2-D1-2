import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (props.selectedBook === props.book.asin) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [props.selectedBook, props.book.asin]);

  return (
    <>
      <Card
        onClick={() => props.changeSelectedBook(props.book.asin)}
        style={{
          border: selected ? "3px solid red" : "none",
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
