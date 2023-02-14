import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

/*class BookList extends Component {
  state = {
    searchQuery: "",
    selectedAsin: null,
  };

  bookAsinSelector = (asin) => {
    this.setState({
      selectedAsin: asin,
    });
  };*/

const BookList = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsin, setSelectedAsin] = useState(null);

  useEffect(() => {
    console.log("Hey I'm rendering");
  });

  const bookAsinSelector = (asin) => {
    setSelectedAsin(asin);
  };

  return (
    <>
      <Row>
        <Col md={8}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Search a book</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Search here"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {props.books
              .filter((b) =>
                b.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedAsin={selectedAsin}
                    changeSelectedAsin={bookAsinSelector}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selectedAsin} /> :{<p>non ci sono commenti</p>}
        </Col>
      </Row>
    </>
  );
};

export default BookList;
