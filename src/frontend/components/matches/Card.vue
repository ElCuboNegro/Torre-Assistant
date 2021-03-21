<template>
<b-card id="Card" class="mx-auto" no-body style="max-width: 20rem" v-bind:img-src="offer.picture" img-alt="Image" img-top>
    <template v-slot:header>
        <h4 class="mb-0">{{ offer.objective }}</h4>
    </template>

    <b-card-body>
        <b-card-title>{{ offer.organization }}</b-card-title>
        <b-card-sub-title class="mb-2">{{ currency }} </b-card-sub-title>
        <div>
            <b-badge class="skills" v-for="{ name } in skills" :key="name" pill variant="dark">{{ name }}</b-badge>
        </div>
    </b-card-body>

    <b-card-body id="apply">
        <a v-bind:href="'https://torre.co/en/jobs/' + offer.torreId">Apply now...</a>
    </b-card-body>

    <b-card-footer class="text-center">Powered by Torre Api</b-card-footer>
</b-card>
</template>

<script>
export default {
    name: "Card",
    props: ["offer"],
    data() {
        return {
            currency: `${this.offer.currency} ${this.offer.compensation_min} - ${this.offer.compensation_max}`,
            skills: JSON.parse(this.offer.skills),
        };
    },
};
</script>

<style>
#Card {
    margin-top: 2vh;
    min-width: 350px;
    min-height: 70vh;
}

#apply {
    text-align: end;
}
</style>
