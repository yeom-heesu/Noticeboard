<script>
import {computed, ref} from 'vue';
import Container from "@/components/container.vue";
import {mapGetters, mapState, mapActions, mapMutations} from "vuex";


export default {
    data() {
        return{
            allSelected : false,
            check : [],
            liveExampleVisible:false,
            visibleLiveDemo: false,
        }
    },
    methods: {
        ...mapMutations(['beforeDel']),
        ...mapActions(['deleteResBody']),
        checkAll() {
            if (this.allSelected) {
                for (let i = 0; i < this.getResBody.totalCount; i++) {
                    this.check[i] = true;
                }
            } else {
                for (let i = 0; i < this.getResBody.totalCount; i++) {
                    this.check[i] = false;
                }
            }

        },
        deletes() {
            let len = this.check.length;
            for (let i = 0; i < len; i++ ){
                if (this.check[i]){
                    this.beforeDel(i);
                }
            }

            this.liveExampleVisible =false;
        },
        reloadPage(pageNumber) {
        //
        //     if (pageNumber == 1) {
        //         state.value.resBody = state.value.resDummy1;
        //     } else {
        //         state.value.resBody = state.value.resDummy2;
        //     }
        //     for (let i = 0; i < state.value.resBody.totalCount; i++) {
        //         state.value.check[i] = false;
        //     }
        //     state.value.allSelected = false;
        // }
    }},
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

            <div class="table-responsive" style="padding-left: 100px ">
                <router-link to="board/registration">
                    <CButton color="primary">등록</CButton>
                </router-link>
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
                    <CTableRow v-for="data in getResBody.board" :key="data.no" >
                        <CTableDataCell>
                            <div class="form-check font-size-16" >
                                <input class="form-check-input" type="checkbox" :id=this.check[data.no] v-model="check[data.no]"
                                       :checked= this.check[data.no] />
                            </div>
                        </CTableDataCell>

                        <CTableDataCell>{{ data.no }}</CTableDataCell>
                        <CTableDataCell>{{ data.title }}</CTableDataCell>
                        <CTableDataCell>{{ data.username }}</CTableDataCell>
                        <CTableDataCell>{{ data.contents }}</CTableDataCell>


                    </CTableRow>
                    </CTableBody>

                </CTable>
                <CButton color="danger" @click="() => {liveExampleVisible =true}">삭제</CButton>
                <CModal :keyboard="false" :visible="liveExampleVisible">
                    <CModalHeader>
                        <CModalTitle>삭제 하시겠습니까?</CModalTitle>
                    </CModalHeader>
                    <CModalBody>{{check}}</CModalBody>
                    <CModalFooter>
                        <CButton color="primary" @click="() => {liveExampleVisible =false}">아니오</CButton>
                        <CButton color="secondary"  @click="deletes" >예</CButton>
                    </CModalFooter>
                </CModal>


            </div>

            <div class="row">
                <div class="col-lg-12">
                    <div class="pagination pagination-rounded justify-content-center mt-2 mb-5">
                        <CPagination aria-label="Page navigation example">
                            <CPaginationItem href="#">Previous</CPaginationItem>

                            <li class="page-item" v-for="data in getResBody.totalPages" :key="data">
                                <CPaginationItem @click="reloadPage(data)">{{ data }}</CPaginationItem>
                            </li>
                            <CPaginationItem href="#">Next</CPaginationItem>
                        </CPagination>
                    </div>
                </div>

            </div>

        </div>
    </Container>
</template>
<style scoped>

</style>