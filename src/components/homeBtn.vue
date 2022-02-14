<script setup lang="ts">
import { isDark } from "../composables/darkOperation";
</script>
<template>
  <router-link
    to="/"
    class="rounded-3px bg-gray-300 btn-hover px-3 py-1 inline-block"
    :class="isDark ? 'bg-dark-300' : 'bg-gray-300'"
    >Back Home</router-link
  >
</template>
