<script setup lang="ts">
import { isDark, toggleDarkOp } from "../composables/darkOperation";

const router = useRouter();
const toggleDark = toggleDarkOp;
const createRandomPath = () => "/random/" + String(Math.random()).split(".")[1];
</script>
<template>
  <a href="https://github.com/antfu/vitesse" target="_blank" class="btn-hover">
    <carbon-star />
  </a>
  <button
    @click="toggleDark()"
    class="btn-hover"
    :title="`go  ${isDark ? 'light' : 'dark'} mode`"
  >
    <carbon-light v-if="isDark" />
    <carbon-light-filled v-else />
  </button>
  <a
    href="https://github.com/cibilex"
    title="to my github page"
    target="_blank"
    class="btn-hover"
  >
    <carbon-logo-github />
  </a>
  <router-link
    :to="createRandomPath()"
    class="btn-hover py-10"
    title="go random page"
  >
    <carbon-shuffle></carbon-shuffle>
  </router-link>
</template>
