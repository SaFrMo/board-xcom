export const state = () => {
    return { selectedSoldierIndex: 0 }
}

export const mutations = {
    SET_SELECTED_SOLDIER(state, newVal) {
        state.selectedSoldierIndex =
            state.selectedSoldierIndex == newVal ? -1 : newVal
    }
}

export const getters = {
    selectedSoldier(state, getters, rootState) {
        return rootState.boardgame.G.players[
            rootState.game.selectedSoldierIndex
        ]
    },
    allEntities(state, getters, rootState) {
        return [].concat(
            rootState.boardgame.G.players,
            rootState.boardgame.G.enemies,
            rootState.boardgame.G.environment
        )
    }
}
