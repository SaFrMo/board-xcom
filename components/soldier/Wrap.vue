<template>
    <section class="soldier-wrap">
        <soldier-selector
            v-for="(soldier, i) in G.players"
            :key="i"
            :soldier="soldier"
            :selected="$store.state.game.selectedSoldierIndex == i"
            @click.native="$store.commit('game/SET_SELECTED_SOLDIER', i)"
        />
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.soldier-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 20px;
    background: #ddd;
    margin: 20px;
    display: grid;
    grid-row-gap: 5px;
}
</style>
