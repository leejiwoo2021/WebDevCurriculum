<template>
  <div class="l-line-container">{{ text }}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    text: String,
  },
})
export default class Line extends Vue {
  text!: string;
}
</script>

<style scoped>
.l-line-container {
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  margin-top: 0.5rem;
}
</style>
