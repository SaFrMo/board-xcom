<template>
    <div class="game-cell">
        <div class="contents">
            {{ contents }}
        </div>
    </div>
</template>

<script>
import { grid } from 'boardgame-utils'
const { getCoordsFromIndex } = grid

export default {
    props: ['index'],
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

    .contents {
        // transform: rotateZ(-45deg);
    }
}
</style>
