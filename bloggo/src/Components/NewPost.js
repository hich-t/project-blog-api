import {useState} from "react"
import axios from "axios"

const NewPost =  (props)  => {
    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    function handleSubmit(e) {
        e.preventDefault();    
        axios.post(`http://localhost:8000/posts`,
       { title : title,
        content : content },
        { 'content-type': 'application/json' }
        )
        .then(response => console.log(response))
    }

    return(
        <div className="newpostomponent">
        <div className='newpostframe'>
        <form onSubmit={handleSubmit}>
        <label>
        Title : <br/>
        <input className="inputforms"
          type="text"
          placeholder='Title (required)'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br/>
        </label>

        <label>
        Post : <br/>
        <textarea className="inputformscommentcontent"
          type="text"
          placeholder='Your Post...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        </label>
        <button type="submit" className='homepagebuttons'>
        Post
        </button>
        </form>
        </div>
        </div>
    )
}

export default NewPost