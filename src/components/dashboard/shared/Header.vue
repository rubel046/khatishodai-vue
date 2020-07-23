<template>
    <div class="navbar-custom bg-white">
        <ul class="list-unstyled topnav-menu float-right mb-0"><!-- Header Right Start -->
            <li class="dropdown notification-list">
                <a class="nav-link dropdown-toggle nav-user mr-0 waves-effect" data-toggle="dropdown" href="#"
                   role="button" aria-haspopup="false" aria-expanded="false">
                    <img src="@/assets/dashboard/images/users/avatar-1.jpg" alt="user-image" class="rounded-circle">
                    <span class="d-none d-sm-inline-block ml-1 text-dark">Alex M.</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                    <!-- item-->
                    <div class="dropdown-header noti-title">
                        <h6 class="text-overflow m-0">Welcome !</h6>
                    </div>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="mdi mdi-account-outline"></i>
                        <span>Wish List</span>
                    </a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="mdi mdi-account-outline"></i>
                        <span>My Favourite List</span>
                    </a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="mdi mdi-account-outline"></i>
                        <span>My Cupons</span>
                    </a>
                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item">
                        <i class="mdi mdi-account-outline"></i>
                        <span>Profile & Password</span>
                    </a>

                    <div class="dropdown-divider"></div>

                    <!-- item-->
                    <a href="javascript:void(0);" class="dropdown-item notify-item" @click="logout">
                        <i class="mdi mdi-logout-variant"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </li>

            <li class="dropdown notification-list">
                <a href="javascript:void(0);" class="nav-link right-bar-toggle waves-effect">
                    <i class="mdi mdi-settings noti-icon"></i>
                </a>
            </li>

        </ul> <!-- Header right end -->

        <!-- LOGO -->
        <div class="logo-box">
            <router-link to="/" exact class="logo text-center">
                 <span class="logo-lg">
                        <img src="@/assets/dashboard/images/logo.png" alt="" height="50">
                    </span>
            </router-link>

            <!--            <a href="index.html" class="logo text-center">-->
            <!--                   -->
            <!--            </a>-->
        </div><!-- .logo-box end -->

        <ul class="list-unstyled topnav-menu topnav-menu-left m-0 top-menu"><!-- Header Middle Start -->
            <li>
                <button class="button-menu-mobile waves-effect">
                    <img src="@/assets/dashboard/images/collapse.png" alt="">
                </button>
            </li>

            <li class="admin-search">
                <input type="text" class="form-control search rounded-pill" name="search" placeholder="Search Product">
            </li>


        </ul><!-- Header Middle End -->

    </div><!-- .navbar-custom end -->
</template>

<script>
    import helper from "../../../utilities/helper";

    export default {
        name: 'DashboardHeader',

        methods: {
            logout() {
                this.$store.dispatch('logout')
                    .then((res) => {
                        helper.toastApiResponse(res)
                    })
                    .catch(err => helper.handleError(err))
                    .finally(() => this.$router.push('/'));
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            }
        },
    }
</script>
