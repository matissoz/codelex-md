import { useQuery } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom';
import { getScore } from './api/api';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import GamePage from './Pages/GamePage/GamePage';
import HomePage from './Pages/HomePage/HomePage';
import "./app.css"
import ScoreboardPage from './Pages/ScoreboardPage/ScoreboardPage';

function App() {

  const getQuery = useQuery({
    queryKey: ['data'],
    queryFn: getScore,
    keepPreviousData: true,
  });

  return (
    <>
      <Header />
      <div className='page'>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/game" element={<GamePage />}/>
          <Route path="/scoreboard" element={
            <ScoreboardPage query={getQuery}/>
          }/>
        </Routes>
        </div>
      <Footer />
    </>
  )
}

export default App
