import React from 'react';
import PropTypes from 'prop-types'

import './Blog.css';




export const Blog = (props) => { //unutar props objekta imamo sve sto smo dali u BlogListu 

    return (
      <div className="blogItem" > 
        <h3>{props.post.title}</h3>
        <p>{props.post.body}</p>
      </div>
    )
}

Blog.propTypes = {
  isAutorized: PropTypes.bool.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  })
}

