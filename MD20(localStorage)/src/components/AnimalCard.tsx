import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AnimalCard.css'
import { RootState } from '../redux/store'
import { Animal, setAllAnimals, setDeleteAnimal } from '../redux/animalSlice'

type Props = {
  animal: Animal
}

const AnimalCard = ({animal}: Props) => {

  const dispatch = useDispatch();

  const deleteAnimal = ((id: string) =>{
    axios.delete(`http://localhost:3004/animals/${id}`).then(()=>{console.log("deleted")})
  })

  return (
    <div className="Card">
      <h2>Name: {animal.name}</h2>
      <img src={animal.image}/>
      <h2>Breed: {animal.breed}</h2>
      <button onClick={() => {
        dispatch(setDeleteAnimal(animal)); 
        deleteAnimal(animal.id);}}
      >
        Delete
      </button>
    </div>
  )
}

export default AnimalCard;