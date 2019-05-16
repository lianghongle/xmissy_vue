<template>
    <div class="user-detail">
        {{user.id}}
    </div>
</template>

<style>

</style>

<script>

    export default {
        data() {
            return {
                user:{
                    id:0
                }
            }
        },
        created(){
            this.user.id = this.$route.params.id
        },
        components: {
        },
        methods:{
            onSubmit(){

            }
        }
    };
</script>
