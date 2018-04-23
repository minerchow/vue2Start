 import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);

   const state ={
         count: 0
    }
    const mutations= {
        increment (state,obj) {
            state.count++;
            console.log(obj)
        },
        decrement (state) {
            state.count--
        }
    }
    const actions ={
            increment: ({ commit },obj) => commit('increment',obj),
            decrement: ({ commit }) => commit('decrement'),
            incrementIfOdd ({ commit, state }) {
                if ((state.count + 1) % 2 === 0) {
                    commit('increment')
                }
            },
            incrementAsync ({ commit }) {
            return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        commit('increment')
                        resolve()
                    }, 1000)
                })
            }
    }
    const getters ={
        evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
    }
    export default {
        state,
        getters,
        actions,
        mutations
    }
// const store =  new Vuex.Store({
//     modules:{
//         countModule:countModule
       
//     }
// }) 

// export default store;