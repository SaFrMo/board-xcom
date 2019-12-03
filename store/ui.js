export const state = () => {
    return {
        selectedSoldierIndex: 0
    }
}

export const mutations = {
    SET_SELECTED_SOLDIER(state, newVal) {
        state.selectedSoldierIndex =
            state.selectedSoldierIndex == newVal ? -1 : newVal
    }
}
