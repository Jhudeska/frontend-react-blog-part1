import './Home.css'
import logo from '../../assets/logo-white.png'


function Home() {
    return (
        <main className="home_page">
            <section className="hero">
                <img width="500px" src={logo} alt={"Company logo"} className="hero_logo" />
                <h1>Welcome bij onze blog</h1>
                <p>
                    Ontdek interessante verhalen, inspiraties en artikelen over reizen, eten en avontuur.
                </p>
                <a href="/posts" className="button">Bekijk alle blogs</a>
            </section>
        </main>
    )
}

export default Home