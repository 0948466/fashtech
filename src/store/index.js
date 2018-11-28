import Vue from 'vue'
import Vuex from 'vuex'

import {
  CHANGE_WINDOW_WIDTH,
  CHANGE_POPUP_SHOW,
  CHANGE_POPUP_VIEW,
  CHANGE_POPUP_CLASSIC_SHOW,
  CHANGE_POPUP_CLASSIC_VIEW,
} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    windowWidth: null,
    popupShow: false,
    popupView: null,
    popupClassicShow: false,
    popupClassicView: null,
  },
  getters: {
    windowWidth: state => state.windowWidth,
    isMobile: state => state.windowWidth < 768,
    isDesktop: state => state.windowWidth > 767,
    popupShow: state => state.popupShow,
    popupView: state => state.popupView,
    popupClassicShow: state => state.popupClassicShow,
    popupClassicView: state => state.popupClassicView,
  },
  mutations: {
    [CHANGE_WINDOW_WIDTH](state, payload) {
      state.windowWidth = payload
    },
    [CHANGE_POPUP_SHOW](state, payload) {
      state.popupShow = payload
    },
    [CHANGE_POPUP_VIEW](state, payload) {
      state.popupView = payload
      state.popupShow = true
    },
    [CHANGE_POPUP_CLASSIC_VIEW](state, payload) {
      state.popupClassicView = payload
      state.popupClassicShow = true
    },
    [CHANGE_POPUP_CLASSIC_SHOW](state, payload) {
      state.popupClassicShow = payload
    },
  },
  actions: {},
})
