<template>
  <div class="l-main-container">
    <Title text="Login" />
    <div>
      <label>ID : </label>
      <input v-model="id" type="text" placeholder="ID를 입력해주세요" />
      <label>PW : </label>
      <input v-model="pw" type="password" placeholder="PW를 입력해주세요" />
      <button @click="onSubmit" id="loginBtn">로그인</button>
    </div>
  </div>
</template>

<script lang="ts">
import Title from '../components/title/Title.vue';
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  components: { Title },
  data() {
    return {
      id: '',
      pw: '',
    };
  },
  methods: {
    async onSubmit(): Promise<void> {
      if (!this.id || !this.pw) {
        alert('ID와 패스워드를 모두 입력해주세요');
        return;
      }
      const id = this.id;
      const pw = this.pw;
      try {
        const response = await axios.post(
          'https://localhost:8000/api/auth/login',
          { id, pw },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );

        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem('token', token);
          location.href = '/';
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.l-main-container {
  width: 900px;
  height: 100%;
}
</style>
