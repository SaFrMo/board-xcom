import settings from '~/lib/game/settings'
import { grid } from 'boardgame-utils'
const { taxicabDistance } = grid
import { INVALID_MOVE } from 'boardgame.io/core'

export default function(G, ctx, { guid, position }) {
    // get the desired unit
    const unitIndex = G.players.findIndex(soldier => soldier.guid == guid)

    // make sure that unit exists
    if (unitIndex < 0) {
        return INVALID_MOVE
    }

    const player = G.players[unitIndex]

    // get taxicab distance of move
    const distance = taxicabDistance(player.position, position)

    // get how much AP this would take up
    const ap = Math.ceil(distance / settings.movesPerAp)

    // make sure that unit has enough AP
    const unitAp = player.ap
    if (ap > unitAp) {
        return INVALID_MOVE
    }

    // if it works, deduct the correct AP...
    player.ap -= ap
    // ...and update the position
    player.position = position
}
