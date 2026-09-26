import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/homepage/Home.jsx'
import Posts from "./components/postspage/Posts.jsx";
import About from "./components/about/About.jsx";
import NewPost from "./components/newpost/NewPost.jsx";
import NotFound from "./components/404/NotFound.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import PostDetail from "./components/postspage/PostDetail.jsx";

import posts from './constants/data.json'
import {useState} from "react";


function App() {
    const [postList, setPostList] = useState(posts) //state lifting -> newpost en post hebben de lijst nodig
    console.log(postList);
    return (
        <>

       <Navbar />

        <Routes>
            <Route path="/"
                   element={<Home />}
            />
            <Route path="/posts"
                   element={<Posts postList={postList} />} // geeft json file door via statelift

            />
            <Route path="/posts/:id"
                   element={<PostDetail />}
            />
            <Route path="/new"
                   element={<NewPost postList={postList} setPostList={setPostList}/>}
            />
            <Route path="/about"
                   element={<About />}
            />
            <Route path="*"
                   element={<NotFound />}
            />
        </Routes>
        </>
    )
}

export default App
