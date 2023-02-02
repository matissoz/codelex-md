import './App.css';
import CardsDisplay from './components/cards/cards';
import AddPage from './components/addPage';
import React, { useState } from 'react'
import { Page } from './type';

function App() {

  const [page, setPage] = useState(Page.list)

  const AddBtnHandler = () =>{
    setPage(Page.add);
  }

  const BackBtnHandler = () =>{
    setPage(Page.list);
}

  return (
    <div>
      {page === Page.list && (
        <>
          <CardsDisplay />
          <button onClick={AddBtnHandler}>Add</button>
        </>
      )}
      {page === Page.add && (
        <>
          <AddPage BackBtnHandler={BackBtnHandler}/>
        </>
      )}


    </div>
  )
}

export default App
