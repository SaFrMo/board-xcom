import play from './play'
import entity from './entity'

const output = {
    game: {
        name: 'xcom',

        setup(ctx) {
            return {
                enemies: [
                    entity({ icon: '😠', name: 'Enemy', x: 1, y: 1 }),
                    entity({ icon: '😈', name: 'Boss', x: 8, y: 1 })
                ],
                players: [
                    entity({ icon: '😄', name: 'One', x: 4, y: 8 }),
                    entity({ icon: '😀', name: 'Two', x: 5, y: 8 })
                ],
                environment: [
                    entity({
                        icon: '🧱',
                        name: 'Wall',
                        x: 4,
                        y: 4,
                        ap: 0,
                        cover: 2
                    }),
                    entity({
                        icon: '🧱',
                        name: 'Wall',
                        x: 5,
                        y: 6,
                        ap: 0,
                        cover: 2
                    }),
                    entity({
                        icon: '🚧',
                        name: 'Weak Wall',
                        x: 1,
                        y: 2,
                        ap: 0,
                        cover: 1
                    }),
                    entity({
                        icon: '🚧',
                        name: 'Weak Wall',
                        x: 8,
                        y: 2,
                        ap: 0,
                        cover: 1
                    })
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
