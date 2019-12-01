<template>
    <div class="game-cell">
        <button @click="opened = !opened" class="button">...</button>

        <!-- Contents -->
        <div class="contents">
            <span>{{ contents }}</span>
        </div>

        <!-- Context menu -->
    </div>
</template>

<script>
export default {
    props: ['index'],
    data() {
        return {
            opened: false
        }
    },
    computed: {
        contents() {
            const { grid } = require('boardgame-utils')
            const { getCoordsFromIndex } = grid

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

            return val.name
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
}
</style>
