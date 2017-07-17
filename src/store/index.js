import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		first_name: 'Saimon',
		last_name: 'Islam',
		count: 0
	},

	getters: {
		full_name(state) {
			return state.first_name + ' '+ state.last_name
		}
	},

	mutations: {
		increment(state, data) {
			state.count += data + ' ' 
		}
	},

	actions: {

	}
})