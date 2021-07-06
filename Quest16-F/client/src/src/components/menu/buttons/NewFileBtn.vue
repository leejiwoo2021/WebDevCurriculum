<template>
  <button @click="clickHandler" class="l-newFileBtn-container t-newFileBtn-container">새 파일 만들기</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../../../store';
import { addNewFile } from '../../../utils/api';

export default defineComponent({
  name: 'NewFileBtn',
  methods: {
    async clickHandler() {
      const fileName = prompt('파일 이름을 입력하세요');

      const fileNameList = store.state.fileList;
      if (!fileName) {
        alert('올바른 이름을 입력해주세요');
        return;
      }
      if (fileNameList.indexOf(fileName) !== -1) {
        alert('중복된 이름이 존재합니다');
        return;
      }

      try {
        await addNewFile(fileName);
        store.commit('addNewFileList', fileName);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
</script>

<style scoped>
.l-newFileBtn-container {
  height: 100%;
  padding: 10px 20px 10px 20px;
  margin-left: 10px;
  margin-right: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.t-newFileBtn-container {
  border: none;
  border-radius: 50px;
  background: linear-gradient(145deg, #4c5aff, #404ce6);
  box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
  color: white;
}

.t-newFileBtn-container:hover {
  cursor: pointer;
  background: linear-gradient(145deg, #3b2a2a, #463232);
}

.t-newFileBtn-container:focus {
  outline: none;
}

.t-newFileBtn-container:active {
  background: black;
}
</style>
