import play from './play'
import entity from './entity'

const output = {
    game: {
        name: 'xcom',

        setup(ctx) {
            return {
                enemies: [
                    entity({ name: 'Enemy', x: 1, y: 1 }),
                    entity({ name: 'Boss', x: 8, y: 1 })
                ],
                players: [
                    entity({ name: 'First', x: 4, y: 8 }),
                    entity({ name: 'Second', x: 5, y: 8 })
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
