<template>
  <div id="app">
		<Message></Message>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Message from "@/components/_partials/Message.vue";
export default {
  components: {
    Message,
  },
};
</script>

<style>
*,
html,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  color: #000;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}
a {
  font-weight: bold;
  color: #2c3e50;
}
.router-link-exact-active {
  color: #42b983;
  color: #222f3e;
  color: #90979e;
}
</style>
