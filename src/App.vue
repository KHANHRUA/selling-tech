<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}
body {
  overflow-x: hidden;
}

input:focus {
  outline: none;
}

li {
  list-style: none;
}
</style>
