import React from 'react'

/**
 * A View Friends Component, with one prop called names
 * 
 * @param { names: Array<string> } props 
 * @returns JSX.Element
 */
const ViewFriends = props => {

    /**
     * @var names: Arrray<string>
     */
    const { names } = props

    return (
        <div className='ui friend-form'>
        <h3>View Friends</h3>
        <div>
            {names.length
            ? names.map(name => {
                return <div>{name}</div>
                })
            : 'Sorry you have 0 friends as of now, make fiends soon 😊😊!'}
        </div>
        </div>
    )
}

export { ViewFriends }
