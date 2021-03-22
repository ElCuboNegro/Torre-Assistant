<template>
  <div id="AuthForm" class="w-50 p-3 mb-1">
    <b-card class="rounded border-right-0" md="auto" id="half">
      <b-row class="row align-items-center">
          <b-card-body>
            <b-card-text class="auth-text">
              <span>Welcome to</span>
              <br />
              <span class="logo auth-text">Torre</span>
              <span class="logo auth-text">Assistant</span>
            </b-card-text>
            <SignInForm @toggleAuth="toggleAuth" v-if="toggle"></SignInForm>
            <SignUpForm @toggleAuth="toggleAuth" v-else></SignUpForm>
          </b-card-body>
      </b-row>
    </b-card>
  </div>
</template> 


<script>
import SignInForm from "./SignInForm.vue";
import SignUpForm from "./SignUpForm.vue";

export default {
  name: "AuthForm",
  data() {
    return {
      toggle: true,
    };
  },
  components: {
    SignInForm,
    SignUpForm,
  },
  methods: {
    toggleAuth: function () {
      this.toggle = !this.toggle;
    },
  },
};
</script>
