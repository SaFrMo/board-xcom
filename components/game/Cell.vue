<template>
    <div
        :class="[
            'game-cell',
            { 'contains-entity': contents },
            { 'contains-selected-soldier': containsSelectedSoldier },
            { 'normal-range': apRange > 0 && apRange <= 0.5 },
            { 'sprint-range': apRange > 0.5 && apRange <= 1 }
        ]"
    >
        <button @click="cellClicked" class="button">
            <!-- Contents -->
            <div class="contents" v-if="contents">
                <span>{{ contents.name }}</span>
            </div>

            <!-- Context menu -->
        </button>
    </div>
</template>

<script>
import { grid } from 'boardgame-utils'
const { getCoordsFromIndex, taxicabDistance } = grid

export default {
    props: ['index'],
    data() {
        return {
            opened: false
        }
    },
    computed: {
        coords() {
            return getCoordsFromIndex(this.index, 10)
        },
        contents() {
            const val =
                this.G.enemies.find(
                    x =>
                        x.position.x == this.coords.x &&
                        x.position.y == this.coords.y
                ) ||
                this.G.players.find(
                    x =>
                        x.position.x == this.coords.x &&
                        x.position.y == this.coords.y
                )

            // empty
            if (!val) {
                return val
            }

            return val
        },
        selectedSoldier() {
            return this.G.players[this.$store.state.ui.selectedSoldierIndex]
        },
        containsSelectedSoldier() {
            const contents = this.contents

            return (
                contents &&
                this.selectedSoldier &&
                contents.guid == this.selectedSoldier.guid
            )
        },
        taxiDistance() {
            // then, get the taxicab distance from here to the soldier
            return taxicabDistance(this.coords, this.selectedSoldier.position)
        },
        apRange() {
            // first, check if any soldier is selected
            if (!this.selectedSoldier) return false

            // get total range selected soldier has
            const availableRange =
                this.$store.state.settings.movesPerAp * this.selectedSoldier.ap

            return this.taxiDistance / availableRange
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
    }
    .contents {
        transform: rotateZ(-45deg) rotateX(-45deg) translateZ(25px);
        display: flex;
        flex-direction: column;
    }

    &.normal-range:not(.contains-entity) {
        background: var(--normal-range-background);
    }
    &.sprint-range:not(.contains-entity) {
        background: var(--sprint-range-background);
    }
    &.contains-selected-soldier {
        background: var(--selected-soldier-background);
        color: var(--selected-soldier-color);
    }
}
</style>
