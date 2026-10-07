import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function PostDetail() {
    const { id } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_NOVI_API_URL}/api/blogposts/${id}`,
                    {
                        headers: {
                            "novi-education-project-id": "c781fc07-bbf8-488e-aee9-456f6882e830"
                        }
                    }
                );

                setPost(response.data);
            } catch (error) {
                console.error("API ERROR:", error);
                setError("Het ophalen van de blogpost is mislukt.");
            } finally {
                setLoading(false);
            }
        }

        fetchPost();
    }, [id]);

    function formatDate(date) {
        return new Date(date).toLocaleDateString("nl-NL", {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }

    if (loading) {
        return (
            <main className="content-page">
                <p>Blogpost wordt geladen...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main className="content-page">
                <p>{error}</p>
            </main>
        );
    }

    if (!post) {
        return (
            <main className="content-page">
                <div className="not-found">
                    <h1>404</h1>
                    <h2>Blogpost niet gevonden</h2>
                    <p>
                        Deze blogpost bestaat helaas niet.
                    </p>
                </div>
            </main>
        );
    }

    console.log(post);

    // const { id } = useParams();
    //
    // const post = postList.find((post) => post.id === Number(id));
    // if (!post) {
    //     return (
    //         <main className="content-page">
    //             <div className="not-found">
    //                 <h1>404</h1>
    //                 <h2>Blogpost niet gevonden</h2>
    //                 <p>
    //                     Deze blogpost bestaat helaas niet.
    //                 </p>
    //             </div>
    //         </main>
    //     )
    // }
    // console.log(post);



    return (
        <main className="content-page">

            <article className="post-detail">

            <span className="post-card-date">
                {formatDate(post.created)}
            </span>

                <h1>{post.title}</h1>

                <p className="post-detail-subtitle">
                    {post.subtitle}
                </p>

                <p className="post-detail-author">
                    Door {post.author}
                </p>

                <div className="post-detail-content">
                    <p>
                        {post.content}
                    </p>

                    {/*<p>*/}
                    {/*    In deze blog nemen we je mee op een smakelijke*/}
                    {/*    reis door Bella Italia.*/}
                    {/*</p>*/}
                </div>

                <div className="post-meta">
                    <span>{post.readTime} min lezen</span>
                    <span>{post.comments} reacties</span>
                    <span>{post.shares} keer gedeeld</span>
                </div>

            </article>

        </main>
    )

}

export default PostDetail