<script setup lang="ts">
import { onMounted, ref } from '@vue/runtime-dom';
import sun from '../assets/sun.svg'
import rain from '../assets/rain.svg'
import snow from '../assets/snow.svg'
import cloud from '../assets/cloud.svg'

const icon = ref<string | undefined>("sun");
const iconArray = [`sun`, `rain`, `snow`, `cloud`];

const path = `../assets/`
const format = `.svg`

const props = defineProps<{
    weather: string,
    size: number,
}>()

const FindIcon = ((weather: string) =>{
   icon.value = iconArray.find(arr => weather.toLowerCase().includes(arr))
})

onMounted(() => {
    FindIcon(props.weather);
})


</script>

<template>
<img v-if="icon == 'snow'" :src="snow" :height="props.size" :width="props.size"/>
<img v-else-if="icon == 'cloud'" :src="cloud" :height="props.size" :width="props.size"/>
<img v-else-if="icon == 'rain'" :src="rain" :height="props.size" :width="props.size"/>
<img v-else="icon == 'sun'" :src="sun" :height="props.size" :width="props.size"/>
</template>

<style scoped>
</style>
