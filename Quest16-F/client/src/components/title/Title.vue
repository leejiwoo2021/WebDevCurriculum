<template>
  <div class="l-title-container">
    <h2>TextEditor made by Vue</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Title extends Vue {}
</script>

<style scoped>
.l-title-container {
  width: 100%;
  height: 100px;
}

h2 {
  font-weight: bold;
  font-size: 2rem;
}
</style>
