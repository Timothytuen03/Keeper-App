import React from "react";


export default function Note(props) {
    const notes = props.notes; 

    return (
        <div>
            {notes.map((entry, id) => 
            <div className="note">
                <h1>{entry.title}</h1>
                <p>{entry.content}</p>
                <button onClick={() => {
                    props.delNote(id)
                }}>DELETE</button>
            </div>
            )}

        </div>
    )

}