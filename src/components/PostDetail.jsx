import {useParams} from "react-router-dom";
import posts from  '../constants/data.json';

function PostDetail() {
    function formatDate(date) {
        return new Date(date).toLocaleDateString("nl-NL", {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }
    const { id } = useParams();

    const post = posts.find((post) => post.id === Number(id));
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
        )
    }
    console.log(post);

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