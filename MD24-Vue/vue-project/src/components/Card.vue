<script setup lang="ts">
import type { FavouriteJokeType, JokeType } from '@/Api/Api'

defineProps<{
  data: JokeType | FavouriteJokeType
}>()
</script>

<template>
  <div class="card">
    <p>{{ data.joke }}</p>
  </div>
</template>

<style scoped>
.card {
  border: 0.2rem solid black;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
}

</style>
