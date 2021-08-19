<template>
  <header class="header">
    <div class="header--item">
      <img alt="Gene sequence logo" src="../../assets/genesequence.svg" class="logo">
    </div>
    <div class="header--item">
      <nav id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/documentation">Doc</router-link>
        <!-- <router-link to="/dashboard">Dashboard</router-link> | -->
        <!-- <router-link to="/login" title="Admin only">Login</router-link> -->
        <!-- <router-link to="/download">Download</router-link> | -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  /* padding: 1rem 0; */
  margin-bottom: 2rem;
  /* border-bottom: 1px solid #293038; */
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
}
.header--item {
  align-self: center;
}
.logo {
  width: 2rem;
  height: 2rem;
  transform: rotate(45deg);
  transition: all 150ms ease-in-out 0s;
}
.logo:hover {
  transform: rotate(-45deg);
}
</style>