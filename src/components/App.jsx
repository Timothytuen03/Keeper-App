import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import NewNote from "./NewNote";

export default function App(noteTitle, noteDesc) {
    const [notes, setNotes] = useState([]);

    function addNote(noteTitle, noteDesc) {
        const note = {
            title: noteTitle,
            content: noteDesc,
        };
        setNotes((prevItems) => {
            return [...prevItems, note]
        });
    }

    function delNote(id) {
        setNotes((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            })
        })
    }

    return (
        <div>
            <Header/>
            <NewNote addNote={addNote}/>
            <Note notes={notes} delNote={delNote}/>
            <Footer/>
        </div>
    )
}