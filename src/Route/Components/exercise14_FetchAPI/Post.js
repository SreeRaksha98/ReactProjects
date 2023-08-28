import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Post = props => {
    const [body, setBody] = useState({})

    const idFromURL = new URLSearchParams(window.location.search).get("id")

    const getBodyFromURL = () => {
        const getBodyURL = fetch('https://jsonplaceholder.typicode.com/posts/' + idFromURL).then(res => res.json()).then((jsonResponseData) => {
            console.log(jsonResponseData.body)
            setBody(jsonResponseData)
        })
    }
    
    useEffect(() => {
        getBodyFromURL()
    }, [])

    return (
        <div>
            <h2>Hello world....Post id = {idFromURL}</h2>
            <div>
                <div>Title: {body.title}</div>
                <div>Body: {body.body}</div>
            </div>
        </div>
        
    )
};


export default Post;

// user, comments
