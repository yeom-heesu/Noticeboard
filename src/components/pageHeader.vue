<script setup>
</script>

<template>
    <CCard class="text-center">
        <CCardHeader class="headerstyle">
            <div>
                <router-link to="/">Home |</router-link>
                <router-link to="/about">About |</router-link>
                <router-link to="/board">Board</router-link>
            </div>
        </CCardHeader>
    </CCard>

</template>

<style scoped>
.headerstyle{
    background-color: #fde1e1;
    height: 100%;
    width: 100%;
}

</style>