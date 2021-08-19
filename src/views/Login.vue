<template>
  <div class="login">
    <Header></Header>
    <div class="login--wrapper">
      <form class="login--form" @submit.prevent="onLogin">
        <div class="login--item" style="text-align: center;"><h2>Sign in with admin credentials</h2></div>
        <div class="login--item">
          <label class="login--label" for="username" aria-label="username">Username: </label>
          <input class="login--input" type="text" v-model="username" name="username" id="username" placeholder="Enter your username" @blur="onBlur($event)"/>
        </div>
        <!-- <div class="login--item">
          <label class="login--label" for="email" aria-label="email">Email: </label>
          <input class="login--input" type="email" v-model="email" name="email" id="email" placeholder="Enter your email" @blur="onBlur($event)"/>
        </div> -->
        <div class="login--item">
          <label class="login--label" for="password" aria-label="password">Password: </label>
          <input class="login--input" type="password" v-model="password" name="password" id="password" placeholder="Enter your password" @blur="onBlur($event)"/>
        </div>
        <div class="login--item">
          <button class="login--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit" name="submit">login</button>
        </div>
      </form>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
// @ is an alias to /
import Header from "@/components/_partials/Header.vue";
// import Footer from "@/components/_partials/Footer.vue";
import { mapActions } from "vuex";
export default {
  name: "Login",
  components: {
    Header,
    // Footer,
  },
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  computed: {
    isValid() {
      return this.username !== "" && this.password !== "";
    },
  },
  methods: {
    ...mapActions(["login"]),
    onBlur(event) {
      event.target.style.borderColor = event.target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    },
    onLogin() {
      this.login({
        // email: this.email,
        username: this.username,
        password: this.password,
      });
      this.$router.push({ name: "Reset" });
      // this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

<style scoped>
.login--wrapper {
  padding: 1rem;
  margin-top: 5rem;
}
.login--form {
  /* padding: 0 1rem; */
  text-align: left;
}
.login--title {
  text-align: center;
}
.login--item {
  width: 100%;
  margin-bottom: 1.5rem;
}
.login--label {
  font-size: 14px;
  color: rgb(61, 79, 88);
  position: relative;
  height: 16px;
  /*width: 36px;*/
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.02em;
}
.login--input {
  min-width: 100%;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(229, 231, 235, 1);
  border-radius: 4px;
  height: 52px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  margin-top: 5px;
  padding-left: 12px;
  padding-right: 12px;
  transition: border-color 150ms ease-in-out 0s;
}
.login--button {
  position: relative;
  background-color: transparent;
  color: #000000;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  -webkit-box-align: stretch;
  height: 45px;
  width: 100%;
  font-size: 16px;
  margin-top: 1rem;
  margin-bottom: 5px;
  border-radius: 4px;
  text-decoration: none;
  cursor: not-allowed;
  z-index: 0;
  border: 1px solid transparent;
  transition: all 150ms ease-in-out 0s;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
}
.login--button.isValid {
  cursor: pointer;
  color: #ffffff;
  background-color: #293038;
}
.login--button.isValid:hover {
  opacity: 0.5;
}
@media only screen and (min-width: 481px) {
  .login--wrapper {
    width: 70%;
    margin: 5rem auto;
  }
}
@media only screen and (min-width: 981px) {
  .login--wrapper {
    width: 40%;
    margin: 0 auto;
  }
}
</style>