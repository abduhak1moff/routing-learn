import axios from "axios";
import React, { Component } from "react";
import { Fragment } from "react";
import PostCard from "../components/card/PostCard";
import { toast } from "react-toastify";
import Loading from "../components/shares/Loading";
import { LIMIT } from "../constants";

export class PostsPage extends Component {
  state = {
    posts: [],
    loading: false,
    total: 0,
    search: "",
    activePage: 1,
  };
  async getPosts(search = "", page = 1) {
    try {
      this.setState({ loading: true });
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        { params: { q: search, _page: page, _limit: LIMIT } }
      );
      let { data: allData } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        { params: { q: search } }
      );
      this.setState({ posts: data, total: allData.length });
    } catch (err) {
      toast.error("Error");
    } finally {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.getPosts();
  }
  render() {
    const { posts, loading, total, search, activePage } = this.state;
    const handleSearch = (e) => {
      this.getPosts(e.target.value);
      this.setState({ search: e.target.value, activePage: 1 });
    };
    const getPage = (page) => {
      this.setState({ activePage: page });
      this.getPosts(search, page);
    };
    const pages = Math.ceil(total / LIMIT);
    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="d-flex align-items-center justify-content-between">
              <h1>PostsPage ({total})</h1>
              <input
                value={search}
                onChange={handleSearch}
                type="text"
                className="form-control w-50"
                placeholder="Searching..."
              />
            </div>
            <div className="d-flex flex-wrap justify-content-center gap-5 mt-5">
              {loading ? (
                <Loading />
              ) : (
                posts.map((post) => <PostCard key={post.id} {...post} />)
              )}
            </div>

            <div className="d-flex  justify-content-center flex-wrap gap-2 mx-auto my-3">
              {Array(pages)
                .fill(1)
                .map((_, i) => (
                  <button
                    className={
                      i + 1 === activePage
                        ? "bg-danger btn btn-danger"
                        : "btn btn-primary"
                    }
                    onClick={() => getPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default PostsPage;
