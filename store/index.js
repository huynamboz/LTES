import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {

        },
        mutations: {

        },
        actions: {

        },
        getters: {
            isAuthenticated(state) {
                return state.auth.loggedIn
            },

            loggedInUser(state) {
                return state.auth.user
            }
        },
        modules: {
        }
    });
};

export default createStore