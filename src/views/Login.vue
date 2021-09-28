<template>
  <div class="login-wrap flex flex-column">
      <form @submit.prevent="login" class="login-content">
          <h1>
            Padini General Supplies
          </h1>
          <h3>
              Login Page
          </h3>
          <div class="login-input flex flex-column">
              <div class="input-details flex flex-column">
                <label for="emailAddress">Email Address</label>
                <input required class="email-input" type="email" placeholder="example@email.com" v-model="email">
              </div>
              <div class="input-details flex flex-column">
                <label for="passwordCode">Password</label>
                <input class="password-input" id="passwordInput" type="password" placeholder="********" v-model="password">
              </div>
          </div>
          <div class="register-route">
              <span>Do not have an account? </span>
              <router-link class="register-link" :to="{ name: 'Register' }">
                  Register
              </router-link>
          </div>
          <button class="login-button" type="submit">
              Login
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
        login() {
            auth
            .signInWithEmailAndPassword(this.email, this.password) 
            .then (() => {
                alert('Successfully Logged In!');
                this.$router.push('/');
            })
            .catch(error => {
                alert(error.message);
            });
        },
    },

}
</script>

<style lang="scss" scoped>
.login-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 900px) {
        left: 90px;
    }

    .login-content {
        position: relative;
        padding: 56px;
        max-width: 700px;
        width: 100%;
        margin: 20px;
        border-radius: 12px;
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

        .login-input {
            margin-bottom: 48px;

            .input-details {
                gap: 16px;
                div {
                    flex: 1;
                }
            }
        }
    }

    .email-input,
    .password-input {
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
    .register-route {
        margin-bottom: 20px;

        .register-link {
            text-decoration: none;
            color: #7c5dfa;
        }
    }
    .login-button {
        color: #fff;
        background-color: #016108;
        // background-color: #252945;
    }

}

</style>