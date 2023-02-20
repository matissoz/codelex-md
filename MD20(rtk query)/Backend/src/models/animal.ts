import mongoose, {Schema} from "mongoose";

const AnimalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export const Animal = mongoose.model("Animals", AnimalSchema);