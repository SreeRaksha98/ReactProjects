import React, { useState } from 'react'

const AddGroups = (props) => {
    const [currentGroupName, setcurrentGroupName] = useState('')
    const { setNames, names } = props

    const handleClick = event => {
        console.log('current' +currentGroupName, "set" +setcurrentGroupName)
        if (currentGroupName?.length && setcurrentGroupName){
            const updatedGroupName = props
            setNames(updatedGroupName)
            setcurrentGroupName('')
            localStorage.setItem('names', JSON.stringify(updatedGroupName))

       }
    }

    return (
        <div className='ui friend-form '>
            <h3 className='ui header'>Adding IPL Teams</h3>
            <div className='ui form'>
                <div className='field'>
                    <label>Group Name</label>
                    <input
                        type="text"
                        name="groupName"
                        onChange={e => setcurrentGroupName(e.target.value)}
                    >
                    </input>
                </div>
                <button className='ui button blue' onClick={handleClick} >
                    Add a Team
                </button>
            </div>
        </div>
    )
}

export default AddGroups