import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/homepage/Home.jsx'
import Posts from "./components/postspage/Posts.jsx";
import About from "./components/about/About.jsx";
import NewPost from "./components/newpost/NewPost.jsx";
import NotFound from "./components/404/NotFound.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import PostDetail from "./components/PostDetail.jsx";



function App() {
    return (
        <>

       <Navbar />

        <Routes>
            <Route path="/"
                   element={<Home />}
            />
            <Route path="/posts"
                   element={<Posts />}
            />
            <Route path="/posts/:id"
                   element={<PostDetail />}
            />
            <Route path="/new"
                   element={<NewPost />}
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
