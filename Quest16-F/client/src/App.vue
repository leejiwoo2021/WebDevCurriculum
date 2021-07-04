<template>
  <div class="l-main-container"><Main /></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Main from './components/Main.vue';

@Options({
  components: {
    Main,
  },
})
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

.l-main-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
