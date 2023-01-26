import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import NewComment from "../Components/NewComment"

const PostComments = (props) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false)

  useEffect(() => {
    axios
      .get(`http://localhost:8000/posts/comments/${props.id}`)
      .then((response) => {
        setComments(response.data);
        console.log(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    loading && (
    
      <div>
      <h1>Comments</h1>
        {comments.map(e => 
        <div key={e._id}>
        <h2>By {e.author ? e.author.username : 'anonymous'} at {new Date(e.date).toLocaleString()}</h2>
        <p>{e.content}</p>
        </div>
        )}
        <button onClick={()=>setShowAddComment(!showAddComment)}
        className='homepagebuttons'>
              {showAddComment ? "Hide" : "Add Comment" }
          </button>
          {showAddComment && <NewComment id={props.id}/>}
      </div>
      
    )
  );
};

export default PostComments;
