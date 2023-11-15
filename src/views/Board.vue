<script>
import {render,computed, ref} from 'vue';
import Container from "@/components/container.vue";
import {mapGetters, mapState, mapActions, mapMutations} from "vuex";
/*import {useRouter,useRoute} from "vue-router";

const router = useRouter();*/

export default {

    data() {
        return{
            allSelected : false,
            liveExampleVisible:false,
            visibleLiveDemo: false,
            check : [false],
            temp : [],
            totalpages : 0,
            resBody : []
        }
    },
    mounted() {
        // redirect request
        this.changedRes(this.getResBody.board);
        console.log(this.check);
        console.log('mounted');
    },
    methods: {
        ...mapMutations(['beforeDel','beforeCheck']),
        ...mapActions(['deleteResBody','changeCheck']),
        checkAll() {
            if (this.allSelected) {
                for (let i = 0; i < this.check.length; i++) {
                    this.check[i] = true;
                }
                this.beforeCheck(true);
            } else {
                for (let i = 0; i < this.check.length; i++) {
                    this.check[i] = false;
                }
                this.beforeCheck(false);
            }


        },

        deletes() {
            let len = this.check.length;
            let target = this.getResBody.board;
            for (let i = len-1; i >= 0; i-- ){
                if (this.check[i]){
                    this.beforeDel(target[i].no);
                    this.check.splice(i,1);
                    this.totalpages -- ;

                }
            }

            this.liveExampleVisible =false;
            this.changedRes(this.getResBody.board);

        },
        reloadPage(pageNumber) {
            let idx = pageNumber -1 ;
            this.resBody = this.temp[idx];
            console.log("reload");
         },
        changedRes(list){
            this.temp = [];
            this.check = [];
            let res = [];
            let cnt = 0;
            console.log(list)
            list.forEach((item) => {
                res.push(item);
                cnt++ ;
                if (list.length == cnt) {
                    // 마지막값이면
                    this.temp.push(res);
                    this.totalpages ++ ;
                }
                else if (cnt % 10 == 0 ){
                    // 페이지 추가
                    this.temp.push(res);
                    this.totalpages ++;
                    res = [];
                }
                this.check.push(item.check);
            })

            this.resBody = this.temp[0];
        }
        },
    computed: {
        ...mapGetters(['getResBody'])
    }
    ,
    components: {Container}

}


</script>
<template>
    <Container>
        <div class="card-body border-bottom">
            <div style="padding : 5% 5% 0 10%; ">
            <router-link to="board/registration" >
                <CButton color="secondary" >등록</CButton>
            </router-link>
            </div>
            <div class="table-responsive" style="padding : 3% 10% 0 10%; ">


                <CTable striped>
                    <CTableHead>
                        <CTableRow>

                        <th style="width: 20px">
                            <div class="form-check font-size-16 align-middle">
                                <input class="form-check-input" type="checkbox" value="all"
                                       v-model="allSelected" @change="checkAll"/>
                                <label class="form-check-label" for="transactionCheck01"></label>
                            </div>
                        </th>
                            <CTableHeaderCell scope="col">No</CTableHeaderCell>
                            <CTableHeaderCell scope="col">제목</CTableHeaderCell>
                            <CTableHeaderCell scope="col">작성자</CTableHeaderCell>
                            <CTableHeaderCell scope="col">내용</CTableHeaderCell>

                        </CTableRow>
                    </CTableHead>
                    <CTableBody>
                    <CTableRow v-for="(data,index) in this.resBody" :key="index" >
                        <CTableDataCell>
                            <div class="form-check font-size-16" >
                                <input class="form-check-input" type="checkbox" :id=this.check[index] v-model="this.check[index]"
                                       :checked= this.check[index] />
                            </div>
                        </CTableDataCell>

                        <CTableDataCell>{{ data.no }}</CTableDataCell>
                        <CTableDataCell>{{ data.title }}</CTableDataCell>
                        <CTableDataCell>{{ data.username }}</CTableDataCell>
                        <CTableDataCell>{{ data.contents }}</CTableDataCell>

                    </CTableRow>
                    </CTableBody>

                </CTable>
                <CButton color="secondary" @click="() => {liveExampleVisible =true}">삭제</CButton>
                <CModal :keyboard="false" :visible="liveExampleVisible">
                    <CModalHeader>
                        <CModalTitle>삭제 하시겠습니까?</CModalTitle>
                    </CModalHeader>
                    <CModalBody>{{this.check}}</CModalBody>
                    <CModalFooter>
                        <CButton color="primary" @click="() => {liveExampleVisible =false}">아니오</CButton>
                        <CButton color="secondary"  @click="deletes" >예</CButton>
                    </CModalFooter>
                </CModal>


            </div>

            <div class="row">
                <div class="col-lg-12" style="display: flex;justify-content: center"  >
                    <CButtonToolbar class="mb-3" role="group" aria-label="Toolbar with button groups">
                        <CButtonGroup class="me-2" role="group" aria-label="First group">
                            <div class="page-item" v-for="data in this.totalpages" :key="data">
                            <CButton color="secondary" variant="outline" @click="reloadPage(data)">{{ data }}</CButton>
                            </div>
                        </CButtonGroup>
                    </CButtonToolbar>
                </div>

            </div>

        </div>
    </Container>
</template>
<style scoped>
</style>