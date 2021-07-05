<template>
  <div ref="editor" class="l-editor-container t-editor-container" contentEditable="true" @keyup="onKeyUp">
    <Line v-for="(text, index) in content" :key="index" contentEditable="true">{{ text }}</Line>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Line from './line/Line.vue';

export default defineComponent({
  name: 'Editor',
  components: { Line },
  computed: {
    content() {
      // return this.$store.state.content;
      return 1;
    },
  },
});
</script>

<style scoped>
.l-editor-container {
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-flow: column;
}

.t-editor-container:focus {
  outline: none;
}
</style>
