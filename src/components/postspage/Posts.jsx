import './Posts.css'
import posts from '../../constants/data.json'

function Posts() {
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

                {posts.map((post) => (
                <article key={post.id} className="post-card">
                <span className="post-card-date">
                    {/*21 september 2023*/}
                    {post.created}
                </span>

                    <h2>{post.title}</h2>

                    <p>
                        {post.subtitle}
                    </p>

                    <p className="post-card-author">
                        Door {post.author}
                    </p>

                    <a href="/posts/1" className="button">
                        Lees meer
                    </a>
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