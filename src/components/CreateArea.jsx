import React from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

  function handleNote(e){
      const {name, value} = e.target;
      props.setNote({
        ...(props.note),
        [name]: value
      })
    }
  return (
    <div>
      <form>
        <input onChange={handleNote} name="title" placeholder="Title" value={props.note.title} />
        <hr />
        <br />
        <textarea onChange={handleNote} name="content" placeholder="Take a note..." rows="3" value={props.note.content}/>
        <button onClick={(e)=>{
          e.preventDefault();
          if(props.note.title === "" && props.note.content === ""){
            return alert("ERROR: Cannot add empty Note!!")
          }
          props.setNoteList([...props.noteList,props.note]);
          props.setNote({
            title: "",
            content: ""
        })}}><AddIcon /></button>
      </form>
    </div>
  );
}
export default CreateArea;
