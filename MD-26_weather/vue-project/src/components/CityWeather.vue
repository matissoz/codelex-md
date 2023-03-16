<script setup lang="ts">
import type { Weather } from '@/stores/weather';
import { ref } from '@vue/runtime-dom';
import Icon from './WeatherIcon.vue';

const props = defineProps<{
  weather: Weather
}>()

const KelvintoFarenheit = ((temp:number) => {
  return (temp-273.15)*1.8+32
})

const CelsiumtoFarenheit = ((temp: number) => {
  return (temp*1.8)+32
})

const FarenheitoCelsium = ((temp: number) => {
  return (temp-32)/1.8
})

const symbol = ref("°F")
const temp = ref(KelvintoFarenheit(props.weather.main.temp))
const feelsLike = ref(KelvintoFarenheit(props.weather.main.feels_like))

const dateBuilder = (timezone: number) => {
   const nowInLocalTime = Date.now()  + 1000 * (timezone / 3600);
   const millitime = new Date(nowInLocalTime);

   let day = millitime.toLocaleString("en-US", {weekday: "long"});
   let month = millitime.toLocaleString("en-US", {month: "long"}); 
   let date = millitime.toLocaleString("en-US", {day: "numeric"});
   let year = millitime.toLocaleString("en-US", {year: "numeric"}); 
   let hours = millitime.toLocaleString("en-US", {hour: "numeric"}); 
   let minutes = millitime.toLocaleString("en-US", {minute: "numeric"});
   return `${day} ${date} ${month} ${year} ${hours}:${minutes}`;
}

const log = () => {
  if(symbol.value == "°F"){
    symbol.value = "°C"
    temp.value = FarenheitoCelsium(temp.value)
    feelsLike.value = FarenheitoCelsium(feelsLike.value)
  }else{
    symbol.value = "°F"
    temp.value = CelsiumtoFarenheit(temp.value)
    feelsLike.value = CelsiumtoFarenheit(feelsLike.value )
  }
}


</script>

<template>
  <div class="card">
    <div class="card__left">
      <h2> {{ weather.name }} | {{ weather.sys.country }}</h2>
      <Icon :weather="weather.weather[0].main" :size=100 />
      <span>{{ weather.weather[0].description.toUpperCase() }}</span>
      <span>Temp: {{ temp.toFixed(1) }} {{ symbol }}</span>
    </div>
    <div class="card__right">
      <span> Feels like: {{ feelsLike.toFixed(1) }} {{ symbol }}</span>
      <span>Humidity: {{ weather.main.humidity }}%</span>
      <span>{{ weather.main.temp }}</span>
      <span>{{ dateBuilder(props.weather.timezone) }}</span>
      <button v-on:click="log()">SWITCH TO {{ symbol == "°F"? "°C" :  "°F"  }}</button>
    </div>
  </div>
</template>

<style scoped>
.card{
  padding: 1rem 3rem;
  border: 0.1rem solid white;
  display: flex;
  gap: 5rem;
  align-items: center;
}
.card__left{
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 1rem;
}
.card__right{
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 1rem;
}

button{
  background-color: white;
  border: 0.2px solid black;
  cursor: pointer;
  transition: opacity 0.2s;
}

button:hover{
  opacity: 0.7;
}
</style>
