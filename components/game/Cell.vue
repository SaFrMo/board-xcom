<template>
    <div
        :class="[
            'game-cell',
            { 'contains-selected-soldier': containsSelectedSoldier }
        ]"
    >
        <button @click="cellClicked" class="button" />

        <!-- Contents -->
        <div class="contents" v-if="contents">
            <span>{{ contents.name }}</span>
        </div>

        <!-- Context menu -->
    </div>
</template>

<script>
import { grid } from 'boardgame-utils'
const { getCoordsFromIndex } = grid

export default {
    props: ['index'],
    data() {
        return {
            opened: false
        }
    },
    computed: {
        contents() {
            const coords = getCoordsFromIndex(this.index, 10)
            const val =
                this.G.enemies.find(
                    x => x.position.x == coords.x && x.position.y == coords.y
                ) ||
                this.G.players.find(
                    x => x.position.x == coords.x && x.position.y == coords.y
                )

            // empty
            if (!val) {
                return val
            }

            return val
        },
        containsSelectedSoldier() {
            const contents = this.contents
            const selected = this.G.players[
                this.$store.state.ui.selectedSoldierIndex
            ]

            return contents && selected && contents.guid == selected.guid
        }
    },
    methods: {
        cellClicked() {
            // TODO: movement
            // TODO: targeting

            // cancel if cell contains nothing
            if (!this.contents) return

            // if cell contains friendly unit...
            const playerIndex = this.G.players
                .map(p => p.guid)
                .indexOf(this.contents.guid)
            if (playerIndex > -1) {
                // ...select it!
                this.$store.commit('ui/SET_SELECTED_SOLDIER', playerIndex)
            }
        }
    }
}
</script>

<style lang="scss">
.game-cell {
    background: var(--white);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    .contents {
        transform: rotateZ(-45deg) rotateX(-45deg) translateZ(25px);
        display: flex;
        flex-direction: column;
    }

    &.contains-selected-soldier {
        background: var(--selected-soldier-background);
        color: var(--selected-soldier-color);
    }
}
</style>
