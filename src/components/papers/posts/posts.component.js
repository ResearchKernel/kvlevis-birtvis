import React, { Component } from "react";
import FilterPosts from "./filterPosts/filterPosts.component";
import RenderPosts from "./renderPosts/renderPosts.component";
import "./posts.css";

class Posts extends Component {
  state = {};
  render() {
    return (
      <>
        <FilterPosts className="filterPosts" />
        <RenderPosts className="renderPosts" />
      </>
    );
  }
}

export default Posts;
