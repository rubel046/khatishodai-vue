import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],

    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: {}
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, data) {
            state.status = 'success'
            state.token = data.token
            state.user = data.user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
        },
    },
    actions: {
        login({commit}, credential) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios.post('account/login', credential,)
                    .then(resp => {
                        if (resp.data.success) {
                            const token = resp.data.token
                            localStorage.setItem('token', token)
                            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

                            commit('auth_success', resp.data)
                        }
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        register({commit}, data) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios.post('account/register', data,)
                    .then(resp => {
                        //  const token = resp.data.token
                        //  const user = resp.data.user
                        // localStorage.setItem('token', token)
                        //  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                        //  commit('auth_success', token, user)
                        resolve(resp)
                    })
                    .catch(err => {
                        commit('auth_error', err)
                        // localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        logout({commit}) {
            return new Promise((resolve) => {
                commit('logout')
                axios.post('account/logout')
                    .then(resp => {
                        localStorage.removeItem('token')
                        sessionStorage.clear();

                        delete axios.defaults.headers.common['Authorization']

                        resolve(resp)
                    })
            })
        }
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
    }
})
