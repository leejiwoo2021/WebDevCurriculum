<template>
  <div class="l-hashViewer-container">
    <div class="l-hash-container">Hash : {{jsHashValue}}</div>
    <div class="l-hash-container">Js : {{jsTime}} &nbsp; Rust : {{rsTime}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import sha256 from 'crypto-js/sha256';

export default defineComponent({
  name: 'hashViewer',
  data() {
    return {
      jsTime: 0,
      rsTime: 0
    }
  },
  computed: {
    fileContent() :string[] {
      return store.state.tempContents[store.state.selectedFileName];
    },
    contentString():string{
      if(this.fileContent)
        return  this.fileContent.reduce((prev, curr) => { return curr + prev });
      return '';
    },
    jsHashValue():string{
      const startTime = new Date().getTime();
      const hash = sha256(this.contentString).toString();
      const endTime = new Date().getTime();

      this.jsTime = (endTime - startTime)/1000;
      return hash;
    },
  },
});
</script>

<style scoped>
.l-hashViewer-container {
  width: 100%;
  height: 5rem;
  position: absolute;
  bottom: 0;
  background-color: beige;
  display: flex;
  flex-flow: column;
}

.l-hash-container {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
