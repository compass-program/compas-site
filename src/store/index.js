import { createStore } from 'vuex'
import Services from '@/store/modules/services'

export default createStore({
	state: { windowWidth: null, },
	getters: {},
	mutations: {
		SET_WINDOW_WIDTH(state, payload) {
			state.windowWidth = payload;
		}
	},
	actions: {
		getWindowWidth(state) {
			state.commit('SET_WINDOW_WIDTH', window.innerWidth);

			window.addEventListener("resize", () => {
				state.commit('SET_WINDOW_WIDTH', window.innerWidth);
			});
		}
	},

	modules: { Services },
});