import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './SearchBar.css'
import { setSearchByBreed } from '../../redux/animalSlice';



const SearchBar = () => {
    const [breed, setBreed] = useState("");

    const dispatch = useDispatch();

    return (
    <div className="addbar">
        <h2>Search by breed</h2>
        <form 
            //kods, lai jāspiež search poga
            onSubmit={(e) => {
            e.preventDefault();
            dispatch(setSearchByBreed(breed));}}
        >
            <input type="text" 
                placeholder='Breed'
                value={breed}
                onChange={(e)=>{
                    setBreed(e.target.value);
                    //kods, lai nav jāspiež search poga un viss notiktu
                    // setTimeout(() =>{
                    //     e.preventDefault();
                    //     dispatch(setSearchByBreed(breed));
                    // },1000)
                }}
            />
            <button>
                Search
            </button>
        </form>
    </div>
    )
}

export default SearchBar;