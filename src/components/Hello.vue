<template>

<div>
    <h1>Hello {{first_name}}</h1>
    <p> {{full_name}} </p>
    <button @click="fuckMan">Click Me {{count}}</button>
</div>

</template>
<script>

    import { mapState, mapGetters, mapMutations } from 'vuex'

    export default {

        computed: {
            ...mapState(['first_name','last_name','count']),
            ...mapGetters(['full_name'])
        },

        methods: {
            fuckMan() {
                this.$store.commit('increment', 'rafsan')
            }
            
        },

        mounted() {
           // ...mapState(['first_name'])
            //console.log(this.first_name)
            console.log(this.$store)
        }
    } 


</script>