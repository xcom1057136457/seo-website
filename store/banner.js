export const state = () => ({
  bannerIndex: ''
})

export const mutations = {
  SET_BANNERINDEX(state, data) {
    state.bannerIndex = data
  }
}

export const actions = {
  getBannerIndex({ commit }, params) {
    commit('SET_BANNERINDEX', params)
  }
}