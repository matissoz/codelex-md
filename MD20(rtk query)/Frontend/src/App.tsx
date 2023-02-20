import { useState } from 'react'
import './App.css'
import AnimalCard from './components/blog/Post/AnimalCard';
import { useAddAnimalMutation, useGetAllAnimalsQuery } from './redux/animal';
import { AnimalType } from './redux/types';



function App() {

  const [nameValue, setNameValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [breedValue, setBreedValue] = useState("");

  const {data, isLoading} = useGetAllAnimalsQuery();
  const [addAnimal] = useAddAnimalMutation();

  const handleSubmit = (() =>{
    addAnimal({
      name: nameValue,
      image: imageValue,
      breed: breedValue,
    })
  });


  if(isLoading) return <div>Loading..</div>;
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
          <input type="text" 
            value={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
            placeholder="Name"
          />
          <input type="text" 
            value={imageValue}
            placeholder="Image"
            onChange={(e) => setImageValue(e.target.value)}
          />
          <input type="text" 
            value={breedValue}
            placeholder="Breed"
            onChange={(e) => setBreedValue(e.target.value)}
          />
          <button>Submit</button>
      </form>
        {data && data.map((an) => <div><AnimalCard animal={an}/></div>)}
    </div>
  )
}

export default App
