import React, { useState } from "react";

const InputTagComponent = () => {

    const [name, setName] = useState('')
    const [names, setNames] = useState([])
    const [num, setNum] = useState()
    const [nums, setNums] = useState([])

    const handleSubmit = (e) => {

        e.preventDefault()
        // console.log(e)
        let regExp = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;

        if (name.length) {
            setNames([...names, { id: names.length, name }])
            setName('')
        }

        if (regExp.test(num)) {
            setNums([...nums, { id: nums.length, num }])
            setNum('')
        }
        else(
            console.log('enter correct num')
        )
    }


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
                    {names.map((item) => <li key={item.id}> {item.name}</li>)}
                    <br />
                    {nums.map((item) => <li key={item.id}> {item.num} </li>)}
                </div>
            </form>
        </div>
    )
}

export default InputTagComponent