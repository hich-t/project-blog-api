import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function compare(a, b) {
    if (a.date < b.date) {
      return 1;
    }
    if (a.date > b.date) {
      return -1;
    }
    return 0;
  }



  return (
     loading ?
      <div className="Homepage">
      <div className="toplogo">
        <img className="logohomepage"src='../logo_bloggo.png' alt='bloggo logo' />
        
      </div>
      <h1 className='welcome'>Welcome to Bloggo !</h1>

      <div className="homepagebuttonparent">
        <button className='homepagebuttons'>
          <Link className='link' to="/signup">Sign Up</Link>
        </button>
        <button className='homepagebuttons'>
          <Link className='link' to="/login">Log In</Link>
        </button>
        </div>
        <button className='homepagebuttons'>
            <Link className='link'to="/newpost">Add a post</Link>
          </button>
        <div className='contenthomepage'>
          <h1 className='postlisttitle'>Posts</h1>
          { loading && posts.sort(compare).map((e) => (
            <div className="postlist" key={e._id}>
              <Link to={`/posts/${e._id}`}>
                <h2>{e.title}</h2>
              </Link>
              <p>{e.content}</p>
              <Link to={`/users/${e.author && e.author._id}`}>
              <p>
                Author:{" "}
                {e.author ? e.author.username : 'anonymous'} 
              </p>
              </Link>
              <p>Date: {new Date(e.date).toLocaleString()}</p>
            </div>
          ))}
        </div>

        <div>
         
        </div>
      </div> : 
      <div className="loadingpage">
       <img className="loadingimg" src="../loading.png" alt="loading" /> 
       </div>
    )
  
};

export default Homepage;
