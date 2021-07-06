<template>
  <div class="l-navigator-container">
    <FileBtn
      v-for="(name, index) in fileList"
      :key="index"
      :buttonIndex="index"
      :selectedIndex="selectedIndex"
      @setSelected="setSelected"
      >{{ name }}
    </FileBtn>
  </div>
</template>

//
<script lang="ts">
import { defineComponent } from 'vue';
import FileBtn from './buttons/FileBtn.vue';
import { useAxios } from '../../utils/api';
import store from '../../store';

interface apiTypes {
  data: {
    info: {
      list: string[];
      lastFile: string;
    };
  };
}

interface dataTypes {
  fileList: string[];
}

export default defineComponent({
  name: 'Navigator',
  components: { FileBtn },
  methods: {
    async setSelected(newIndex: number, newFileName: string) {
      store.commit('updateSelectedIndex', newIndex);
      store.commit('updateSelectedFileName', newFileName);
    },
  },
  computed: {
    selectedIndex() {
      return store.state.selectedIndex;
    },
  },
  data() {
    return {
      fileList: [],
    } as dataTypes;
  },
  async mounted(): Promise<void> {
    try {
      const response = await useAxios<apiTypes>({
        query: `
          query {
            info {
              list
              lastFile
            }
          }
        `,
      });
      this.fileList = response.data.info.list;
      const lastFileName = response.data.info.lastFile;

      store.commit('updateSelectedFileName', lastFileName);
      store.commit('updateSelectedIndex', this.fileList.indexOf(lastFileName));
    } catch (err) {
      this.$router.push({ path: '/login' });
    }
  },
});
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
