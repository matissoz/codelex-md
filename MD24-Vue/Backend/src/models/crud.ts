import mongoose, {Schema} from "mongoose";

const JokeSchema = new Schema({
    joke: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true 
    },
})

export const Crud = mongoose.model("crud", JokeSchema);