import { Component } from "react";
import { Card } from "react-bootstrap";
//import CommentArea from "./CommentArea";

class SingleBook extends Component {
  // state = {
  //  selected: false,
  //};

  render() {
    return (
      <>
        <Card
          //onClick={() => this.setState({ selected: !this.state.selected })}
          onClick={() => this.props.changeSelectedAsin(this.props.book.asin)}
          style={{
            border:
              this.props.selectedAsin === this.props.book.asin
                ? "3px solid red"
                : "none",
          }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/*this.state.selected && <CommentArea asin={this.props.book.asin} />*/}
      </>
    );
  }
}

export default SingleBook;
