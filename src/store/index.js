import Vue from 'vue'
import Vuex from 'vuex'

import User from './modules/user'
import System from './modules/system'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{

    },
    //同步时间
    //this.$store.commit('mutations.func', params)
    mutations:{
        updateState(state, payload){
            state[payload.data.stateName] = payload.data.stateValue
        },
        login(state, payload) {
            console.log('commit.login')
            sessionStorage.setItem('accessToken', payload.accessToken)
            sessionStorage.setItem('isLogin', true)
        },
        logout(state){
            console.log('commit.logout')
            sessionStorage.removeItem('accessToken')
            sessionStorage.removeItem('isLogin')
        }
    },
    getters:{
        //this.$store.getters.getAccessToken
        getAccessToken(state){
            return state.accessToken
        },
        isLogin(state){
            return sessionStorage.getItem('isLogin') == 'true'
        }
    },
    //异步事件,提交mutations
    //也可以任意异步操作
    //this.$store.dispatch('actions.func', params)
    actions:{
        inc(context, params){
            context.commit('update')
        },
        updateState(context, params){
            context.commit('updateState', params)
        },
        logout(context, params){
            context.commit('logout', params)
        }
    },
    modules:{
        User,
        System
    }
})
