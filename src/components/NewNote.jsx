import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';
import Fab from '@mui/material/Fab';

export default function NewNote(props) {
    const [noteTitle, setNoteTitle] = useState("");
    const [noteDesc, setNoteDesc] = useState("");
    const [activeComp, setActiveComp] = useState(false);

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

    function active() {
        setActiveComp(true);
    }

    return ( 
    <form onSubmit={submitted} className="create-note">
        <input onChange={handleTitle} style={activeComp ? {} : {display: "none"}} type="text" placeholder="Title" value={noteTitle}/>
        <textarea onChange={handleDesc} onClick={active} name="" id="" cols="30" rows={activeComp ? "3" : "1"} placeholder="Take a note..." value={noteDesc}></textarea>
        <Zoom in={activeComp ? true : false}>
            <Fab style={activeComp ? {} : {display: "none"}}><AddIcon/></Fab>
        </Zoom>
    </form>)
}
