<template>
    <div class="container">
        <Header/>
        <hr/>
        <userlist/>
    </div>
</template>

<script>
import Header from "../components/header.vue";
import Userlist from '../components/userlist.vue';
export default {
    components:{
        Header,
        Userlist
    }
}
</script>

<style>

</style>