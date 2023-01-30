import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    "task",
  ]);

  const [inputVal, setInputVal] = useState("");

  function addTodo(e){
    e.preventDefault();
    if(inputVal != ""){
      setTodo([...todo, inputVal])
      setInputVal("")
    }

  }


  return (
    <div className="App">
      <ul>
        {
          todo.map(item =><li>{item}<input type="checkbox"/></li>)
        }
      </ul>
      <form onSubmit={addTodo}>
        <input 
          type="text" 
          placeholder='input todo'
          value={inputVal}
          onChange={e=>setInputVal(e.target.value)}
         />
        <button className="add__button">Add</button>
      </form>

    </div>
  )
}

export default App
