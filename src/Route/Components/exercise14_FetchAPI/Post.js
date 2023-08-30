import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const Post = props => {
    const [body, setBody] = useState({})
    const [userData, setUserData] = useState({})

    const idFromURL = new URLSearchParams(window.location.search).get("id")

    const getBodyFromURL = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + idFromURL).then(res => res.json()).then((jsonResponseData) => {
            console.log('post id', jsonResponseData)
            setBody(jsonResponseData)
        })
    }

    const getUserFromURL = () => {
        if (body.userId) {
            fetch('https://dummyjson.com/users/' + body.userId).then(res => res.json()).then((jsonResponseData) => {
                console.log('user id', jsonResponseData)
                setUserData(jsonResponseData)
            })
        }
    }

    useEffect(() => {
        getBodyFromURL()

    }, [])

    useEffect(() => {
        getUserFromURL()
    }, [body])

    return (
        <div>
            <h2>Hello world....Post id = {idFromURL}</h2>
            <div>
                <div>Title: {body.title}</div>
                <div>Body: {body.body}</div>
                <div>User_Name: {userData.firstName} {userData.lastName}</div>
                <div>User_id: {userData.id}</div>
            </div>
        </div>

    )
};


export default Post;

// user, comments
