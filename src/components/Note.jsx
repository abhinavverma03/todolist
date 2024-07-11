import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleDelete(){
    props.setNoteList(props.noteList.filter((ele,i)=>{
      return i!==props.id;
    }))
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <hr />
      <br />
      <p>{props.content}</p>
      <button onClick={handleDelete}><DeleteIcon /></button>
    </div>
  );
}

export default Note;
