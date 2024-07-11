import React from "react";
import Header from "./Header";

import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [note,setNote] = useState({
    title:"",
    content:""
  });
  const [noteList,setNoteList] = useState([]);

  return (
    <div>
      <Header />
      <CreateArea setNote={setNote} note={note} setNoteList={setNoteList} noteList={noteList}/>
      {noteList.map((task,i)=>{
        return <Note key={i} id={i} title={task.title} content={task.content} setNoteList={setNoteList} noteList={noteList}/>
      })}
    </div>
  );
}

export default App;
