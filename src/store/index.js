import Vuex from 'vuex'
import {getAuthFromCookie, getUserFromCookie} from "@/utils/cookies";

export const store = new Vuex.Store({
    state: {
        username: getUserFromCookie() || '',
        token: getAuthFromCookie() || '',
    },
    getters : {
        isLogin(state) {
            return state.username !== '';
        }
    },
    mutations : {
        setUsername(state, username) {
            state.username = username;
        },
        clearUsername(state, username) {
            state.username ='';
        },
        setToken(state, token) {
            state.token = token;
        }
    }
});