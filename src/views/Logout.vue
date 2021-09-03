<template>
  <div class="logout-wrap flex flex-column">
      <form class="login-content" @submit.prevent="logout">
          <h1>
              Padini General Supplies
          </h1>
          <h3>
              Logout Page
          </h3>
          <input class="input-style" type="email" placeholder="Email Address . . ." v-model="email">
          <input class="input-style" type="password" placeholder="Password . . ." v-model="password">
          <button type="submit">
              logout
          </button>
      </form>
  </div>
</template>

<script>
import { auth } from '../firebase/firebaseAuth';
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },

    methods: {
        logout() {
            auth
            .signOut
            .then (() => {
                alert('Successfully Logged Out!');
                this.$router.push('/login');
            })
            .catch(error => {
                alert(error.message);
                this.$$router.push('/logout')
            });
        },
    },

}
</script>

<style>
.input-style {
    margin-right: 20px;
}
</style>