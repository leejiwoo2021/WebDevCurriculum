<template>
  <div class="l-main-container">
    <Title text="TextEditor made by vue" />
    <Menu />
    <Navigator />
    <Editor />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Title from '@/components/title/Title.vue';
import Menu from '@/components/menu/Menu.vue';
import Navigator from '@/components/navigator/Navigator.vue';
import Editor from '@/components/editor/Editor.vue';

export default defineComponent({
  name: 'Main',
  components: { Title, Menu, Navigator, Editor },
  beforeMount() {
    if (!localStorage.getItem('token')) this.$router.push('/login');
  },
});
</script>

<style scoped>
.l-main-container {
  width: 900px;
  height: 100%;
}
</style>
