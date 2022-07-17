<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
   <div class="home-wrapper">
        Home
   </div>
</template>

<style scoped>
@import "../assets/scss/default.scss";
</style>
