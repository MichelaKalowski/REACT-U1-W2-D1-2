import { Component } from "react";
import SingleBook from "./SingleBooks";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selectedAsin: null,
  };

  bookAsinSelector = (asin) => {
    this.setState({
      selectedAsin: asin,
    });
  };

  render() {
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
                    value={this.state.searchQuery}
                    onChange={(e) =>
                      this.setState({ searchQuery: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {this.props.books
                .filter((b) =>
                  b.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((b) => (
                  <Col xs={12} md={4} key={b.asin}>
                    <SingleBook
                      book={b}
                      selectedAsin={this.state.selectedAsin}
                      changeSelectedAsin={this.changeSelectedAsin}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={this.state.selectedAsin} /> :
            {<p>non ci sono commenti</p>}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
