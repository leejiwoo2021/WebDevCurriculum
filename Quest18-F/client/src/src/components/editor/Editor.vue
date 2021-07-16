<template>
  <div ref="editor" class="l-editor-container t-editor-container" contentEditable="true" @keyup="keyUpHandler">
    <Line v-for="(text, index) in content" :key="index" content-editable="true" :text="text"></Line>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Line from './line/Line.vue';
import store from '@/store';
import { getFileInfo } from '@/utils/api';

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
  data() {
    return {
      content: [''],
    };
  },
  computed: {
    fileName(): string {
      return store.state.selectedFileName;
    },
  },
  watch: {
    fileName(newFileName: string) {
      const tempContent = store.state.tempContents[newFileName];
      if (!tempContent)
        getFileInfo<apiTypes>(newFileName)
          .then((res) => {
            const fileName = res.data.file.name;
            const newContent = res.data.file.content;
            this.content = res.data.file.content;
            store.commit('updateTempContents', { fileName, newContent });
            store.commit('updateOriginContents', { fileName, newContent });
          })
          .catch(() => {
            this.$router.push('/login');
          });
      else this.content = store.state.tempContents[newFileName];
    },
  },
  methods: {
    keyUpHandler() {
      const newContent = [...this.$el.children].map((line) => line.innerHTML);
      const fileName = this.fileName;
      store.commit('updateTempContents', { fileName, newContent });
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
