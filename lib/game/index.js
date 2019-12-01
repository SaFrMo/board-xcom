import play from './play'
import entity from './entity'

const output = {
    game: {
        name: 'xcom',

        setup(ctx) {
            return {
                enemies: [entity({ x: 1, y: 1 }), entity({ x: 8, y: 1 })],
                players: [
                    entity({ name: 'Alice', x: 4, y: 8 }),
                    entity({ name: 'Bob', x: 5, y: 8 })
                ],
                grid: new Array(100).fill(null)
            }
        },

        phases: {
            play
        }
    }
}

export default output
