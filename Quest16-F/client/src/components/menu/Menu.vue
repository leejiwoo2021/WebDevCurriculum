<template>
  <div class="l-menu-container">
    <NewFileBtn />
    <SaveFileBtn />
    <SaveAsFileBtn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NewFileBtn from './buttons/NewFileBtn.vue';
import SaveFileBtn from './buttons/SaveFileBtn.vue';
import SaveAsFileBtn from './buttons/SaveAsFileBtn.vue';

export default defineComponent({
  name: 'Menu',
  components: { NewFileBtn, SaveFileBtn, SaveAsFileBtn },
});
</script>

<style scoped>
.l-menu-container {
  width: 100%;
  height: 60px;
  display: flex;
}
</style>
