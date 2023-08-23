import React from "react";

const DisplayComponent = (props) => {

    /**
     * @param int id
     */
    const getUser = (id) => {
        const user = props.userData.users?.find( (user) => user.id === id )
        if(!user){
            return {firstName : 'guest', lastName : ' ', email : 'guest@gmail.com'}
        }
        return user
    }

    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>User Id</th>
                <th>ToDo</th>
            </tr>
            {props.filteredToDo?.map((todo) => {
                const user = getUser(todo.userId)
                return (
                    
                    <tr>
                        <td> {user?.firstName + ' ' + user?.lastName}</td>
                        <td>{user?.email}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.todo}</td>
                    </tr>
                    
                )
            })}

        </table>
    )
}

export default DisplayComponent