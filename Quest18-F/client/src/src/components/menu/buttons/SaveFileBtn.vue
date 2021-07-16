<template>
  <button class="l-saveFileBtn-container t-saveFileBtn-container" @click="clickHandler">저장하기</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import { saveFile } from '@/utils/api';

interface fetchTempType {
  method: string;
  fileName: string;
  content?: string[];
}

export default defineComponent({
  name: 'SaveFileBtn',
  computed: {
    isOnline() {
      return store.state.isOnline;
    },
  },
  methods: {
    async clickHandler() {
      const fileName = store.state.selectedFileName;
      const newContent = store.state.tempContents[fileName];
      try {
        if (this.isOnline) await saveFile(fileName, newContent);
        else {
          const storageData = localStorage.getItem('fetchTemp');
          const tempData: fetchTempType[] = storageData ? JSON.parse(storageData) : [];

          tempData.push({ method: 'saveFile', fileName, content: newContent });

          localStorage.setItem('fetchTemp', JSON.stringify(tempData));
        }
        store.commit('updateOriginContents', { fileName, newContent });
      } catch (err) {
        this.$router.push('/login');
        console.log(err);
      }
    },
  },
});
</script>

<style scoped>
.l-saveFileBtn-container {
  height: 100%;
  padding: 10px 20px 10px 20px;
  margin-left: 10px;
  margin-right: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.t-saveFileBtn-container {
  border: none;
  border-radius: 50px;
  background: linear-gradient(145deg, #4c5aff, #404ce6);
  box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
  color: white;
}

.t-saveFileBtn-container:hover {
  cursor: pointer;
  background: linear-gradient(145deg, #3b2a2a, #463232);
}

.t-saveFileBtn-container:focus {
  outline: none;
}

.t-saveFileBtn-container:active {
  background: black;
}
</style>
