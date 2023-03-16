import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export type Weather = { 
  coord: { 
    lon: number, 
    lat: number 
  }, 
  weather: [{ 
    id: number, 
    main: string, 
    description: string, 
    icon: string 
  }],
  base: string, 
  main: { 
    temp: number, 
    feels_like: number, 
    temp_min: number, 
    temp_max: number, 
    pressure: number, 
    humidity: number, 
    sea_level: number, 
    grnd_level: number 
  }, 
  visibility: number, 
  wind: { 
    speed: number, 
    deg: number, 
    gust: number 
  }, 
  clouds: { all: number }, 
  dt: number, 
  sys:{ 
    type: number, 
    id: number, 
    country: string, 
    sunrise: number, 
    sunset: number }, 
  timezone: number, 
  id: number, 
  name: string, 
  cod: number 
}


export const useWeatherStore = defineStore('counter', () => {
  const weather = ref<Weather | null>(null)
  const isLoading = ref(false);

  async function getData(city: string) {
    isLoading.value = true;

    weather.value = await axios
      .get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d5054a23b844e748288c991ccba68a0d`)
      .then(response => response.data);

    isLoading.value = false;
  }

  return { weather, getData,isLoading }
})
2