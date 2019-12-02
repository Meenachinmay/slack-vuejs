import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//state

const state = {
    currentUser: null
}

// mutations

const mutations = {
    SET_USER(state, user){
        state.currentUser = user;
    }
}

// actoins
const actions = {
    setUser(state, user){
        state.commit('SET_USER', user);
    }
}

// getters
const getters = {
    currentUser: state => state.currentUser,
}

// create a vuex store
const store = Vuex.store = new Vuex.Store({
    state, 
    mutations,
    actions,
    getters
});

export default store;