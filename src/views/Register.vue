<template>
  <div class="register-wrap flex flex-column">
      <form class="register-content" @submit.prevent="register">
          <h1>
              Padini General Supplies
          </h1>
          <h3>
              Register Page
          </h3>
          <div class="register-input flex flex-column">
              <div class="input-details flex flex-column">
                    <label for="emailAddress">Email Address</label>
                    <input class="input-style" type="email" placeholder="example@email.com" v-model="email">
              </div>
              <div class="input-details flex flex-column">
                    <label for="passwordCode">Password</label>
                    <input class="input-style" type="password" placeholder="********" v-model="password">
              </div>
          </div>
          <div class="login-route">
              <span>Already have an account? </span>
              <router-link class="login-link" :to="{ name: 'Login' }">
                  Login
              </router-link>
          </div>
          <button class="register-button" type="submit">
              Register
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
        register() {
            auth
            .createUserWithEmailAndPassword(this.email, this.password) 
            .then (() => {
                alert('Successfully Registered! Please Login.');
                this.$router.push('/login');
            })
            .catch(error => {
                alert(error.message);
            });
        },
    },

}
</script>

<style lang="scss" scoped>
.register-wrap {
    position: fixed;
    top: 0;
    left: 0;
    widows: 100%;
    height: 100vh;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 900px) {
        left: 90px;
    }

    .register-content {
        position: relative;
        padding: 56px;
        max-width: 700px;
        width: 100%;
        background-color: #141625;
        color: #fff;
        box-shadow: 10px 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

        h1 {
            margin-top: 20px;
            margin-bottom: 48px;
            color: 48px;
        }

        h3 {
            margin-bottom: 48px;
            font-size: 18px;
            color: #777f98;
        }

        h4 {
            color: #7c5dfa;
            font-size: 12px;
            margin-bottom: 24px;
        }

        .register-input {
            margin-bottom: 48px;

            .input-details {
                gap: 16px;
                div {
                    flex: 1;
                }
            }
        }
    }

    .input-style {
        margin-bottom: 30px;
    }

    label {
        font-size: 16px;
        margin-bottom: 6px;
    }

    input {
        width: 100%;
        background-color: #1e2139;
        color: #fff;
        border-radius: 4px;
        padding: 12px 4px;
        border: none;

        &:focus {
            outline: none;
        }
    }
    .login-route {
        margin-bottom: 20px;

        .login-link {
            text-decoration: none;
            color: #7c5dfa;
        }
    }
    .register-button {
        color: #fff;
        background-color: #016108;
        // background-color: #252945;
    }

}
</style>