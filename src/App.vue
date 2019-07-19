<template>
  <div id="app">
    <theme-provider :theme="theme">
      <dynamic :pageToRender="page"></dynamic>
    </theme-provider>
  </div>
</template>

<script>
import { ThemeProvider } from "vue-styled-components";
import theme from "./themes/seatheme";
import Dynamic from "./core/Dynamic.vue";
import page from "./config";

export default {
  name: "app",
  components: {
    "theme-provider": ThemeProvider,
    Dynamic
  },
  data: () => {
    return {
      theme: theme,
      page: page
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
