<template>
  <div class="l-title-container">
    <h2>{{ text }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Title',
  props: {
    text: String,
  },
});
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
