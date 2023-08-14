import React from 'react'
import { useState } from 'react'
/**
 * Add friend Component
 *
 * @param {names: Array<string>, setNames: React.Dispatch<React.SetStateAction<never[]>>} props
 * @returns JSX.Element
 */
const AddFriend = props => {
  /**
   * @var currentName: string
   */
  const [currentName, setCurrentName] = useState('')

  /**
   * @var names: Array<string>
   */
  const { setNames, names } = props

  /**
   * Method to handle the add names button click
   *
   * @param {*} event
   * @returns void
   */
  const handleClick = event => {
    console.log('aaa on CLick ===', names, setNames, currentName)
    if (currentName?.length && setNames) {
      const updatedNames = [...names, currentName]
      setNames(updatedNames)
      setCurrentName('')
      localStorage.setItem('names', JSON.stringify(updatedNames))
    }
  }

  return (
    <div className='ui friend-form '>
      <h3 class='ui header'>Adding a Friend</h3>
      <div className='ui form'>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={currentName}
            onChange={e => setCurrentName(e.target.value)}
          />
        </div>

        <button className='ui button blue' onClick={handleClick}>
          Add a friend
        </button>
      </div>
    </div>
  )
}

export { AddFriend }
