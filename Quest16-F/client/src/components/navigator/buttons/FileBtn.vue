<template>
  <button class="l-fileBtn-container t-fileBtn-container">{{ fileName }}</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    fileName: String,
  },
})
export default class FileBtn extends Vue {
  fileName!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l-fileBtn-container {
  height: 50px;
  padding: 10px 20px 10px 20px;
  margin: 0 1rem 0 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}

.t-fileBtn-container {
  border: none;
  border-radius: 50px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
}

.t-fileBtn-container:hover {
  cursor: pointer;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
}

.t-fileBtn-container:active {
  background: white;
}
</style>
