import Vue from 'vue'
import { plugin as boardgamePlugin } from 'boardgame-utils'
import options from '~/lib/game'

export default ({ app: { store } }) => {
    Vue.use(boardgamePlugin, { options, store })
}
