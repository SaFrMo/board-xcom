<template>
    <section class="game-wrap" v-if="ready">
        <game-cell v-for="(cell, i) in G.grid" :key="i" :index="i" />
    </section>
</template>

<script>
export default {
    data() {
        return {
            ready: false
        }
    },
    async mounted() {
        await this.$nextTick()
        this.ready = true
    }
}
</script>

<style lang="scss">
.game-wrap {
    --side: 45px;
    display: grid;
    grid-template: repeat(10, var(--side)) / repeat(10, var(--side));
    margin: 40px;
}
</style>
