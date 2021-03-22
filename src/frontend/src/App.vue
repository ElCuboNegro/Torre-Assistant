<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "./styles/app.css";

export default {
  name: "App",
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "TorreAssistant";
      },
    },
  },
};
</script>
