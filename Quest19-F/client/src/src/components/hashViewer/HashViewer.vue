<template>
  <div class="l-hashViewer-container">
    <div class="l-hash-container">Hash : {{ hashCode }}</div>
    <div class="l-hash-container">Js : {{ jsTime }}ms &nbsp; Rust : {{ rsTime }}ms</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store';
import sha256 from 'crypto-js/sha256';
import * as wasm from './rustSHA/pkg/rust_sha.js';

export default defineComponent({
  name: 'HashViewer',
  data() {
    return {
      jsTime: 0,
      rsTime: 0,
      hashCode: '',
    };
  },
  computed: {
    fileContent(): string[] {
      return store.state.tempContents[store.state.selectedFileName];
    },
    contentString(): string {
      if (this.fileContent)
        return this.fileContent.reduce((prev, curr) => {
          return curr + prev;
        });
      return '';
    },
  },
  watch: {
    contentString(newStr): void {
      const jsStartTime = performance.now();
      for (let index = 0; index < 5000; index++) sha256(newStr).toString();
      const jsEndTime = performance.now();

      this.jsTime = jsEndTime - jsStartTime;

      const rsStartTime = performance.now();
      for (let index = 0; index < 5000; index++) wasm.sha256(newStr);
      this.hashCode = wasm.sha256(newStr);
      const rsEndTime = performance.now();

      this.rsTime = rsEndTime - rsStartTime;
    },
  },
});
</script>

<style scoped>
.l-hashViewer-container {
  width: 900px;
  height: 5rem;
  position: fixed;
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
