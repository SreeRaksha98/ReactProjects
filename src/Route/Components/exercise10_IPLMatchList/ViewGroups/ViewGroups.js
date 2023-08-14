import React from "react";

const ViewGroup = (props) =>{
    const { names } = props
    return(
        <div className='ui friend-form'>
        <h3>View Friends</h3>
        <div>
            {names.length
            ? names.map(name => {
                return <div>{name}</div>
                })
            : "Sorry you haven't entered any grp name yet😊😊!"}
        </div>
        </div>
    )
}

export default ViewGroup