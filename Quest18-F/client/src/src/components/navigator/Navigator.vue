<template>
  <div class="l-navigator-container">
    <FileBtn
      v-for="(name, index) in fileList"
      :key="index"
      :button-index="index"
      :name="name"
      @setSelected="setSelected"
    >
    </FileBtn>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileBtn from './buttons/FileBtn.vue';
import { getFileList } from '@/utils/api';
import store from '@/store';

interface apiTypes {
  data: {
    info: {
      list: string[];
      lastFile: string;
    };
  };
}

export default defineComponent({
  name: 'Navigator',
  components: { FileBtn },
  computed: {
    fileList() {
      return store.state.fileList;
    },
  },

  async mounted() {
    try {
      const response = await getFileList<apiTypes>();
      const fileList = response.data.info.list;
      const lastFileName = response.data.info.lastFile;

      store.commit('updateFileList', fileList);
      store.commit('updateSelectedFileName', lastFileName);
      store.commit('updateSelectedIndex', this.fileList.indexOf(lastFileName));
    } catch (err) {
      this.$router.push('/login');
    }
  },
  methods: {
    setSelected(newIndex: number, newFileName: string) {
      store.commit('updateSelectedIndex', newIndex);
      store.commit('updateSelectedFileName', newFileName);
    },
  },
});
</script>

<style scoped>
.l-navigator-container {
  width: 100%;
  height: 60px;
  display: flex;
  overflow: auto;
  margin-top: 1rem;
}
</style>
