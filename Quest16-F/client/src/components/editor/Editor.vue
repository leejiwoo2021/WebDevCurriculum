<template>
  <div class="l-editor-container t-editor-container" contentEditable="true">
    <Line text="sample text" />
    <Line text="sample2 text" />
    <Line text="sample3 text" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Line from './line/Line.vue';

@Options({
  components: { Line },
})
export default class Editor extends Vue {}
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
