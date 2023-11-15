import {createStore} from "vuex";
import {indexOf} from "core-js/internals/array-includes";

export default createStore({
    state: {
        resBody: {
            "totalCount": 1,
            "totalPages": 1,
            "board": [
                {
                    no: 0,
                    title: "테스트입니다.",
                    username: "관리자",
                    registed: "2023-01-01",
                    contents: "룰루랄라루",
                    check: false
                }
            ]
        },
    },
    mutations: {
        beforeAdd(state, value) { // add item
            value.no = state.resBody.totalCount;
            value.check = false;
            state.resBody.board.push(value);
            state.resBody.totalCount++;

        },
        beforeDel(state, value) {
            let cnt = 0;
            console.log(value);
            state.resBody.board.forEach((item, index) => {
                if (item.no === value) {
                    state.resBody.board.splice(index, 1);
                    cnt++;
                }
            })
            console.log("delete in ");

            // state.resBody.totalCount -= cnt;
        },
        beforeCheck(state, value) {
            for (let i = 0; i < state.resBody.board.length; i++) {
                state.resBody.board[i].check = value;
            }
        }

    },
    actions: {
        addResBody({commit}) {
            commit('beforeAdd');
        },
        deleteResBody({commit}) {
            commit('beforeDel');
        },
        changeCheck({commit}){
            commit('beforeCheck');
        }

    },
    getters: {
        getResBody(state) {
            return state.resBody;
        }


    }
})


