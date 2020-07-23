<template>
    <v-app>
        <component :is="layout">
            <Notification></Notification>

            <modals-container/>

            <router-view/>
        </component>
    </v-app>
</template>

<script>
    import Notification from "./components/shared/Notification";

    const DEFAULT_LAYOUT = 'default';

    export default {
        name: 'App',

        components: {
            Notification
        },

        computed: {
            layout() {
                return (this.$route.meta.layout || DEFAULT_LAYOUT) + '-layout'
            }
        }
    };
</script>
