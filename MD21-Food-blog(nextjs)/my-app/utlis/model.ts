import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const blogPostSchema = new mongoose.Schema({
  title: {
    /* The name of this pet */

    type: String,
    required: [true, 'Please provide a title.'],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  image_url: {
    required: [true, 'Please provide an image url for this recipe.'],
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  }
})

export const Blog = mongoose.model("foodblog", blogPostSchema);