import axios from "axios";
import { GET_TO_DO } from "../types/actions.type";
import { SET_TO_DO } from "../types/mutations.type";

const state = {
  todos: [0],
  doneTodos: null,
  progress: 0,
};
const getters = {
  todos: ({ todos }) => todos,
  doneTodos: (state) => state.todos.filter((todo) => todo.completed),
  progress: (state, getters) => {
    return Math.round((getters.doneTodos.length / state.todos.length) * 100);
  },
};

const mutations = {
  MARK_COMPLETED(state, todoId){
    state.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
        return todo;
      }
    });
  },
  DELETE_TODO(state, todoId) {
    state.todos = state.todos.filter((todo) => todo.id !== todoId);
  },
  ADD_TODO(state, newtodo) {
    state.todos.push(newtodo);
  },
  [SET_TO_DO]: (state, todos) => {
    state.todos = todos;
  },
};

const actions = {
  async deleteTodo({ commit }, todoId) {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`
      );
      commit("DELETE_TODO", todoId);
    } catch (error) {
      console.log(error);
    }
  },
  async addTodo({ commit }, newTodo) {
    try {
      await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
      commit("ADD_TODO", newTodo);
    } catch (error) {
      console.log(error);
    }
  },
  [GET_TO_DO]: async ({ commit }) => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
      );
      commit(SET_TO_DO, response.data);
    } catch (error) {
      console.log(error);
    }
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
