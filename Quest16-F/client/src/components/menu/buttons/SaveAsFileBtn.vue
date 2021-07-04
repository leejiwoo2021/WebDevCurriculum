<template>
  <button class="l-saveAsFileBtn-container t-saveAsFileBtn-container">다른 이름으로 저장하기</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class SaveAsFileBtn extends Vue {}
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
