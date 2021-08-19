<template>
  <div class="dashboard">
    <Header></Header>
    <div class="dashboard--wrapper">
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /
import Header from "@/components/_partials/Header.vue";
import Footer from "@/components/_partials/Footer.vue";
import { mapActions } from "vuex";
export default {
  name: "Dashboard",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getUsers"]),
    login() {},
  },
};
</script>

<style scoped>
.dashboard {
}
</style>