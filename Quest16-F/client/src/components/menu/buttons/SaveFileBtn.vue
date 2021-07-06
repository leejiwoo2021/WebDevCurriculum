<template>
  <button @click="clickHandler" class="l-saveFileBtn-container t-saveFileBtn-container">저장하기</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../../../store';
import { useAxios } from '../../../utils/api';

export default defineComponent({
  name: 'SaveFileBtn',
  methods: {
    async clickHandler() {
      const fileName = store.state.selectedFileName;
      const newContent = store.state.tempContents[fileName];
      try {
        await useAxios({
          query: `
          mutation {
            updateFile(name: "${fileName}" content: ${JSON.stringify(newContent)}){
              msg
            }
          }
        `,
        });
        store.commit('updateOriginContents', { fileName, newContent });
      } catch (err) {
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
