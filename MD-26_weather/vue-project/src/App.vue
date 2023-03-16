<script setup lang="ts">
import { useWeatherStore } from '@/stores/weather';
import { onMounted, ref } from 'vue';
import CityWeather from './components/CityWeather.vue'
import Loading from './components/Loading.vue'
import SearchBar from './components/SearchBar.vue'
import Error from './components/Error.vue'
import citiesJSON from './stores/somecities.json';

const store = useWeatherStore()
const searchQuery = ref("")

onMounted(() => {
  store.getData("Jelgava");
  citiesJSON.find(function (city){
      console.log(city.name);
  }); 
})

const getCity = ((cityname: string) => {
  store.getData(cityname);
  searchQuery.value = "";
})
const filteredList = (() => {
  return citiesJSON.filter((city) =>
    city.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
})

</script>

<template>
  <div class="app">
    <header>

    </header>
    <main>
      <div class="search">
        <SearchBar v-model="searchQuery" />
        <div class="search__result" v-if="searchQuery" v-for="city in filteredList()" :key="city.id" 
        @click="getCity(city.name)"
        >
          <p>{{ city.name }}</p>
        </div>
        <div v-if="searchQuery&&!filteredList().length">
          <p>No results found!</p>
        </div>
      </div>
      <div v-if="store.isLoading">
        <Loading />
      </div>
      <div v-else-if="!store.weather">
        <Error/>
      </div>
      <div v-else>
        <CityWeather :weather="store.weather" />
      </div>
    </main>
    <footer>

    </footer>
  </div>
</template>

<style>
.search{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.search__result{
  border: 0.1rem solid black;
  background-color:blanchedalmond;
  font-weight: bold;
  padding: 0rem 1rem;
  transition: background-color 0.2s;
}
.search__result:hover{
  cursor: pointer;
  background-color: aliceblue;
}

.search__result + .search__result {
  margin-top: 0.1rem
}

</style>