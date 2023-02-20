import "./AnimalCard.css"
import { AnimalType } from "../../../redux/types";
import { useDeleteAnimalMutation } from '../../../redux/animal';

type Animal = {
    _id: string,
    name: string,
    image: string,
    breed: string,
    date: string
}

type Props ={
    animal: Animal,
}

const AnimalCard = (({animal}: Props) => {

    const [deleteAnimal] = useDeleteAnimalMutation()

    return (
        <div className="post">
            <h2>Name: {animal.name}</h2>
            <img src={animal.image}/>
            <h2>Breed: {animal.breed}</h2>
            <h2>Date added: {animal.date}</h2>
            <button onClick={() => deleteAnimal(animal._id)}>Delete</button>
        </div>
    )
})

export default AnimalCard;

