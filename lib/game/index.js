import { buildGrid } from 'boardgame-utils'
import play from './play'

const output = {
    game: {
        name: 'woody',

        setup(ctx) {
            return {
                grid: Array(100).fill(false),
                hand: [],
                score: 0
            }
        },

        phases: {
            play
        }
    }
}

export default output
