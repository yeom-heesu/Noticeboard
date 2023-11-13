<script>
import pageHeader from "@/components/pageHeader.vue";
import pageFooter from "@/components/pageFooter.vue";

export default {

    name : "Container",
    components : {
        pageHeader,
        pageFooter
    }
}


</script>
<template>
    <pageHeader/>
    <div class="wrapper d-flex flex-column bg-light" style="overflow: hidden; min-height: 90vh">
        <slot style="overflow: hidden"/>
    </div>
    <pageFooter/>
</template>
<style scoped>

</style>