<template>
  <div class="l-title-container">
    <h2>{{ text }}</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    text: String,
  },
})
export default class Title extends Vue {
  text!: string;
}
</script>

<style scoped>
.l-title-container {
  width: 100%;
}

h2 {
  font-weight: bold;
  font-size: 2rem;
}
</style>
