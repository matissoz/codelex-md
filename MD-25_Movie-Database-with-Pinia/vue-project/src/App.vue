<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
      <div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
    <footer>
    </footer>
</template>

<style scoped>
nav{
  display: flex;
  gap: 1rem;
  justify-content: center;
}
</style>
