import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import { getChar, getChars } from './api/api'
import './App.scss'
import Header from './components/Header/header'
import About from './pages/About'
import CharacterList from './pages/CharacterList'
import Character from './pages/Character'
import Home from './pages/Home'

function App() {
  
  const [page, setPage] = useState(1);
  
  const charsQuery = useQuery({
    queryKey: ['data', page],
    queryFn: () => getChars(page),
    keepPreviousData: true,
  });

  const maxCharacters = +(charsQuery.data?.info.count);


  const changePage = ((value:number) =>{
    setPage(value)
  });


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/characters" element={
          <CharacterList
            charsQuery={charsQuery}
            changePage={changePage}
            currPage= {page}
            />
        }/>
        <Route path="/characters/:id" element={
          <Character
            maxCharacters={maxCharacters}
          />
        }/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App
