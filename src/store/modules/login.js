// Tasks module
import api from "../../services/api";

const state = {
  user: {}
};

const getters = {
  getUser: state => state.user
};

const actions = {
  async authUser({ commit }, user) {
    const response = await api.post("/authenticate", user);
    commit("setUser", response.data);
  },
  async registerUser({ commit }, user) {
    const response = await api.post("/register", user);
    commit("setUser", response.data);
  }
};

const mutations = {
  setUser: (state, user) => (state.user = user)
};

export default {
  state,
  getters,
  actions,
  mutations
};
