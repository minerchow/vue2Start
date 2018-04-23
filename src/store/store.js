// /**
//  * Created by Administrator on 2016/10/29.
//  */
import Vue from 'vue';
import Vuex from 'vuex';
import countModule from './countModule';
Vue.use(Vuex);
export default new Vuex.Store({
    
    modules: {
        countModule
    }
})
// const state = {
//     count: 0
// }

// // mutations are operations that actually mutates the state.
// // each mutation handler gets the entire state tree as the
// // first argument, followed by additional payload arguments.
// // mutations must be synchronous and can be recorded by plugins
// // for debugging purposes.
// const mutations = {
//     increment (state) {
//     state.count++
//     },
//     decrement (state) {
//         state.count--
//     }
// }

// // actions are functions that causes side effects and can involve
// // asynchronous operations.
// const actions = {
//     increment: ({ commit }) => commit('increment'),
//     decrement: ({ commit }) => commit('decrement'),
//     incrementIfOdd ({ commit, state }) {
//     if ((state.count + 1) % 2 === 0) {
//         commit('increment')
//     }
// },
// incrementAsync ({ commit }) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 commit('increment')
//                 resolve()
//             }, 1000)
// })
// }
// }

// // getters are functions
// const getters = {
//     evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
// }

// // A Vuex instance is created by combining the state, mutations, actions,
// // and getters.
// export default new Vuex.Store({
//     state,
//     getters,
//     actions,
//     mutations
// })