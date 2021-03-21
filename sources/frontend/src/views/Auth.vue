<template>
  <div id="auth">
    <AuthForm></AuthForm>
    <Footer></Footer>
  </div>
</template>

<script>
import AuthForm from "../components/auth/AuthForm.vue";
import Footer from "../components/Footer.vue";
import "../styles/auth.css";
export default {
  name: "Auth",
  components: {
    AuthForm,
    Footer
  },
};
</script>