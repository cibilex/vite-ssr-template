<template>
  <h1 class="text-xl space-y-3 text-center">
    <carbon-undefined class="text-3xl"></carbon-undefined>
    <p>404 - NOT FOUND</p>
    <home-btn></home-btn>
  </h1>
</template>

<script setup lang='ts'>
import { useHead } from "@vueuse/head";


useHead({
  title:"page 404 title",
  meta:[
    {
      name:"description",
      content:"page 404 description"
    }
  ]
})
</script>
