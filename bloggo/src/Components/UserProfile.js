import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"

const UserProfile = () => {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios
          .get(`http://localhost:8000/users/posts/${id}`)
          .then((response) => {
            setPost(response.data);
            console.log(response.data);
            setLoading(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return(
        <div className="userprofile">
        <div className="userprofileframe">
        <h1>Posts by this user</h1>
        {loading && post.map(e => 
        <div key={e._id}>
        <Link className='link' to={`/posts/${e._id}`} >
        <h2>{e.title}</h2>
        </Link>
        <p>{e.content}</p>
        <p>{e.date}</p>
        </div>
        )}
        </div>
        </div>
    )
}
export default UserProfile