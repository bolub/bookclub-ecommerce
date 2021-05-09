const state = {
  products: [],
  colorChosen: "",
  szieChosen: "",
};

const getters = {
  getCart(state) {
    return state.products;
  },

  getColorChosen(state) {
    return state.colorChosen;
  },

  getSizeChosen(state) {
    return state.szieChosen;
  },
};

const mutations = {
  updateCart(state, data) {
    state.products = [...state.products, data];
  },

  updateColorChosen(state, data) {
    state.colorChosen = data;
  },

  updateSizeChosen(state, data) {
    state.szieChosen = data;
  },
};

const actions = {
  async updateCartAction({ commit }, data) {
    commit("updateCart", data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
