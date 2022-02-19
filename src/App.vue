
<script setup lang='ts'>
import { useHead } from "@vueuse/head";

    useHead({
        title:"default title",
        meta:[
            {
                name:"description",
                content:"default description"
            }
        ]
    })

</script>


<template>
  <router-view v-slot="{ Component, route }">
    <!-- <transition name="slide"> -->
    <!-- for dark mode -->
    <div
      class="dark:(bg-dark-900 text-light-500) pt-10 bg-light-500 text-dark-900 h-[100vh]"
    >
      <component :is="Component" :key="route" />
    </div>
    <!-- </transition> -->
  </router-view>
</template>

<style></style>
