<template>
  <div class="l-route-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class App extends Vue {}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  padding: 0;
}

.l-route-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
