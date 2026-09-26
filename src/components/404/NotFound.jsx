import './NotFound.css'

function NotFound() {
    return (
        <main className="content-page">

            <section className="not-found">

                <h1>404</h1>

                <h2>Pagina niet gevonden</h2>

                <p>
                    De pagina die je probeert te bezoeken bestaat niet.
                </p>

                <a href="/" className="button">
                    Terug naar Home
                </a>

            </section>

        </main>
    )
}

export default NotFound