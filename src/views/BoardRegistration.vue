<script>
import Container from "@/components/container.vue";
import {mapGetters, mapState, mapActions, mapMutations} from "vuex";

export default {
    name: "BoardRegistration",
    components: {Container},
    data() {
        return {
            title: "",
            contents: "",
            username: "",
            registed: ""

        }
    },
    methods: {
        ...mapActions(['addResBody','addCount']),
        ...mapMutations(['setResBody']),
        goToPrePage() { // 이전페이지로 이동
            this.$router.go(-1);
        },
        registration() { //항목추가
            let temp = {no:0, title: "", contents: "", username: "", registed: ""};
            temp.username = this.username;
            temp.contents = this.contents;
            temp.registed = this.registed;
            temp.title = this.title;
            this.setResBody(temp);

            this.$router.go(-1);
        }
    },
    computed: {
        ...mapGetters(['getResBody'])
    }
}
</script>

<template>
    <Container>
        <CCard>
            <CCardBody>
                <div class="mb-3 g-3 ">

                    <label>제목</label>
                    <div>
                        <CFormInput
                                class="mb-3"
                                v-model="title"
                                placeholder="제목을 입력하세요"
                                id="title"

                        />

                    </div>
                    <label>작성자</label>
                    <div>
                        <CFormInput
                                class="mb-3"
                                v-model="username"
                                placeholder="작성자 이름을 입력하세요"
                                id="username"

                        />

                    </div>

                    <label>내용</label>
                    <div>
                    <textarea
                            v-model="contents"
                            class="form-control"
                            name="contents"
                            rows="5"
                            placeholder="내용을 입력하세요"
                    />

                    </div>

                    <div class="hstack gap-2">
                        <CButton color="primary" @click="registration">등록</CButton>
                        <CButton color="danger" type="reset" @click="goToPrePage">취소</CButton>
                    </div>

                </div>
            </CCardBody>
        </CCard>
    </Container>
</template>


<style scoped>

</style>