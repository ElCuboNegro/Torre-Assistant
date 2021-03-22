<template>
  <div>
    <b-card-text style="text-align: left; font-size: 14px">
      <a>Sign In </a>
      /
      <a href="#" @click="emitToggleAuth"> Sign Up</a>
    </b-card-text>
    <b />
    <form @submit.prevent="login">
      <b-input-group prepend="👥" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          required
          v-model="email"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        ></b-input>
      </b-input-group>
      <br />
      <b-input-group prepend="🔒" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          required
          v-model="password"
          type="password"
          id="password"
          placeholder="password"
        ></b-input>
      </b-input-group>
      <br />
      <div class="text-center">
        <b-button
          pill
          size="lg"
          style="background-color: #222622"
          type="submit"
        >
          <span style="margin: 25px; font-weight: bold; font-size: 18px"
            >Sign In</span
          >
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
import { AUTH_LOGIN } from "../../store/actions/auth";

export default {
  name: "SignInForm",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      const { email, password } = this;
      this.$store
        .dispatch(AUTH_LOGIN, { email, password })
        .then(() => {
          this.$router.push("/home");
        })
        .catch((error) => {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: error,
          });
        });
    },
    emitToggleAuth: function () {
      this.$emit("toggleAuth");
    },
  },
};
</script>

<style>
</style>