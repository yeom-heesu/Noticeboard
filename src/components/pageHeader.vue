<script setup>
</script>

<template>
    <CCard class="text-center">
        <CCardHeader class="headerstyle">
            <div>

                <router-link to="/">Home </router-link>
                |
                <router-link to="/about">About</router-link>
                |
                <router-link to="/board">Board</router-link>
            </div>
        </CCardHeader>
    </CCard>

</template>

<style scoped>
.headerstyle{
    background-color: gray;
    height: 100%;
    width: 100%;
    color : #ba3270;
}
a {
    color : white;
    text-decoration: none;
    /*font-size: large;*/

}
a:hover {
    color: black;
}
</style>