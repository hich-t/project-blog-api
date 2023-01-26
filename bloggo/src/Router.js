import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import NavBar from "./Components/NavBar"
import Homepage from "./Homepage"
import PostDetails from "./Components/PostDetails"
import NewPost from "./Components/NewPost"
import UserProfile from "./Components/UserProfile"

const Router = () => {
    const location = useLocation();

    return(
    <>
    {location.pathname !== "/" ? <NavBar />:null} 

    <Routes>
        <Route path="/" element={<Homepage />} /> />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />}  />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>

     </>
    )
}

export default Router