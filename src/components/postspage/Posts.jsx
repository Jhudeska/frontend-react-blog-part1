import './Posts.css'
import posts from '../../constants/data.json'

function Posts() {
    console.log(posts);
    return (
        <div>
            <h1>Blogposts</h1>
            <p>Hier komen straks alle blogposts.</p>
        </div>
    )
}

export default Posts