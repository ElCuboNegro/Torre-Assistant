  
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
      <Vue2InteractDraggable
        @draggedLeft="draggedLeft"
        @draggedRight="draggedRight"
        :interact-max-rotation="15"
        :interact-out-of-sight-x-coordinate="2000"
        :interact-x-threshold="200"
        :interact-event-bus-events="interactEventBusEvents"
        v-if="isShowing"
      >
        <Card v-bind:offer="offers[count]"></Card>
      </Vue2InteractDraggable>
      <SwipeButtons></SwipeButtons>
    </div>
  </div>
</template>

<script>
import api from "../../api/job";
import { Vue2InteractDraggable, InteractEventBus } from "vue2-interact";
import Card from "../home/Card.vue";
import SwipeButtons from "../home/SwipeButtons.vue";
const INTERACT_DRAGGED_LEFT = "INTERACT_DRAGGED_LEFT";
const INTERACT_DRAGGED_RIGHT = "INTERACT_DRAGGED_RIGHT";
export default {
  name: "CardStack",
  components: {
    Vue2InteractDraggable,
    Card,
    SwipeButtons,
  },
  data() {
    return {
      loading: true,
      offers: null,
      offset: 0,
      count: 0,
      isShowing: true,
      interactEventBusEvents: {
        draggedLeft: INTERACT_DRAGGED_LEFT,
        draggedRight: INTERACT_DRAGGED_RIGHT,
      },
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    draggedLeft() {
      this.count = this.count + 1;
      if (this.count > 19) {
        this.fetchData();
      }
      this.hideCard();
    },
    draggedRight() {
      this.saveOffer(this.offers[this.count]);
      this.count = this.count + 1;
      if (this.count > 19) {
        this.fetchData();
      }
      this.hideCard();
    },
    hideCard() {
      setTimeout(() => {
        this.isShowing = false;
      }, 100);
      setTimeout(() => {
        this.isShowing = true;
      }, 300);
    },
    dragLeft() {
      InteractEventBus.$emit(INTERACT_DRAGGED_LEFT);
    },
    dragRight() {
      InteractEventBus.$emit(INTERACT_DRAGGED_RIGHT);
    },
    saveOffer: async function (offer) {
      try {
        await api.saveOffer(offer);
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: error,
        });
        this.$router.push("/");
      }
    },
    fetchData: async function () {
      this.loading = true;
      try {
        let offers = await api.getOffers(this.offset);
        console.log(offers);
        this.offers = offers;
        this.offset = this.offset + 20;
        this.count = 0;
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