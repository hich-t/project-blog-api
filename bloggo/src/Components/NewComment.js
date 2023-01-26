import {useState} from "react"
import axios from "axios"

const NewComment =  (props)  => {
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    function handleSubmit(e) {
        e.preventDefault();    
        axios.post(`http://localhost:8000/posts/comments/${props.id}`,
       { content : content,
        post : props.id },
        { 'content-type': 'application/json' }
        )
        .then(response => console.log(response))
    }

    return(
        <div className="commentcomponent">
        <form onSubmit={handleSubmit}>
        {/* <label>
        Author : <br/>
        <input className="inputforms"
          type="text"
          placeholder='Anonymous ?'
          value=""
          onChange={(e) => e.target.value}
        />
        <br/>
        </label> */}
        <label>
        Comment : <br/>
        <textarea className="inputformscommentcontent"
          type="text"
          placeholder='Your comment...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        </label>
        <button type="submit" className='homepagebuttons'>
        Post
        </button>
        </form>
      
        </div>
    )
}

export default NewComment