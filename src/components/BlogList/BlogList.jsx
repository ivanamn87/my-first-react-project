import React from "react";

import { blogPosts } from "../../data/blog-posts.js";
import { Blog } from "../Blog/Blog.jsx";
import "./BlogList.css";

export const BlogList = () => {
  return (
  <div className="blogList">
    { 
     blogPosts.map((post, index) => <Blog post={post} isAutorized={true} key={index}/> ) //mapiramo da za svaki blogPost renderuje po jedan element,  dobicemo niz sa jsx komponentama
    }
  </div>
  )
};


