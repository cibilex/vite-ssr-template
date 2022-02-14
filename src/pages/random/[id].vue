<template>
  <div class="space-y-3">
    <h1 class="text-center">Welcome {{ id }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps(["id"]);
</script>
<style scoped lang="sass"></style>
