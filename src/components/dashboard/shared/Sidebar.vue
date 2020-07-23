<template>
    <div class="left-side-menu">

        <div class="slimscroll-menu">

            <!--- Sidemenu -->
            <div id="sidebar-menu">
                <div class="profile text-center">
                    <img src="@/assets/dashboard/images/avater.png" class="rounded-circle w-50" alt="">
                    <h5 class="text-white font-weight-light">Md Rahman</h5>
                </div>
                <hr>
                <ul class="metismenu" id="side-menu">

                    <li class="menu-title">Navigation</li>
                  <router-link to="/dashboard" exact class="text-white d-block">
                    <img src="@/assets/dashboard/images/icon1.png" alt=""> Dashboard
                  </router-link>

                  <router-link to="/dashboard/messages" exact class="text-white d-block">
                    <img src="@/assets/dashboard/images/icon2.png" alt=""> Messages
                  </router-link>

                    <router-link to="/dashboard/orders" exact class="text-white d-block">
                        <img src="@/assets/dashboard/images/icon1.png" > Order History
                    </router-link>

                    <router-link to="/dashboard/profile" exact class="text-white d-block">
                        <img src="@/assets/dashboard/images/icon1.png" > Profile & Password
                    </router-link>

                    <router-link to="/dashboard/coupons" exact class="text-white d-block">
                        <img src="@/assets/dashboard/images/icon2.png" > My Coupon
                    </router-link>

                    <a href="transaction.html" class="text-white d-block"><img src="@/assets/dashboard/images/icon2.png"
                                                                               alt=""> Transition History</a>
                    <a href="wishlist.html" class="text-white d-block"><img src="@/assets/dashboard/images/icon1.png"
                                                                            alt=""> Wishlist</a>
                    <a href="purchase.html" class="text-white d-block"><img src="@/assets/dashboard/images/icon2.png"
                                                                            alt=""> Purchase Product</a>
                    <a href="profile.html" class="text-white d-block"><img src="@/assets/dashboard/images/icon1.png"
                                                                           alt=""> Profile & Password</a>
                    <a href="cupon.html" class="text-white d-block"><img src="@/assets/dashboard/images/icon2.png"
                                                                         alt=""> My Coupon</a>
                    <a href="" class="text-white d-block"><img src="@/assets/dashboard/images/icon1.png" alt=""> Support
                        Ticket</a>

                </ul>

            </div>
            <!-- End Sidebar -->

            <div class="clearfix"></div>

        </div>
        <!-- Sidebar -left -->

    </div>
</template>

<script>
    export default {
        name: 'DashboardSidebar',

        data: () => ({}),
    }
</script>
