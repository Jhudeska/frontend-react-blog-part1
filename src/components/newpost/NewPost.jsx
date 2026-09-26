import './NewPost.css';

function NewPost() {
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
                    />
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
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="author">
                        Auteur
                    </label>

                    <input
                        type="text"
                        id="author"
                        name="author"
                        placeholder="Naam van de auteur"
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
                        placeholder="Schrijf je blogpost..."
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