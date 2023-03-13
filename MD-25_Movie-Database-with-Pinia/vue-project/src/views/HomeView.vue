<script lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import { movieStore } from '@/stores/store'
import Card from "../components/Card.vue"
import Spinner from "../components/Loading.vue"

export default{
  components: {
    Card,
    SearchBar,
    Spinner
  },

  data() {
    return {
      store: movieStore(),
      searchQuery: "Harry Potter",
    }
  },

   async mounted() {
    this.store.setMovies(this.searchQuery)
  }, 

  watch: {
    async searchQuery(){   
      await this.store.setMovies(this.searchQuery)
    }
  }

}

</script>

<template> 
  <div class="homeview">
    <SearchBar v-model="searchQuery"/>
    <div v-if="store.isLoading">
        <Spinner/>
    </div>
    <div v-else-if="!searchQuery">
      Let's search for a movie.
    </div>
    <div v-else-if="!store.Movies">
      Nothing was found.
    </div>
    <div v-else class="card__list">
      <Card 
        v-for="data in store.Movies" 
        :data = 'data'
        @click="this.$router.push(`/movie/${data.imdbID}`)"
      />
    </div>
    <div v-if="store.pagesTotal > 1 && !store.isLoading">
      <button 
        @click="store.pageDecrement()"
        :disabled="store.pages <= 1"
      >
        &lt;
      </button>
      <button 
        @click="store.pageIncrement()"
        :disabled="store.pages >= store.pagesTotal"
      >
        >
      </button>
    </div>
  </div>
</template>

<style>
.homeview{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card__list{
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
} 

button:hover{
  cursor: pointer;
}
</style>