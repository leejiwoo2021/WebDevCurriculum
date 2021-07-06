import { createStore } from 'vuex';

interface contentsType {
  [key: string]: string[];
}
export default createStore({
  state: {
    selectedIndex: -1,
    selectedFileName: '',
    originContents: {} as contentsType,
    tempContents: {} as contentsType,
  },
  mutations: {
    updateSelectedIndex(state, newIndex) {
      state.selectedIndex = newIndex;
    },

    updateSelectedFileName(state, fileName) {
      state.selectedFileName = fileName;
    },

    updateTempContents(state, { fileName, newContent }) {
      state.tempContents[fileName] = newContent;
    },

    updateOriginContents(state, { fileName, newContent }) {
      state.originContents[fileName] = newContent;
    },
  },
  actions: {},
  modules: {},
});
