<template>
  <div>
    <b-card-text style="text-align: left; font-size: 14px">
      <a href="#" @click="emitToggleAuth">Sign In </a>
      /
      <a> Sign Up</a>
    </b-card-text>
    <b />
    <form @submit.prevent="register">
      <b-input-group prepend="👥" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          required
          v-model="email"
          type="email"
          id="inline-form-input-email"
          placeholder="Email"
        ></b-input>
      </b-input-group>
      <br />
      <b-input-group prepend="🏢" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          required
          v-model="torre_user"
          id="inline-form-input-username"
          placeholder="Torre User"
        ></b-input>
      </b-input-group>
      <br />
      <b-input-group prepend="🔒" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input
          required
          v-model="password"
          type="password"
          id="inline-form-input-password"
          placeholder="Password"
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
            >Sign Up</span
          >
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
import { AUTH_REGISTER } from "../../store/actions/auth";
export default {
  name: "SignUpForm",
  data() {
    return {
      email: "",
      password: "",
      torre_user: "",
    };
  },
  methods: {
    register: function () {
      const { email, password, torre_user } = this;
      this.$store
        .dispatch(AUTH_REGISTER, { email, password, torre_user })
        .then(() => {
          this.$swal({
            icon: "success",
			title: "Created",
			text: "Your accoun has been created successfully",
            showConfirmButton: false,
          });
          this.$emit("toggleAuth");
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