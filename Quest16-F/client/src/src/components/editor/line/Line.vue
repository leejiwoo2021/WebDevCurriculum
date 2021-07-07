<template>
  <div class="l-line-container">{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Line',
  props: { text: String },
});
</script>

<style scoped>
.l-line-container {
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  margin-top: 0.5rem;
}

.l-line-container:empty::before {
  content: 'write your text';
  color: gray;
}
</style>
