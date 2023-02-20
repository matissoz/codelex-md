import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { AnimalType } from './types'

// Define a service using a base URL and expected endpoints
export const animalApi = createApi({
  reducerPath: 'animalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  tagTypes: ['animal'],
  endpoints: (builder) => ({
    getAllAnimals: builder.query<AnimalType, void>({
      query: () => `all-animals`,
      providesTags: ['animal']
    }),
    deleteAnimal: builder.mutation({
      query: (id) => ({
        url: `delete-animal/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['animal']
    }),
    addAnimal: builder.mutation({
      query: ({name, image, breed}) => ({
        url: `add-animal`,
        method: 'POST',
        body: {name, image, breed}
      }),
      invalidatesTags: ['animal']
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllAnimalsQuery, useDeleteAnimalMutation, useAddAnimalMutation} = animalApi