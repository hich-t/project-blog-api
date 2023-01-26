import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PostComments from './PostComments'

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const [showComment, setShowComment] = useState(false)
  const [loading, setLoading] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        console.log(response.data)
        setLoading(true)

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    loading &&
    <div className="postdetails">
    
    <div className="postdetailsframe">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link className="link" to={`/users/${post.author && post.author._id}`}>
      <p>{post.author ? post.author.username : 'anonymous'} </p>
      </Link>
      <p>{new Date(post.date).toLocaleString()}</p>
      <button className='homepagebuttons' onClick={()=>setShowComment(!showComment)}>
      {showComment ? "Hide Comments" : "Show Comments"}
      </button>
      {showComment && <PostComments  id={post._id}  />}
      </div>
    </div>
  );
};

export default PostDetails;
