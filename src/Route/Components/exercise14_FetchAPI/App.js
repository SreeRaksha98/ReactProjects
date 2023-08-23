import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { Link} from 'react-router-dom';

const App = () => {

    const [posts, setPosts] = useState([])

    /**
     * 
     * method #1: async await 
     */
    const fetchPost = async () => {
        const dataFromPost = await fetch('https://jsonplaceholder.typicode.com/posts')
        // console.log('promise from post api',dataFromPost)
        const jsonData = await dataFromPost.json()
        console.log('jsonData', jsonData)
        setPosts(jsonData)
    }

    ///FetchAPI/Post?id=1 === redirect to http://localhost:3000/FetchAPI/Post?id=1

    useEffect(() => {
        console.log('useeffect')
        fetchPost().then()
    }, [])

    return (
        <div>
            <h2>Posts</h2>
            <div>
                {posts.map((post) => <div><Link className="item" to={"/FetchAPI/Post?id="+post.id}>{post.title}</Link>
            </div>)}</div>
            <div>vlog-list</div>
        </div>
    )
}

export default App


