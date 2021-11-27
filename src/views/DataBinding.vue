<template>
    <div>
        <!-- {{ }}는 해당 데이터를 가져오는 기능입니다. -->
        <h1>title1 : {{ title1 }}</h1>asdasd
        <h1>title2 : {{ title2 }}</h1>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data () {
        return {
            title1: "데이터",
            title2: "바인딩"
        }
    },
    created () {},
    mounted () {},
    updated () {},
    unmounted () {},
    methods: {}
}
</script>
