import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {
    const notes = props.notes; 

    return (
        <div>
            {notes.map((entry, id) => 
            <div className="note">
                <h1>{entry.title}</h1>
                <p>{entry.content}</p>
                <DeleteIcon onClick={() => {
                    props.delNote(id)
                }}>DELETE</DeleteIcon>
            </div>
            )}

        </div>
    )

}