/**
 * Created by Administrator on 2017/11/9 0009.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions/index'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
