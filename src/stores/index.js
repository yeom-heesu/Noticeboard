import {createStore, mapMutations} from "vuex";

export default createStore({
    state: {
        check : [],
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
                }
            ]
        },
    },
    mutations: {
        beforeAdd(state,value){
            value.no = state.resBody.totalCount;
            state.resBody.board.push(value);
            state.resBody.totalCount ++;
        },
        beforeDel(state,value){
            state.resBody.board.forEach((item,index)=>{
                if (item.no === value){
                    state.resBody.board.splice(index,1);
                }
            })
            state.resBody.totalCount --;
        },
        beforeaddCheck(state,value){
            state.check.push(value);
        }
    },
    actions: {
        addResBody({commit}){
            commit('beforeAdd');
        },
        deleteResBody({commit}){
            commit('beforeDel');
        },
        addCheck({commit}){
            commit('beforeaddCheck');
        }
    },
    getters: {
        getResBody(state){
            return state.resBody;
        }


    }
})


