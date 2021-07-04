<template>
  <div class="l-navigator-container">
    <FileBtn fileName="sample" />
    <FileBtn fileName="sample2" />
    <FileBtn fileName="sample3" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import FileBtn from './buttons/FileBtn.vue';

@Options({
  components: { FileBtn },
})
export default class Navigator extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l-navigator-container {
  width: 100%;
  height: 60px;
  display: flex;
  overflow: auto;
  margin-top: 1rem;
}
</style>
