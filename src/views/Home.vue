<template>
  <div class="home">
    <Header></Header>
    <div class="hero">
      <img class="hero--image" alt="Gene Sequence Demo" src="../assets/genesequence.gif" width="50%" height="auto">
    </div>
    <div class="download">
      <div><h1>Downloads</h1></div>
      <p>Select and download the latest version for your platform, and start developing today.</p>
    </div>
    <div class="download--version">
      <div class="is-version" title="Display downloads for LTS">
        <h2 class="title">LTS</h2>
        <p class="tag">Below are the stable versions recommended for most users</p>
      </div>
    </div>
    <div class="download--options" id="installer">
      <ul class="download--lists">
        <li class="download--list">
          <a href="https://github.com/callezenwaka/genesequence/tree/windows" target="_blank" class="download--link" data-version="v14.17.5">
            <svg class="download--logo" width="50" height="50" viewBox="0 0 50 50" focusable="false">
              <path d="M1.589 23.55L1.572 8.24l18.839-2.558V23.55zM23.55 5.225l25.112-3.654V23.55H23.55zM48.669 26.69l-.006 21.979-25.112-3.533V26.69zM20.41 44.736l-18.824-2.58-.001-15.466H20.41z"></path>
            </svg>
            <p>Windows Installer</p>
            <p class="small color-lightgray">genesequence-v1.1</p>
          </a>
        </li>
        <li class="download--list">
          <a href="https://github.com/callezenwaka/genesequence/tree/macOS" target="_blank">
            <svg class="download--logo" width="50" height="50" viewBox="0 0 50 50" focusable="false">
              <path d="M39.054 34.065q-1.093 3.504-3.448 7.009-3.617 5.495-7.205 5.495-1.374 0-3.925-.897-2.411-.897-4.233-.897-1.71 0-3.981.925-2.271.953-3.701.953-4.261 0-8.439-7.261Q.001 32.075.001 25.29q0-6.392 3.168-10.485 3.14-4.037 7.962-4.037 2.019 0 4.962.841 2.916.841 3.869.841 1.262 0 4.009-.953 2.86-.953 4.85-.953 3.336 0 5.972 1.822 1.458 1.009 2.916 2.804-2.215 1.878-3.196 3.308-1.822 2.635-1.822 5.803 0 3.476 1.934 6.252t4.43 3.533zM28.512 1.179q0 1.71-.813 3.813-.841 2.103-2.607 3.869-1.514 1.514-3.028 2.019-1.037.308-2.916.477.084-4.177 2.187-7.205 2.075-3 7.009-4.149.028.084.07.308t.07.308q0 .112.014.28t.014.28z"></path>
            </svg>
            <p>macOS Installer</p>
            <p class="small color-lightgray">genesequence-v1.1</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="subscribe">
      <hr class="subscribe--text" data-content="Subscribe for Updates">
      <p>Drop your email below to get notification about updates.</p>
      <form class="subscribe--form" @submit.prevent="onSubscribe">
        <div class="subscribe--item">
          <label class="subscribe--label sr-only" for="subscribe" aria-label="Subscribe">Subscribe: </label>
          <input class="subscribe--input" type="text" v-model="email" name="subscribe" id="subscribe" placeholder="Enter your email" @blur="onBlur($event)" />
        </div>
        <div class="subscribe--item">
          <button class="subscribe--button" :class="{isValid: isValid}" type="submit" name="submit">
            <span v-if="isLoading">
              <svg class="spinner" viewBox="0 0 50 50">
                <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
              </svg>
            </span>
            <span v-else>Subscribe</span>
          </button>
        </div>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/_partials/Header.vue";
import Footer from "@/components/_partials/Footer.vue";
import { mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      email: "",
      isLoading: false,
    };
  },
  computed: {
    isValid() {
      return this.email !== "";
    },
  },
  methods: {
    ...mapActions(["addEmail"]),
    onBlur(event) {
      event.target.style.borderColor = event.target.value
        ? "rgba(229,231,235, 1)"
        : "rgba(255, 0, 0, 1)";
    },
    async onSubscribe() {
      this.isLoading = true;
      const data = await this.addEmail({ email: this.email });
      if (data) this.isLoading = false;
      this.email = "";
    },
  },
};
</script>

<style scoped>
.home {
  margin: 0;
  padding: 0;
}
.hero--image {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.download {
  margin: 3rem 0;
}
.download--version {
  margin-bottom: 3rem;
}
.download--options {
  margin-bottom: 3rem;
}
.download--lists {
  display: flex;
  justify-content: center;
  list-style-type: none;
}
.download--list {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
}
.download--link {
  display: flex;
  flex-direction: column;
}
.download--logo {
  display: block;
  margin: auto;
}
.subscribe--form {
  display: flex;
  flex-direction: column;
}
.subscribe--text {
  line-height: 1em;
  position: relative;
  outline: 0;
  border: 0;
  color: #000000;
  text-align: center;
  margin-bottom: 1rem;
  height: 1.5em;
  opacity: 1;
}
.subscribe--text:before {
  content: "";
  background: linear-gradient(to right, transparent, #818078, transparent);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}
.subscribe--text:after {
  content: attr(data-content);
  position: relative;
  display: inline-block;
  color: black;
  padding: 0 0.5em;
  line-height: 1.5em;
  color: #818078;
  background-color: #fcfcfa;
}
.subscribe--item {
  width: 100%;
  margin-bottom: 1.5rem;
}
.sr-only {
  display: none;
}
.subscribe {
  padding: 0 1rem;
}
.subscribe--label {
  font-size: 14px;
  color: rgb(61, 79, 88);
  position: relative;
  height: 16px;
  /*width: 36px;*/
  text-align: left;
  font-weight: bold;
  line-height: 16px;
  letter-spacing: 0.02em;
}

.subscribe--input {
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

.subscribe--button {
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

.subscribe--button.isValid {
  cursor: pointer;
  color: #ffffff;
  background-color: #293038;
}

.subscribe--button.isValid:hover {
  opacity: 0.5;
}
.spinner {
  -webkit-animation: rotate 2s linear infinite;
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
}
.spinner .path {
  stroke: #ffffff;
  stroke-linecap: round;
  -webkit-animation: dash 1.5s ease-in-out infinite;
  animation: dash 1.5s ease-in-out infinite;
}

@-webkit-keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
@media only screen and (min-width: 481px) {
  .subscribe--form {
    width: 70%;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 981px) {
  .subscribe--form {
    width: 40%;
    margin: 0 auto;
  }
}
</style>