<template>
    <div class="left-side-menu">

        <div class="slimscroll-menu">

            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <div class="profile text-center">
                    <img src="@/assets/dashboard/images/avater.png" class="rounded-circle w-50" alt="">
                    <h5 class="text-white font-weight-light">{{authUser.name}}</h5>
                </div>
                <hr>
                <ul class="metismenu" id="side-menu">
                    <router-link to="/dashboard" exact class="text-white d-block">
                        <img src="@/assets/dashboard/images/icon1.png" alt=""> Dashboard
                    </router-link>

                    <router-link to="/dashboard/messages" exact class="text-white d-block">
                        <img src="@/assets/dashboard/images/icon2.png" alt=""> Messages
                    </router-link>

                    <router-link to="/dashboard/orders" exact class="text-white d-block">
                        <img src="@/assets/dashboard/images/icon1.png"> Order History
                    </router-link>

                    <router-link to="/dashboard/transaction-history" exact class="text-white d-block">
                        <img src="@/assets/dashboard/images/icon2.png"> Transition History
                    </router-link>

                    <router-link to="/dashboard/wishlist" exact class="text-white d-block">
                        <img src="@/assets/dashboard/images/icon1.png"> Wishlist
                    </router-link>

                    <router-link to="/dashboard/profile" exact class="text-white d-block">
                        <img src="@/assets/dashboard/images/icon1.png"> Profile & Password
                    </router-link>

                    <router-link to="/dashboard/coupons" exact class="text-white d-block">
                        <img src="@/assets/dashboard/images/icon2.png"> My Coupon
                    </router-link>

                    <a href="" class="text-white d-block"><img src="assets/images/icon1.png" alt=""> Support Ticket</a>
                </ul>

            </div>

            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: 'DashboardSidebar',

        data: () => ({}),

        computed: mapState({
            authUser: state => state.user
        })
    }
</script>
