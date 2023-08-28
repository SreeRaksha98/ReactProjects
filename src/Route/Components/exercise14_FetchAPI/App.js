import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { Link} from 'react-router-dom';

const App = () => {

    const [posts, setPosts] = useState([])
    // const [user, setuser] = useState([])
    /**
     * 
     * method #1: async await 
     */
    const fetchPost = async () => {
        // console.log('fetchpost')
        const dataFromPost = await fetch('https://jsonplaceholder.typicode.com/posts')
        // console.log('promise from post api',dataFromPost)
        const jsonData = await dataFromPost.json()
        // console.log('jsonData', jsonData)
        setPosts(jsonData)
    }

    useEffect(() => {
        // console.log('useeffect')
        fetchPost().then()
        // fetchUser()
    }, [])

    return (
        <div>
            <h2>Posts List</h2>
            <div>
                {posts.map((post) => <div><Link className="item" to={"/FetchAPI/Post?id="+post.id}>{post.title}</Link>
            </div>)}</div>

        </div>
    )
}

export default App


