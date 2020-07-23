<template>
    <div>
        <DefaultHeader/>

        <slot/>

        <DefaultFooter/>
    </div>
</template>

<script>
    import DefaultHeader from "../market-place/shared/Header";
    import DefaultFooter from "../market-place/shared/Footer";

    export default {
        name: 'DefaultLayout',

        components: {
            DefaultHeader,
            DefaultFooter,
        },
    }
</script>


<style lang="scss">
    @import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600&display=swap");

    .v-application {
        font-family: "Raleway" !important;
    }

    .v-application--wrap {
        min-height: 0;
    }
</style>
