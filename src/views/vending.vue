<template>
    <div>
        <button :key="coin" v-for="coin in coins">{{ coin }}원 투입</button>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data () {
        return {
            coins: [100, 500, 1000]
        }
    },
    created () {},
    mounted () {},
    updated () {},
    unmounted () {},
    methods: {}
}
</script>
