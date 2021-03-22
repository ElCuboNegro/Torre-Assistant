<template>
<div>
<NavBar></NavBar>   
<CardStack></CardStack>
</div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import CardStack from "../components/home/CardStack.vue"
export default {
    name: "Home",
    components:{
        NavBar,
        CardStack
    }
}
</script>

<style>

</style>