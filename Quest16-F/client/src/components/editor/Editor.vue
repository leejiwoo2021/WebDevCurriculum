<template>
  <div ref="editor" class="l-editor-container t-editor-container" contentEditable="true" @keyup="onKeyUp">
    <Line v-for="(text, index) in content" :key="index" contentEditable="true">{{ fileName }}</Line>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Line from './line/Line.vue';
import store from '../../store';
import { useAxios } from '../../utils/api';

interface apiTypes {
  data: {
    file: {
      name: string;
      content: string[];
    };
  };
}

export default defineComponent({
  name: 'Editor',
  components: { Line },
  computed: {
    fileName(): string {
      return store.state.selectedFileName;
    },
    content(): string[] {
      return store.state.tempContents[this.fileName];
    },
  },
  watch: {
    fileName(newFileName) {
      const tempContent = store.state.tempContents[newFileName];
      if (!tempContent)
        useAxios<apiTypes>({
          query: `
          query {
            file(name: "${newFileName}") {
              name
              content
            }
          }
        `,
        })
          .then((res) => {
            const fileName = res.data.file.name;
            const newContent = res.data.file.content;
            store.commit('updateTempContents', { fileName, newContent });
            store.commit('updateOriginContents', { fileName, newContent });
          })
          .catch(() => {
            this.$router.push({ path: '/login' });
          });
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
