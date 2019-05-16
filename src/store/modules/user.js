export default {
    state:{
        accessToken:'',
        user:null
    },
    //同步时间
    mutations:{
        update(state, payload){
            state.user = payload.data
        },
        login(state, payload){
            state.user = payload.data
        }
    },
    gettters:{
        //this.$store.getters.getAccessToken
        getAccessToken(state){
            return state.accessToken
        }
    },
    //异步事件,提交mutations
    //也可以任意异步操作
    actions:{
        //this.$store.dispatch('inc', params)
        inc(context, params){
            context.commit('update')
        }
    }
}
