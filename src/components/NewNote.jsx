import React, { useState } from "react";

export default function NewNote(props) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDesc, setNoteDesc] = useState("");

    function handleTitle(event) {
        const text = event.target.value;
        setNoteTitle(text);
        // console.log(noteTitle)
    }
    function handleDesc(event) {
        const text = event.target.value;
        setNoteDesc(text);
        // console.log(noteDesc);
    }

    function submitted(event) {
        console.log("added");
        props.addNote(noteTitle, noteDesc);

        setNoteTitle("");
        setNoteDesc("");

        event.preventDefault();
    }

    return ( 
    <form onSubmit={submitted}>
        <input onChange={handleTitle} type="text" placeholder="Title" value={noteTitle}/>
        <textarea onChange={handleDesc} name="" id="" cols="30" rows="3" placeholder="Take a note..." value={noteDesc}></textarea>
        <button>Add</button>
    </form>)
}
