import React from "react";
import AddGroups from "./AddGroups/AddGroups"
import ViewGroup from "./ViewGroups/ViewGroups"
import { useState } from "react";

function IplMatchList() {
    const [names, setNames] = useState([]);

    return (
        <div>
            <AddGroups setNames={setNames} />
            <ViewGroup names={names}/>
        </div>
    )
}

export default IplMatchList