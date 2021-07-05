<template>
  <div class="l-main-container">
    <Title text="TextEditor made by vue" />
    <Menu />
    <Navigator />
    <Editor />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Title from '../components/title/Title.vue';
import Menu from '../components/menu/Menu.vue';
import Navigator from '../components/navigator/Navigator.vue';
import Editor from '../components/editor/Editor.vue';

@Options({
  components: { Title, Menu, Navigator, Editor },
  beforeMount() {
    if (!localStorage.getItem('token')) this.$router.push('/login');
  },
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
