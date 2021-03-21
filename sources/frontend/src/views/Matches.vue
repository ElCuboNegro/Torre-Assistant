<template>
<div>
<NavBar></NavBar>   
<CardList></CardList>
</div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import CardList from "../components/matches/CardList.vue"
export default {
    name: "Home",
    components:{
        NavBar,
        CardList
    }
}
</script>

<style>
</style>