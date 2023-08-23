import React, { useEffect, useState } from "react";
import DisplayComponent from "./DisplayComponent"
const App = () => {

    const [toDo, setToDo] = useState([])
    const [filteredToDo, setFilteredToDo] = useState([])
    const [userData, setUserData] = useState([])

    const toDoURL = "https://dummyjson.com/todos/"
    const userDataUrl = "https://dummyjson.com/users/"

    useEffect(()=>{
        getToDoData()
        getUserData()
    },[])

    const handleChange = (event) => {
        // console.log('user data',userData)
        // console.log('event', event)

        if (event.target.value !== "false"){
            const filteredToDoData = toDo.todos.filter( (item) => {
                return item.completed
            })
            setFilteredToDo(filteredToDoData)
        }
        else if(event.target.value === "false"){
            const filteredToDoData = toDo.todos.filter( (item) => {
                return !item.completed
            })
            setFilteredToDo(filteredToDoData)
        }
        else{
            setFilteredToDo(toDo)                
        }
    }
    
    const getToDoData = async () => {
        let dataFromAPI = []
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = () => {
            // console.log(xhttp, xhttp.readyState, xhttp.status)
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                dataFromAPI = JSON.parse(xhttp.responseText)
                setToDo(dataFromAPI)
                setFilteredToDo(dataFromAPI.todos)                
            }
        }
        xhttp.open("GET", toDoURL, true);
        xhttp.send();
        return dataFromAPI
    }

    const getUserData = async () => {
        let dataFromAPI = []
        // fetch(toDoURL).then(res => res.json)
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                dataFromAPI = JSON.parse(xhttp.responseText)
                // setUserData(dataFromAPI)
                setUserData(dataFromAPI)                
            }
        }
        xhttp.open("GET", userDataUrl, true);
        xhttp.send();
        return dataFromAPI
    }

    // console.log('filteredtodo', filteredToDo)

    return (
        <div>
            <h1>Details of the user and their tasks</h1>
            <label>Completed</label>
            <select name="optionTrueorFalse" defaultValue="none" onChange={handleChange}>
                <option value="none">Select option</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>

            {/* <-----------------------------------------to display> */}

            <DisplayComponent filteredToDo = {filteredToDo} userData = {userData} />
        </div>
    )
}


export default App