import './Posts.css'
import posts from '../../constants/data.json'
import {Link} from "react-router-dom";

function Posts({ postList }) {
    function formatDate(date) {
        return new Date(date).toLocaleDateString("nl-NL", {
            day: "numeric",
            month: "long",
            year: "numeric"
        })
    }
    console.log(posts);
    return (
        <main className="content-page">
            <section className="page-heading">
                <h1>Blogposts</h1>

                <p>
                    Bekijk onze nieuwste artikelen.
                </p>
            </section>

            <section className="posts-grid">

                {postList.map((post) => (
                <article key={post.id} className="post-card">
                <span className="post-card-date">
                   {formatDate(post.created)}
                </span>

                    <h2>{post.title}</h2>

                    <p>
                        {post.subtitle}
                    </p>

                    <p className="post-card-author">
                        Door {post.author}
                    </p>

                    <Link to={`/posts/${post.id}`} className="button">
                        Lees meer
                    </Link>
                </article>
                ))}

                {/*<article className="post-card">*/}
                {/*<span className="post-card-date">*/}
                {/*    20 september 2023*/}
                {/*</span>*/}

                {/*    <h2>De Pracht van Thailand</h2>*/}

                {/*    <p>*/}
                {/*        Een avontuurlijke reis door het land van de glimlach.*/}
                {/*    </p>*/}

                {/*    <p className="post-card-author">*/}
                {/*        Door Erik van der Reis*/}
                {/*    </p>*/}

                {/*    <a href="/posts/2" className="button">*/}
                {/*        Lees meer*/}
                {/*    </a>*/}
                {/*</article>*/}

                {/*<article className="post-card">*/}
                {/*<span className="post-card-date">*/}
                {/*    19 september 2023*/}
                {/*</span>*/}

                {/*    <h2>Avontuurlijke Trektochten in de Alpen</h2>*/}

                {/*    <p>*/}
                {/*        Ontdek de majestueuze berglandschappen.*/}
                {/*    </p>*/}

                {/*    <p className="post-card-author">*/}
                {/*        Door Lena Bergman*/}
                {/*    </p>*/}

                {/*    <a href="/posts/3" className="button">*/}
                {/*        Lees meer*/}
                {/*    </a>*/}
                {/*</article>*/}

            </section>
        </main>
    )
}

export default Posts