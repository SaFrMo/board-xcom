export default {
    onBegin(G, ctx) {
        if (localStorage.getItem('G')) {
            loadGame(G, ctx, {
                newG: localStorage.getItem('G')
            })
        } else {
            fillHand(G, ctx)
        }
    },

    start: true,

    moves: {
        fillHand,
        playBlock,
        loadGame
    }
}
