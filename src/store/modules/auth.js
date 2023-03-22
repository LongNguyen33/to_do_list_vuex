import { SET_AUTHENTICATED } from "../types/actions.type";
import { AUTH_KEY } from "@/constants/app";
import { setLocalStorageJson, getLocalStorageJson } from "@/utils/localStorage";

const state = {
  isAuthenticated: getLocalStorageJson(AUTH_KEY),
};

const getters = {
  isAuthenticated: ({ isAuthenticated }) => isAuthenticated,
};

const mutations = {
  [SET_AUTHENTICATED]: (state, status) => {
    state.isAuthenticated = status;
    // Lưu giá trị này vào trong local storage để khi load lại trang, giá trị không bị reset.
    setLocalStorageJson(AUTH_KEY, status);
  },
};

const actions = {
  [SET_AUTHENTICATED]: ({ commit }, status) => {
    commit(SET_AUTHENTICATED, status);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
