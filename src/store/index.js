import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: function(){
    return {
      device : "",
    }
  },
  mutations: {
    device : function(state, device) {
      state.device = device
    }
  },
  actions: {
    device : function({commit}, device){
      commit("device", device)
      console.log("device", device)
    }
  },
  
})
