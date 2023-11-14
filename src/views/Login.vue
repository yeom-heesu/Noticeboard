<template>

    <div align="left" class="login-header">
        <img class="img_style" src="../assets/mainLogo.png"/>
    </div>
    <div class="login_div">

        <div class="login_notice">
            <h1>
                LOGIN
            </h1>
            <br/>
            <label>환영합니다. 관리자 계정으로 로그인해주세요.</label>

        </div>

        <div class="login_main shadow p-3" >
            <div class="mb-3 " ></div>
            <div class="mb-3 row g-3 w-100 mx-auto p-2 ">
                <input type="text" class="form-control" id="inputId" placeholder="아이디를 입력해주세요.">
            </div>

            <div class="mb-3 row g-3 w-100 mx-auto p-2 ">
                <input type="password" class="form-control" id="inputPassword" placeholder="비밀번호를 입력해주세요.">
            </div>
            <router-link to="/board">
                <div class="col-auto p-2">
                    <button type="submit" class="btn btn-dark mb-3 w-100">로그인</button>
                </div>
            </router-link>
        </div>

    </div>

</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>
.img_style {
    width: 10%;
    margin-left: 10%;
    margin-top: 5%;
}

.login_div {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: white;
    left: 0;
    margin-left: 0;
}

.login_notice {
    width: 50%;
    float: left;
    margin-top: 20%;
    margin-left: 10%;
}

.login-header {
    left: 0;
    top: 0;
}

.login_main {
    align-items: center;
    height: 300px;
    width: 50%;
    float: right;
    margin-top: -14%;
    margin-right: 5%;


}

</style>