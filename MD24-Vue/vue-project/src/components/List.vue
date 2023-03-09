<script setup lang="ts">
import { store } from '@/Api/Api'
import { defineComponent } from 'vue'
import Card from './Card.vue'

defineComponent({
  
  data() {
    return {
      store
    }
  },

  // created() {
  //   this.store.getData()
  // },  
})
</script>

<template>
  <div class="list">
    <h1>NEW JOKES</h1>
    <button @click="store.getData()">
      Load Jokes
    </button>
    <p>click on joke to add to favourites</p>
    <div 
      v-for="data in store.data" 
      @click="store.addToFavorite(data.joke, data.category)"
    >
      <Card :data="data" />
    </div>
  </div>
</template>

<style>
.list {
  background-color: white;
  color: black;
  text-align: center;
}

</style>