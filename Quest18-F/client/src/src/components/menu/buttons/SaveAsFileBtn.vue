<template>
  <button @click="clickHandler" class="l-saveAsFileBtn-container t-saveAsFileBtn-container">
    다른 이름으로 저장하기
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import { saveAsFile } from '@/utils/api';

export default defineComponent({
  name: 'SaveAsFileBtn',
  methods: {
    async clickHandler() {
      const fileName = prompt('파일 이름을 입력하세요');
      const fileNameList = store.state.fileList;
      const selectedName = store.state.selectedFileName;
      if (!fileName) {
        alert('올바른 이름을 입력해주세요');
        return;
      }
      if (fileNameList.indexOf(fileName) !== -1) {
        alert('중복된 이름이 존재합니다');
        return;
      }
      const newContents = store.state.tempContents[selectedName];

      try {
        await saveAsFile(fileName, newContents);
        store.commit('addNewFileList', fileName);
      } catch (err) {
        this.$router.push('/login');
        console.log(err);
      }
    },
  },
});
</script>

<style scoped>
.l-saveAsFileBtn-container {
  height: 100%;
  padding: 10px 20px 10px 20px;
  margin-left: 10px;
  margin-right: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.t-saveAsFileBtn-container {
  border: none;
  border-radius: 50px;
  background: linear-gradient(145deg, #4c5aff, #404ce6);
  box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
  color: white;
}

.t-saveAsFileBtn-container:hover {
  cursor: pointer;
  background: linear-gradient(145deg, #3b2a2a, #463232);
}

.t-saveAsFileBtn-container:focus {
  outline: none;
}

.t-saveAsFileBtn-container:active {
  background: black;
}
</style>
