import axios from 'axios'
import { defineStore } from 'pinia'


export type Movie = {
  Poster: string,
  Title: string,
  Type: string,
  Year: string
  imdbID: string,
}

type MovieFull = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string,
    Value: string
  };
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  totalSeasons?: number,
}

type ApiResponse = {
  Search: Movie[], 
  totalResults: string, 
  Response: string,
}

export const movieStore = defineStore('counter', {
  state: () => ({
     ApiResponseRes: {} as ApiResponse, 
     Movies: [] as Movie[], 
     Movie: {} as MovieFull, 
     isLoading: true as boolean,
     pages: 1 as number,
     query: '' as string,
     pagesTotal: 0 as number,
     oldQuery: "" as string
  }),

  actions: {
    async setMovies(query: string) {
      this.isLoading = true;
      this.query = query
      const newQuery = query.replace(/ /g, '+');

      if(this.oldQuery != newQuery){
        this.oldQuery = newQuery
        this.pages = 1
      }
      
      this.ApiResponseRes = await axios.get<ApiResponse>(`https://www.omdbapi.com/?s=${newQuery}&page=${this.pages}&apikey=33bd54eb`)
        .then(response => response.data);
      this.Movies = await this.ApiResponseRes.Search;
      this.isLoading = false;
      this.pagesTotal = await Math.ceil(+(this.ApiResponseRes.totalResults)/10)
    },

    async setMovie(id: string | string[]) {
      this.isLoading = true;
      
      this.Movie = await axios.get<MovieFull>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=33bd54eb`)
        .then(response => response.data);
      this.isLoading = false;
    },

    async pageIncrement(){
      if(this.pages < this.pagesTotal) {
        this.pages += 1;
        await this.setMovies(this.query)
      }
    },

    async pageDecrement(){
      if(this.pages > 1){
        this.pages -= 1; 
        await this.setMovies(this.query)
      }
    }
  },
})

