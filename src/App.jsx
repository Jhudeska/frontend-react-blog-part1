import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/homepage/Home.jsx'
import Posts from "./components/postspage/Posts.jsx";
import About from "./components/about/About.jsx";
import NewPost from "./components/newpost/NewPost.jsx";
import NotFound from "./components/404/NotFound.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import PostDetail from "./components/postspage/PostDetail.jsx";
import {useState, useEffect} from "react";
import axios from "axios";


function App() {
    const [postList, setPostList] = useState([]) //state lifting -> newpost en post hebben de lijst nodig
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        console.log("LOADING:", loading);
        async function fetchPosts() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_NOVI_API_URL}/api/blogposts`,
                    {
                        headers: {
                            "novi-education-project-id": "c781fc07-bbf8-488e-aee9-456f6882e830"
                            // c781fc07-bbf8-488e-aee9-456f6882e830
                            // cd56eb7c-6b02-44a7-a65f-84eca6078c13
                        }
                    }
                );

                setPostList(response.data);

                console.log(response.data);
            } catch (error) {
                console.error("API ERROR:" ,error);
                setError("Het ophalen van de blogposts is mislukt.");
        }finally {
                console.log("FINALLY WORDT UITGEVOERD");
                setLoading(false); // finally want dan wordt het altijd uitgevoerd
            }
    } fetchPosts()
    }, []);

    // console.log(response.data)
    console.log("LOADING:", loading);
    console.log("POSTLIST:", postList);
    return (
        <>

       <Navbar />

        <Routes>
            <Route path="/"
                   element={<Home />}
            />
            <Route path="/posts"
                   element={<Posts postList={postList} loading={loading} error={error} />} // geeft json file door via statelift

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
