// Tasks module
import api from "../../services/api";

const state = {
  tasks: []
};

const getters = {
  allTasks: state => state.tasks
};

const actions = {
  async fetchTasks({ commit }) {
    const response = await api.get("/tasks");
    commit("setTasks", response.data);
  },
  async addTask({ commit }, task) {
    const response = await api.post("/tasks", task);
    commit("newTask", response.data);
  },
  async updateTask({ commit }, task) {
    const response = await api.put(`/tasks/${task._id}`, task);
    commit("updTask", response.data);
  },
  async removeTask({ commit }, task) {
    await api.delete(`/tasks/${task._id}`);
    commit("deleteTask", task);
  }
};

const mutations = {
  setTasks: (state, tasks) => (state.tasks = tasks),
  newTask: (state, task) => state.tasks.unshift(task),
  updTask: (state, updatedTask) => {
    const index = state.tasks.findIndex(t => t._id === updatedTask._id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
    }
  },
  deleteTask: (state, task) =>
    (state.tasks = state.tasks.filter(t => task._id !== t._id))
};

export default {
  state,
  getters,
  actions,
  mutations
};
