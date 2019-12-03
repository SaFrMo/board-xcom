<template>
    <section class="game-wrap" v-if="ready">
        <!-- Board -->
        <div class="board">
            <game-cell v-for="(cell, i) in G.grid" :key="i" :index="i" />
        </div>

        <!-- Soldier UI -->
        <soldier-wrap />
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
    --side: 75px;
    --black: black;
    --white: white;

    --selected-soldier-background: tomato;
    --selected-soldier-color: white;

    --normal-range-background: blue;
    --sprint-range-background: yellow;

    text-align: center;

    button {
        cursor: pointer;
        appearance: none;
        border: none;
        font-family: inherit;
        font-size: inherit;
        padding: 0;
        display: block;
        outline: none;
        color: inherit;
        background: transparent;
    }

    .board {
        display: inline-grid;
        grid-template: repeat(10, var(--side)) / repeat(10, var(--side));
        grid-gap: 1px;
        justify-content: center;

        margin: 40px;
        background: var(--black);
        padding: 1px;

        font-size: 14px;

        --isometric: 55deg; //35.264deg;
        transform: rotateX(var(--isometric)) rotateZ(45deg);
        transform-style: preserve-3d;
    }
}
</style>
