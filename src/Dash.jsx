import React, { useState , useEffect} from 'react'

const Dash = () => {
    const[notes, setNotes]=useState(()=>{
        const savedNotes=localStorage.getItem("notes");
        console.log(savedNotes)
        return savedNotes ? JSON.parse(savedNotes) : []
    })

    const [text, setText] = useState();

    useEffect(()=>{
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])
    function addNotes(e){
        e.preventDefault();
        const newNotes={
            id: Date.now(),
            text:text
        };
        setNotes([...notes, newNotes]);
        setText('')
    }
  return (
    <div>
    <form action="" onSubmit={addNotes}>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
      <button>Add Note</button>
    </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Dash
