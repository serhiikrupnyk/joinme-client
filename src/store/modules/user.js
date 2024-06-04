import AuthService from "@/services/AuthService";
import { API_URL } from "@/http/index";
import axios from "axios";

export default {
  state: {
    user: {},
    isAuth: false,
  },
  mutations: {
    setAuth(state, bool) {
      state.isAuth = bool;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        commit("setLoading", true);
        const response = await AuthService.login(email, password);
        localStorage.setItem("token", response.data.accessToken);
        commit("setAuth", true);
        commit("setUser", response.data.user);
      } catch (e) {
        console.error(e.response?.data?.message);
      }
    },

    async registration({ commit }, { firstName, lastName, email, password }) {
      try {
        const response = await AuthService.registration(
          firstName,
          lastName,
          email,
          password
        );
        localStorage.setItem("token", response.data.accessToken);
        commit("setAuth", true);
        commit("setUser", response.data.user);
      } catch (e) {
        console.error(e.response?.data?.message);
      }
    },

    async sendResetLink({ commit }, { email }) {
      try {
        const response = await AuthService.sendResetLink(email);
      } catch (e) {
        console.error(e.response?.data?.message);
      }
    },

    async resetPassword({ commit }, { id, accessToken, password }) {
      try {
        const response = await AuthService.resetPassword(
          id,
          accessToken,
          password
        );
      } catch (e) {
        console.error(e.response?.data?.message);
      }
    },

    async logout({ commit }) {
      try {
        const response = await AuthService.logout();
        localStorage.removeItem("token");
        commit("setAuth", false);
        commit("setUser", {});
      } catch (e) {
        console.error(e.response?.data?.message);
      }
    },

    async checkAuth({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        commit("setAuth", true);
        commit("setUser", response.data.user);
      } catch (e) {
        console.error(e.response?.data?.message);
      }
    },

    async updateUser({ commit }, { firstName, lastName, email }) {
      try {
        const response = await axios.post(`${API_URL}/update-user`, {
          firstName,
          lastName,
          email,
        });
        commit("setUser", response.data.user);
      } catch (e) {
        console.error(e.response?.data?.message);
      }
    },
  },
  getters: {
    user: (state) => state.user,
    isAuth: (state) => state.isAuth,
  },
};
