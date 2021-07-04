<template>
  <div class="l-menu-container">
    <NewFileBtn />
    <SaveFileBtn />
    <SaveAsFileBtn />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NewFileBtn from './buttons/NewFileBtn.vue';
import SaveFileBtn from './buttons/SaveFileBtn.vue';
import SaveAsFileBtn from './buttons/SaveAsFileBtn.vue';

@Options({
  components: { NewFileBtn, SaveFileBtn, SaveAsFileBtn },
})
export default class Menu extends Vue {}
</script>

<style scoped>
.l-menu-container {
  width: 100%;
  height: 60px;
  display: flex;
}
</style>
