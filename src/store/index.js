import { createStore } from "vuex";
import user from './modules/user';

const store = createStore({
    state: {
        error: null,
        isLoading: false
    },

    getters: {
        error: (state) => state.error,
        isLoading: (state) => state.isLoading
    },

    mutations: {
        setError(state, error) {
            state.error = error
        },
        clearError(state) {
            state.error = null
        },
        setLoading(state, loading) {
            state.isLoading = loading;
        }
    },

    actions: {},

    modules: {
        user
    }
});

export default store;