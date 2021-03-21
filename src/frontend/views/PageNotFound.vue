<template>
  <div id="not-found">
    <a style="font-size: 6rem">404 | Page Not found</a>
	<br>
    <b-card-img
      style="margin: 0"
      height="400px"
      width="400px"
      :src="require('../assets/404.svg')"
      alt="Image"
    ></b-card-img>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
#not-found {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>