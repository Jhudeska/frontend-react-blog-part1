import './NewPost.css';
import { useState } from 'react'



function NewPost({ postList, setPostList }) {

    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    // const [postList, setPostList] = useState(posts) // we hebben geen backend nog, dus slaan we het object in een usestate


    function handleSubmit(event) {
        // Normaal gesproken wanneer je in html  een form heb ingevuld wil je dat de pagina automatisch opnieuw wordt
        // geladen. Maar bij react wil je dat meestal niet en daarom geven hier door om het normale gedrag of flow te voorkomen
        event.preventDefault()


        // een object maken van de blogpost details
        const newPost = {
            id: postList.length + 1,
            title: title,
            subtitle: subtitle,
            author: author,
            content: content,
            created: new Date().toISOString()
        }

        setPostList([...postList, newPost])
        // navigate('/posts')


        console.log(newPost)
    }


    return (
        <main className="content-page">

            <section className="page-heading">
                <h1>Nieuwe blogpost</h1>

                <p>
                    Maak een nieuwe blogpost.
                </p>
            </section>


            {/*formulier*/}
            {/*↓*/}
            {/*onSubmit*/}
            {/*↓*/}
            {/*handleSubmit()*/}
            {/*↓*/}
            {/*state uitlezen*/}
            {/*↓*/}
            {/*gegevens beschikbaar*/}
            <form onSubmit={handleSubmit} className="post-form">

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