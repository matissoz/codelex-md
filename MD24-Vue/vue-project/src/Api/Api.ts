import axios from 'axios'
import { reactive } from 'vue'

type ApiResponseType = {
  ammount: number
  error: boolean
  jokes: JokeType[]
}

export type JokeType = {
  category: string
  type: string
  joke: string
  flags: Flags
  id: number
  safe: boolean
  lang: 'en'
}

export type FavouriteJokeType = {
  _id?: string
  joke: string
  category: string
}

type Flags = {
  nsfw: boolean
  religious: boolean
  political: boolean
  racist: boolean
  sexist: boolean
  explicit: boolean
}

export const store = reactive({
  data: [] as Array<JokeType>,
  favourites: [] as Array<FavouriteJokeType>,

  async getData() {
    return await axios
      .get<ApiResponseType>(`https://v2.jokeapi.dev/joke/Programming?type=single&amount=10`)
      .then(({ data }) => (this.data = data.jokes))
  },

  getFavourites() {
    axios
      .get(`http://localhost:3004/all-favourite-jokes`)
      .then(({ data }) => (this.favourites = data))
  },

  addToFavorite(joke: string, category: string) {
    axios
      .post<FavouriteJokeType>(`http://localhost:3004/add-favourite-joke`, {
        joke,
        category
      })
      .then(() => this.getFavourites())
  },


  removeFromFavorite(id: string) {
    axios
      .delete<FavouriteJokeType>(`http://localhost:3004/delete-favourite-joke/${id}`)
      .then(() => this.getFavourites())
  }
})
