<template>
  <button
    @click="clickHandler"
    class="l-fileBtn-container t-fileBtn-container"
    :class="{ 't-fileBtn-container-active': isActive }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FileBtn',
  props: {
    selectedIndex: Number,
    buttonIndex: Number,
  },
  methods: {
    clickHandler() {
      if (!this.isActive) {
        this.$emit('setSelected', this.buttonIndex, this.$el.innerHTML);
      }
    },
  },
  computed: {
    isActive(): boolean {
      return this.selectedIndex === this.buttonIndex;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l-fileBtn-container {
  height: 50px;
  padding: 10px 20px 10px 20px;
  margin: 0 1rem 0 1rem;
  box-sizing: border-box;
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
</style>

function setSelectedIndex(buttonIndex: number|undefined) { throw new Error('Function not implemented.'); }
