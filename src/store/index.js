import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 定义一个name，以供全局使用
        name: '用户a58878',
        // 定义一个number，以供全局使用
        number: 0,
        // 定义一个list，以供全局使用
        cartData: []
    },
    getters: {
        getMessage(state) {
            return `This${state.name}`;
        }
    },
    mutations: {
        addCartGoods(state, payload) {
            var counts = state.cartData.length;
            var data = payload.addData;
            for (let i = 0; i < counts; i++) {
                if (data.id == state.cartData[i].id) {
                    state.cartData[i].count++;
                }
            }
        },
        reduceCartGoods(state, payload) {
            var counts = state.cartData.length;
            var data = payload.reduceData;
            for (let i = 0; i < counts; i++) {
                if (data.id == state.cartData[i].id) {
                    state.cartData[i].count--;
                }
            }
        },
        changeName(state, proload) {
            state.name = proload.newName;
        }
    },
    actions: {
        setName(content, payload) {
            return new Promise(resolve => {
                setTimeout(() => {
                    content.commit('changeName', { newName: payload.newName })
                }, 2000)
            });
        }
    }
});

export default store;