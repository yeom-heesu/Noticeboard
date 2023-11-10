import {createStore, mapMutations} from "vuex";

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
                    contents: "룰루랄라루"
                }
            ]
        },
    },
    mutations: {
        setResBody(state,value){
            value.no = state.resBody.totalCount;
           state.resBody.board.push(value);
            state.resBody.totalCount ++;
        },
        addCnt(state,value){
            state.resBody.totalCount =+ value ;
        }
    },
    actions: {
        addResBody({commit}){
            commit('setResBody');
        },
        addCount({commit}){
            commit('addCnt');
        }
    },
    getters: {
        getResBody(state){
            return state.resBody;
        }


    }
})


