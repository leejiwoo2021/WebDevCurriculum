<template>
  <div class="l-main-container">
    <Title />
    <Menu />
    <Navigator />
    <Editor />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Title from './title/Title.vue';
import Menu from './menu/Menu.vue';
import Navigator from './navigator/Navigator.vue';
import Editor from './editor/Editor.vue';

@Options({
  components: { Title, Menu, Navigator, Editor },
})
export default class Main extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l-main-container {
  width: 900px;
  height: 100%;
}
</style>
