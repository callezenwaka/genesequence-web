<template>
  <div class="reset">
    <Header></Header>
    <div class="reset--wrapper">
      <form class="reset--form" @submit.prevent="onReset">
        <div class="reset--item" style="text-align: center;"><h2>Reset Password</h2></div>
        <div class="reset--item">
          <label class="reset--label" for="oldPassword" aria-label="oldPassword">Old Password: </label>
          <input class="reset--input" type="password" v-model="oldPassword" name="oldPassword" id="oldPassword" placeholder="Enter your old password" @blur="onBlur($event)"/>
        </div>
        <div class="reset--item">
          <label class="reset--label" for="newPassword" aria-label="newPassword">New Password: </label>
          <input class="reset--input" type="password" v-model="newPassword" name="newPassword" id="newPassword" placeholder="Enter your new password" @blur="onBlur($event)"/>
        </div>
        <div class="reset--item">
          <button class="reset--button" :class="{isValid: isValid}" :disabled="!isValid" type="submit" name="submit">Reset Password</button>
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
  name: "Reset",
  components: {
    Header,
    // Footer,
  },
  data() {
    return {
      oldPassword: "",
      newPassword: "",
    };
  },
  computed: {
    isValid() {
      return this.oldPassword !== "" && this.newPassword !== "";
    },
  },
  methods: {
    ...mapActions(["reset"]),
    onBlur(event) {
      event.target.style.borderColor = event.target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    },
    onReset() {
      this.reset({
        // email: this.email,
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
      });
      // this.$router.push({ name: "Reset" });
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

<style scoped>
.reset--wrapper {
  padding: 1rem;
  margin-top: 5rem;
}
.reset--form {
  /* padding: 0 1rem; */
  text-align: left;
}
.reset--title {
  text-align: center;
}
.reset--item {
  width: 100%;
  margin-bottom: 1.5rem;
}
.reset--label {
  font-size: 14px;
  color: rgb(61, 79, 88);
  position: relative;
  height: 16px;
  /*width: 36px;*/
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.02em;
}
.reset--input {
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
.reset--button {
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
.reset--button.isValid {
  cursor: pointer;
  color: #ffffff;
  background-color: #293038;
}
.reset--button.isValid:hover {
  opacity: 0.5;
}
@media only screen and (min-width: 481px) {
  .reset--wrapper {
    width: 70%;
    margin: 5rem auto;
  }
}
@media only screen and (min-width: 981px) {
  .reset--wrapper {
    width: 40%;
    margin: 0 auto;
  }
}
</style>