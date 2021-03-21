<template>
  <div>
    <div v-if="loading" id="loading">
      <div class="spinner-grow text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>

      <div class="spinner-grow text-success" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-danger" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      <div class="spinner-grow text-warning" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <div v-if="!loading">
      <div>
        <div class="row">
          <Card
            class="col-sm-3"
            v-for="offer in offers"
            :key="offer"
            v-bind:offer="offer"
          ></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api/job";
import Card from "../matches/Card";
export default {
  name: "CardList",
  components: {
    Card,
  },
  data() {
    return {
      loading: true,
      offers: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData: async function () {
      this.loading = true;
      try {
        let offers = await api.getSavedOffers();
        console.log(offers);
        this.offers = offers;
        this.loading = false;
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: error,
        });
        this.$router.push("/");
      }
    },
  },
};
</script>

<style >
</style>