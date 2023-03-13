<script lang="ts">
import { movieStore } from '@/stores/store'
import Spinner from "../components/Loading.vue"

export default{
    components: {
    Spinner
  },
    data() {
        return {
        store: movieStore(),
        }
    },
    async mounted() {   
        await this.store.setMovie(this.$route.params.id)
    },

}

</script>

<template> 
    <div>
        <div v-if="store.isLoading">
            <Spinner/>
        </div>
        <div v-else class="display">
            <div>
                <img :src="store.Movie.Poster" alt="">
            </div>
            <div>
                <h1>{{store.Movie.Title}}</h1>
                <p>Dircetor: {{store.Movie.Director}}</p>
                <p>Actors: {{store.Movie.Actors}}</p>
                <p>Released: {{ store.Movie.Released }}</p>
                <div>
                    <h3>Ratings:</h3>
                     <span v-for="data in store.Movie.Ratings">
                        <p>{{data.Source}}: {{ data.Value }}</p>
                     </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.display{
    display: flex;
    justify-content: center;
    padding: 1rem;
    border: 0.2rem solid black;
    background-color: white;
}

</style>