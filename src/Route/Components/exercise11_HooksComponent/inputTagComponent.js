import React, { useEffect, useState } from "react";

const InputTagComponent = () => {

    const [name, setName] = useState('')
    const [userContact, setUserContact] = useState([])
    const [num, setNum] = useState()

    const handleSubmit = (e) => {

        e.preventDefault()
        let regExp = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
        let updatedUserContact = []

        if (name.length && regExp.test(num)) {
            updatedUserContact = [...userContact, { id: userContact.length, name, num }]
            setUserContact(updatedUserContact)
            localStorage.setItem('name', JSON.stringify(updatedUserContact))
            setName('')
            setNum('')
        }

        else (
            console.log('enter correct value')
        )
    }

    useEffect(() => {
        /**
          * @var dataInLocalStorage: NULL | string
          * fetching prev data from LS  
          **/
        let updatedUserContact = []
        const dataInLocalStorage = localStorage.getItem('name')
        //appending new data to LS
        if (dataInLocalStorage) {
            const covertedData = JSON.parse(dataInLocalStorage)
            updatedUserContact = [...covertedData]
        }
        setUserContact(updatedUserContact)
    }, [])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                ></input>

                <input
                    type="text"
                    placeholder="Enter your contact num"
                    onChange={(e) => setNum(e.target.value)}
                    value={num}
                ></input>

                <button type="submit">
                    submit
                </button>

                <div>
                    {userContact.map((item) => <li key={item.id}> {item.name} - {item.num} </li>)}
                    <br />
                    {/* {nums.map((item) => <li key={item.id}> {item.num} </li>)} */}
                </div>
            </form>
        </div>
    )
}

export default InputTagComponent