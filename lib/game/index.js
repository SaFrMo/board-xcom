import play from './play'
import entity from './entity'

const output = {
    game: {
        name: 'xcom',

        setup(ctx) {
            return {
                enemies: [
                    entity({ name: '😠', x: 1, y: 1 }),
                    entity({ name: '😈', x: 8, y: 1 })
                ],
                players: [
                    entity({ name: '😄', x: 4, y: 8 }),
                    entity({ name: '😀', x: 5, y: 8 })
                ],
                environment: [
                    entity({ name: '🧱', x: 4, y: 4, ap: 0, cover: 2 }),
                    entity({ name: '🧱', x: 5, y: 6, ap: 0, cover: 2 }),
                    entity({ name: '🚧', x: 1, y: 2, ap: 0, cover: 1 }),
                    entity({ name: '🚧', x: 8, y: 2, ap: 0, cover: 1 })
                ],
                gridWidth: 10,
                gridHeight: 10
            }
        },

        phases: {
            play
        }
    }
}

export default output
