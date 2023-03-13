<script lang="ts">
import type { Movie } from '@/stores/store'
import type { PropType } from 'vue';


export default{
    props: {
        data: {
            type: Object as PropType<Movie>,
            required: true
        }
    }
}

</script>

<template>
  <div class="card"> 
    <img :src="data.Poster" alt="" width='186' height='268'>
    <h2>{{ data.Title }}</h2>
  </div>
</template>

<style>
    .card {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border: 0.2rem solid black;
        align-items: center;
        background-color: rgb(255, 255, 255);
    }

    .card:hover{
        cursor: pointer;
    }
</style>