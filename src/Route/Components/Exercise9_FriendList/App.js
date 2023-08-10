import React, { useState, useEffect } from "react";
import { AddFriend } from "./AddFriend/AddFriend";
import { ViewFriends } from "./ViewFriends/ViewFriends";
import "./App.css";

function App() {
  /**
   * @var names: Array<string> or string[]
   * @var setNames: React.Dispatch<React.SetStateAction<never[]>> 
   */
  const [names, setNames] = useState([]);
  console.log('aaa >> window >>', window)

  useEffect(()=> {
    console.log(
      'aaa component loaded >> to get localstorage and set in the names for initial load'
    )
  }, [])

  return (
    <div className="ui container">
      <AddFriend setNames={setNames} names={names}/>
      <ViewFriends names={names} />
    </div>
  );
}

export default App;