import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export class PostCard extends Component {
  render() {
    const { id, title, body } = this.props;
    return (
      <Card style={{ width: "18rem" }} className="shadow">
        <Card.Body>
          <Card.Title className="col-30 text-truncate">
            <span>
              {id}.{title}
            </span>
          </Card.Title>
          <Card.Text className="col-60 text-truncate">{body}</Card.Text>
          <Link to={`/posts/${id}`} className="btn btn-primary">
            See More
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default PostCard;
