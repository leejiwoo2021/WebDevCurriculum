import { createStore } from 'vuex';

export default createStore({
  state: { content: ['1234', '5678'] },
  mutations: {
    updateMessage(state, message) {
      state.content = message;
    },
  },
  actions: {},
  modules: {},
});
