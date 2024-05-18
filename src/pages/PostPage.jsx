import React, { Component, Fragment } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Loading from "../components/shares/Loading";
import { Card } from "react-bootstrap";

export class PostPage extends Component {
  state = {
    post: null,
    loading: false,
  };
  async getPost() {
    let postId = window.location.pathname.split("/").at(-1);
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      this.setState({ post: data });
    } catch (err) {
      toast.error("Error");
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getPost();
  }
  render() {
    const { post, loading } = this.state;
    return (
      <Fragment>
        <section>
          <div className="container">
            {loading ? (
              <Loading />
            ) : (
              <Fragment>
                <Card className="p-3 w-75 mx-auto">
                  <Card.Img
                    className="w-50 mx-auto"
                    variant="top"
                    src="https://shethink.in/wp-content/uploads/2021/07/react.js-img.png"
                  />
                  <Card.Body>
                    <Card.Title>
                      {post?.id}.{post?.title}
                    </Card.Title>
                    <Card.Text>{post?.body}</Card.Text>
                  </Card.Body>
                </Card>
              </Fragment>
            )}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default PostPage;
