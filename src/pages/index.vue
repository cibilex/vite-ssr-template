<script setup lang="ts">
import { isDark } from "../composables/darkOperation";
import { useStore } from "../store";
const store = useStore();
const msg = computed(() => store.msg);
const count = ref(0);
</script>
<template>
  <div
    class="grid justify-items-center content-around font-mono h-1/2 font-bold"
  >
    <h1 class="text-3xl <lg:text-xl">{{ msg }}</h1>
    <button
      title="click me"
      @click="count++"
      class="border-1px border-opacity-30 border-dashed btn-hover border-black px-5 py-1 rounded-4px"
      :class="{ 'border-light-300': isDark }"
    >
      {{ count }}
    </button>
    <div class="space-x-5">
      <Buttons></Buttons>
    </div>
  </div>
</template>
