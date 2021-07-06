<template>
  <button
    @click="clickHandler"
    class="l-fileBtn-container t-fileBtn-container"
    :class="{ 't-fileBtn-container-active': isActive }"
  >
    <div class="l-fileBtn-title">
      {{ name }}
    </div>
    <div v-if="isUnSaved" class="l-fileBtn-saveIndicator">⦿</div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from '../../../store';

export default defineComponent({
  name: 'FileBtn',
  props: {
    // selectedIndex: Number,
    buttonIndex: Number,
    name: String,
  },
  methods: {
    clickHandler() {
      if (!this.isActive) {
        this.$emit('setSelected', this.buttonIndex, this.$props.name);
      }
    },
  },
  computed: {
    selectedIndex() {
      return store.state.selectedIndex;
    },
    isActive(): boolean {
      return this.selectedIndex === this.buttonIndex;
    },
    isUnSaved(): boolean {
      if (this.$props.name)
        return !(
          JSON.stringify(store.state.tempContents[this.$props.name]) ===
          JSON.stringify(store.state.originContents[this.$props.name])
        );
      return false;
    },
  },
});
</script>

<style scoped>
.l-fileBtn-container {
  height: 50px;
  padding: 10px 20px 10px 20px;
  margin: 0 1rem 0 1rem;
  box-sizing: border-box;
  flex-shrink: 0;

  display: flex;
  align-items: center;
}

.t-fileBtn-container {
  border: none;
  border-radius: 50px;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
}

.t-fileBtn-container:hover {
  cursor: pointer;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
}

.t-fileBtn-container:active {
  background: white;
}

.t-fileBtn-container-active {
  background: white;
}

.l-fileBtn-title {
  margin-right: 0.5rem;
}
</style>

function setSelectedIndex(buttonIndex: number|undefined) { throw new Error('Function not implemented.'); }
