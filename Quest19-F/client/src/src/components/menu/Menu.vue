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
import store from '@/store';
import { saveFile, saveAsFile, addNewFile } from '@/utils/api';

interface fetchTempType {
  method: string;
  fileName: string;
  content?: string[];
}

export default defineComponent({
  name: 'Menu',
  components: { NewFileBtn, SaveFileBtn, SaveAsFileBtn },
  computed: {
    isOnline() {
      return store.state.isOnline;
    },
  },
  watch: {
    isOnline() {
      if (this.isOnline) {
        const storageData = localStorage.getItem('fetchTemp');
        if (storageData) {
          const tempData = JSON.parse(storageData);

          tempData.forEach(async (item: fetchTempType) => {
            switch (item.method) {
              case 'newFile':
                await addNewFile(item.fileName);
                break;
              case 'saveFile':
                if (item.content) await saveFile(item.fileName, item.content);
                break;
              case 'saveAsFile':
                if (item.content) await saveAsFile(item.fileName, item.content);
                break;
            }
          });

          localStorage.removeItem('fetchTemp');
        }
      }
    },
  },
});
</script>

<style scoped>
.l-menu-container {
  width: 100%;
  height: 60px;
  display: flex;
}
</style>
