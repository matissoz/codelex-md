import mongoose, {Schema} from "mongoose";

const AnimalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true 
    },
})

export const Animal = mongoose.model("Animals", AnimalSchema);