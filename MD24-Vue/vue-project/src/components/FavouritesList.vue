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
  //  this.store.getFavourites()
  // },

})
</script>

<template>
  <div class="list">
    <h1>FAVOURITE JOKES</h1>
    <button @click="store.getFavourites()">
      Load Favourites
    </button>
    <p>click on joke to remove from favourites</p>
    <div 
      v-for="data in store.favourites" 
      @click="store.removeFromFavorite(data._id!)"
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