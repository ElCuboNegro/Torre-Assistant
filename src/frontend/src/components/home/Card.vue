<template>
<b-card id="Card" class="mx-auto" no-body style="max-width: 25rem" v-bind:img-src="offer.organizations[0].picture" img-alt="Image" img-top>
    <template v-slot:header>
        <h4 class="mb-0">{{ offer.objective }}</h4>
    </template>

    <b-card-body>
        <b-card-title>{{ offer.organizations[0].name }}</b-card-title>
        <b-card-sub-title class="mb-2">{{ currency }} </b-card-sub-title>
        <div>
            <b-badge class="skills" v-for="{ name } in offer.skills" :key="name" pill variant="dark">{{ name }}</b-badge>
        </div>
    </b-card-body>

    <b-card-body id="apply">
        <a v-bind:href="'https://torre.co/en/jobs/' + offer.id">Apply now...</a>
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
            currency: `${this.offer.compensation.data.currency} ${this.offer.compensation.data.minAmount} - ${this.offer.compensation.data.maxAmount} / ${this.offer.compensation.data.periodicity}`,
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
