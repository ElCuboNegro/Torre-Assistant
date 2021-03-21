<template>
  <div class="col-md container">
    <b-button @click="dragLeft" class="btn btn-warning btn-circle btn-xl">
      <font-awesome-icon icon="times" />
    </b-button>
    <b-button @click="dragRight" class="btn btn-danger btn-circle btn-xl">
      <font-awesome-icon icon="heart" />
    </b-button>
  </div>
</template>

<script>
const INTERACT_DRAGGED_LEFT = "INTERACT_DRAGGED_LEFT";
const INTERACT_DRAGGED_RIGHT = "INTERACT_DRAGGED_RIGHT";
import { InteractEventBus } from "vue2-interact";

export default {
  name: "SwipeButtons",
  data() {
    return {
      clicked: false,
    };
  },

  methods: {
    click() {
      this.clicked = true;
      this.$emit("click");

      setTimeout(() => {
        this.clicked = false;
      }, 600);
    },
    dragLeft() {
      InteractEventBus.$emit(INTERACT_DRAGGED_LEFT);
    },

    dragRight() {
      InteractEventBus.$emit(INTERACT_DRAGGED_RIGHT);
    },
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  bottom: 50px;
  padding-top: 25px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.btn-circle.btn-xl {
  width: 70px;
  height: 70px;
  padding: 10px 16px;
  border-radius: 35px;
  font-size: 24px;
  line-height: 1.33;
}

.btn-circle {
  margin: 0px 15px;
  width: 30px;
  height: 30px;
  padding: 6px 0px;
  border-radius: 15px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  line-height: 1.42857;
}
</style>