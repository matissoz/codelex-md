<script setup lang="ts">
import citiesJSON from '../stores/somecities.json';
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <input 
      class="searchbar" 
      :value="modelValue" type="text" 
      @input="$emit('update:modelValue',($event.target as HTMLInputElement).value)"
      placeholder="Latvian City" 
    />
    
</template>

<style>
.searchbar {
  height: 2rem;
}
</style>
