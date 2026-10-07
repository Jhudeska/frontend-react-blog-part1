import './NewPost.css';
import { useState } from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";



function NewPost() {

    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [author, setAuthor] = useState('')
    const [content, setContent] = useState('')
    // const [postList, setPostList] = useState(posts) // we hebben geen backend nog, dus slaan we het object in een usestate

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault();

        setError(null);
        setLoading(true);

        const wordCount = content.trim().split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 100 * 0.3);

        const newPost = {
            title: title,
            subtitle: subtitle,
            author: author,
            content: content,
            readTime: readTime
        };

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_NOVI_API_URL}/api/blogposts`,
                newPost,
                {
                    headers: {
                        "novi-education-project-id":
                            "c781fc07-bbf8-488e-aee9-456f6882e830"
                    }
                }
            );

            console.log("Nieuwe blogpost:", response.data);

            navigate(`/posts/${response.data.id}`);

        } catch (error) {
            console.error("API ERROR:", error);
            setError("Het aanmaken van de blogpost is mislukt.");
        } finally {
            setLoading(false);
        }
    }

    // function handleSubmit(event) {
    //     // Normaal gesproken wanneer je in html  een form heb ingevuld wil je dat de pagina automatisch opnieuw wordt
    //     // geladen. Maar bij react wil je dat meestal niet en daarom geven hier door om het normale gedrag of flow te voorkomen
    //     event.preventDefault()
    //
    //     const wordCount = content.trim().split(/\s+/).length
    //
    //     const readTime = Math.ceil(wordCount / 100 * 0.3)
    //
    //     // een object maken van de blogpost details
    //     const newPost = {
    //         id: postList.length + 1,
    //         title: title,
    //         subtitle: subtitle,
    //         author: author,
    //         content: content,
    //         created: new Date().toISOString(),
    //         comments: 0,
    //         shares: 0,
    //         readTime: readTime
    //     }
    //
    //     setPostList([...postList, newPost])
    //     navigate('/posts')
    //
    //
    //     console.log(newPost)
    // }


    return (
        <main className="content-page">

            <section className="page-heading">
                <h1>Nieuwe blogpost</h1>

                <p>
                    Maak een nieuwe blogpost.
                </p>
            </section>

            {error && (
                <p className="error-message">
                    {error}
                </p>
            )}

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
                        required
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
                        required
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
                        required
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
                        minLength={300}
                        maxLength={2000}
                        placeholder="Schijf je blogpost..."
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                        required
                    />
                    <p>
                        {content.length} / 2000 tekens
                    </p>

                </div>

                <button
                    type="submit"
                    className="button"
                    disabled={loading}
                >
                    {loading
                        ? 'Blogpost wordt gemaakt...'
                        : 'Blogpost maken'}
                </button>

            </form>

        </main>
    )
}

export default NewPost