<template>
    <header class="flex">
        <div class="right branding flex">
            <div @click="toggleAuthMenu" class="flex filter">
                <h3 style="color: #fff;">
                    Menu
                </h3>
                <!-- <img src="@/assets/icon-arrow-down.svg" alt=""> -->
                <ul v-show="authMenu" id="nav" class="filter-menu">
                    <!-- <div v-if="path === '/' "> -->
                    <div>
                        <li>
                            <router-link class="dashboard-button flex" :to="{ name: 'Home'}">
                                Dashboard
                            </router-link>
                        </li>
                        <li>
                            <router-link class="login-button flex" :to="{ name: 'Login'}">
                                Login
                            </router-link>
                        </li>
                        <li>
                            <router-link class="register-button flex" :to="{ name: 'Register'}">
                                Register
                            </router-link>
                        </li>
                        <li>
                            <button class="logout-button" @click="logout">Logout</button>
                        </li>
                    </div>
                    <!-- <div v-else>
                        <li>
                            <router-link class="login-button flex" :to="{ name: 'Login'}">
                                Login
                            </router-link>
                        </li>
                    </div>
                    <div>
                        <li>
                            <router-link class="register-button flex" :to="{ name: 'Register'}">
                                Register
                            </router-link>
                        </li>
                    </div> -->
                </ul>
                <!-- <div>
                    <img style="width: 50px; height: 50px; top: -10px;" class="logo" src="@/assets/bill.png" alt="">
                </div> -->
            </div>
        </div>
    </header>

</template>

<script>
import { auth } from '../firebase/firebaseAuth'
export default {
    name: "navigation",
    data() {
        return {
            authMenu: null,
        }
    },
    methods: {
        toggleAuthMenu() {
            this.authMenu = !this.authMenu;
        },

        logout() {
            auth
            .signOut()
            .then(() => {
                alert('Logged Out Successfully!');
                this.$router.push('/login')
            })
            .catch(error => {
                alert(error.message)
                this.$router.push('/');
            });
        },
    }
};
</script>

<style lang="scss" scoped>
header {
    z-index: 99;
    flex-direction: row;
    background-color: #1e2139;
    @media (min-width: 900px) {
        min-height: 100%;
        min-width: 120px;
        flex-direction: column;
        border-radius: 24px;
    }

    .branding {
        border-radius: 12px;
        background-color: #7c5dfa83;
        justify-content: center;
        // margin-left: 10px;
        // width: 120px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 8px;
        @media (min-width: 900px) {
            width: 100%;
        }

        img {
            width: auto;
            position: absolute;
            height: 100px;
            margin-top: 24px;
            // margin-left: 100px;
        }
    }
}

.left,
.right {
    // flex: 1;
    margin-left: 10px;
    // margin-top: -600px;
}

.right {
    // justify-content: flex-end;
    align-items: center;
    // margin-left: 20px;
    // background-color: #7c5dfa83;
    // width: 100px;
    // margin-top: 20px;

    .filter {
        align-items: center;

        span {
            font-size: 12px;
        }
    }

    .filter {
        position: relative;
        // margin-right: 30px;
        cursor: pointer;

        img {
            margin-left: 70px;
            margin-top: 0px;
            width: 9px;
            height: 5px;
        }

        .filter-menu {
            // width: 120px;
            // margin-top: 80px;
            border-radius: 12px;
            position: absolute;
            top: 38px;
            list-style: none;
            background-color: #1e2139;
            box-shadow: 0 4px 6px -1px rgb(0, 0, 0), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

            li {
                cursor: pointer;
                font-size: 16px;
                padding: 10px 20px;

                &:hover {
                    // color: #1e2139;
                    border-radius: 12px;
                    background-color: #4c5174;
                }
            }
            button {
                cursor: pointer;
                font-size: 16px;
                height: 10px;
                // padding: 10px 20px;

                &:hover {
                    // color: #1e2139;
                    border-radius: 12px;
                    // background-color: #4c5174;
                }
            }
        }
    }
}
.auth-nav {
    margin-top: 80px;
}
.dashboard-button {
    text-decoration: none;
    align-items: center;
    color: #fff;
    font-size: 16px;
}

.login-button {
    text-decoration: none;
    align-items: center;
    color: #fff;
    font-size: 16px;
}
.register-button {
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
}
.logout-button {
    background-color: #1e213900;
    color: #fff;
    border-radius: 20px;
    margin-top: -20px;
    margin-left: -24px;
    // text-decoration: none;
}
</style>
