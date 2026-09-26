import './NewPost.css';
import { useState } from 'react'


function NewPost() {

    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')



    return (
        <main className="content-page">

            <section className="page-heading">
                <h1>Nieuwe blogpost</h1>

                <p>
                    Maak een nieuwe blogpost.
                </p>
            </section>

            <form className="post-form">

                <div className="form-group">
                    <label htmlFor="title">
                        Titel
                    </label>

                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Titel van je blogpost"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    {/* <!-- testen of useState() werkt-->*/}
                    {/*<p>{title}</p>*/}
                </div>

                <div className="form-group">
                    <label htmlFor="subtitle">
                        Ondertitel
                    </label>

                    <input
                        type="text"
                        id="subtitle"
                        name="subtitle"
                        placeholder="Ondertitel"
                        value={subtitle}
                        onChange={(event) => setSubtitle(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="author">
                        Auteur
                    </label>

                    {/*{Stappenplan:*/}
                    {/*{gebruiker type*/}
                    {/*{on change*/}
                    {/*{setAuthor()*/}
                    {/*{onChange en setAuthor() wijzigt state}*/}
                    {/*{author verandert}*/}

                    <input
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Naam van de auteur"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="content">
                        Inhoud
                    </label>

                    <textarea
                        id="content"
                        name="content"
                        rows="10"
                        placeholder="Schijf je blogpost..."
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />

                </div>

                <button type="submit" className="button">
                    Blogpost maken
                </button>

            </form>

        </main>
    )
}

export default NewPost