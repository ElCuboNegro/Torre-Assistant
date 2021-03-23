<template>
  <div v-if="!loading" id="navbar">
    <b-navbar toggleable="lg" type="light" style="background-color: #fff">
      <b-navbar-brand href="/" class="logo">
        TorreAssistant
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item style="margin-top: 5px" to="/home">
              <a>✨Home</a>
            </b-nav-item>
            <b-nav-item style="margin-top: 5px" to="/matches">
              <a>🎉Matches</a>
            </b-nav-item>
          </b-navbar-nav>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              <b-avatar v-bind:src="avatar" size="2rem"></b-avatar>
              <a style="margin-left: 5px"> {{ name }}</a>
            </template>
            <b-dropdown-item @click="logout">❌Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { AUTH_LOGOUT } from "../store/actions/auth";

import api from "../api/user";
export default {
  name: "NavBar",
  data() {
    return {
      loading: true,
      name: null,
      avatar: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    logout: function () {
      this.$store
        .dispatch(AUTH_LOGOUT)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          this.$swal({
            icon: "error",
            title: "Oops...",
            text: error,
          });
        });
    },
    fetchData: async function () {
      this.loading = true;
      try {
        let profile = await api.me();
        this.name = profile.name;
        this.avatar = profile.picture;
        this.loading = false;
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: error,
        });
        this.$store
          .dispatch(AUTH_LOGOUT)
          .then(() => {
            this.$router.push("/");
          })
          .catch((error) => {
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: error,
            });
          });
      }
    },
  },
};
</script>