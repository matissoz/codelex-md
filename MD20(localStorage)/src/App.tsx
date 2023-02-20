import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import AddBar from './components/AddBar/AddBar'
import AnimalCard from './components/AnimalCard'
import SearchBar from './components/SearchBar/SearchBar'
import { setAllAnimals } from './redux/animalSlice'
import { RootState } from './redux/store'


function App() {

  const dispatch = useDispatch();
  
  useEffect(() =>{
    axios.get(`http://localhost:3004/animals`).then(({data})=>{
      dispatch(setAllAnimals(data))
    })
  }, [])

  const {animals, searchAnimals} = useSelector((state: RootState) => state.animals)
  
  return (
    <div className="App">
      <AddBar/>
      <SearchBar/>
      {/* Kods itkā nestrādā, bet webā viss strādā :D */}
      <div className='CardDisplay'>
        {animals === searchAnimals ? 
          (animals.map((animal) => <AnimalCard animal={animal}/>)
          ):(
            searchAnimals.map((animal) => <AnimalCard animal={animal}/>)
          )
        }
      </div>
    </div>
  )
}

export default App
