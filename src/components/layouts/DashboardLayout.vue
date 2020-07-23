<template>
    <div id="wrapper">
        <DashboardHeader/>

        <DashboardSidebar/>

        <div class="content-page">
            <slot/>

            <DashboardFooter/>
        </div>
    </div>

</template>

<script>
    import DashboardHeader from "../dashboard/shared/Header";
    import DashboardSidebar from "../dashboard/shared/Sidebar";
    import DashboardFooter from "../dashboard/shared/Footer";

    export default {
        name: 'DashboardLayout',

        components: {
            DashboardHeader,
            DashboardSidebar,
            DashboardFooter
        },
    }
</script>

<style src="@/assets/dashboard/css/app.min.css"></style>
<style src="@/assets/dashboard/css/style.css"></style>
