<template>
  <button class="l-newFileBtn-container t-newFileBtn-container">새 파일 만들기</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class NewFileBtn extends Vue {}
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
