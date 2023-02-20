import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AddBar.css'
import uniqid from 'uniqid';
import { setAddAnimal } from '../../redux/animalSlice'



const AddBar = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [breed, setBreed] = useState("");

    const dispatch = useDispatch();
    var newAnimal = {
        id: uniqid(),
        name: name,
        image: image,
        breed: breed
    }

    const addAnimal = (() =>{
        axios.post(`http://localhost:3004/animals`,newAnimal)
        .then(({data})=>{
            console.log(data)
        })
    })

    return (
    <div className="addbar">
        <h2>Add new animal</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(setAddAnimal(newAnimal)); 
            addAnimal();
        }}>
            <input type="text" 
                required
                placeholder='Name'
                value={name}
                onChange={(e)=>{
                    setName(e.target.value);
                }}
            />
            <input type="text" 
                required
                placeholder='Breed'
                value={breed}
                onChange={(e)=>{
                    setBreed(e.target.value);
                }}
            />
            <input type="text" 
                required
                placeholder='Image'
                value={image}
                onChange={(e)=>{
                    setImage(e.target.value);
                }}
            />
            <button>
                Add
            </button>
        </form>
    </div>
    )
}

export default AddBar;