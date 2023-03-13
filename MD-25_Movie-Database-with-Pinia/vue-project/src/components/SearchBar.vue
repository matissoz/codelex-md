<script lang="ts">
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value: string) {
        this.$emit('update:modelValue', value)
      }
    }
  },
}
</script>

<template>
  <div class="searchbar">  
    <input v-model="value" type="text" placeholder="Harry Potter"/>
  </div>
</template>

<style>
</style>