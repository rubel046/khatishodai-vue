<template>
    <div>
        <div class="header-top border-bottom">
            <div class="container">
                <ul class="nav justify-content-end">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Help<i class="fas fa-sm fa-question"></i> </a>
                    </li>
                    <li class="nav-item">
                        <a href="" class="nav-link">BN/Eng</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-sm fa-user"></i> Account
                        </a>
                        <div class="dropdown-menu p-3" aria-labelledby="navbarDropdown">
                            <div class="welcome-part overflow-hidden">
                                <a class="dropdown-item d-block pb-3 font-weight-bold" href="#">Welcome To
                                    Khatisadai</a>

                                <v-btn small v-if="loggedIn" @click="logout">
                                    Log out
                                </v-btn>

                                <template v-else>
                                    <a class="btn active btn-outline-success btn-sm float-left"
                                       @click="openSignUpModal">Join</a>
                                    <a class="btn btn-outline-success btn-sm float-right" @click="openLoginModal">Sign
                                        In</a>
                                </template>
                            </div>
                            <div class="dropdown-divider mt-3 mb-3"></div>

                            <router-link to="/dashboard" exact v-if="loggedIn"><span>Dashboard</span></router-link>

                            <a href="" class="d-block text-dark pb-3">Message Center</a>
                            <a href="" class="d-block text-dark pb-3">Wish List</a>
                            <a href="" class="d-block text-dark pb-3">My Favourite List</a>
                            <a href="" class="d-block text-dark pb-3">My Cupons</a>
                            <a href="" class="d-block text-dark pb-3">Invite friends to give BDT 100</a>
                        </div>
                    </li>
                </ul>
            </div><!-- container end -->
        </div>
        <div class="logo-search-section mt-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-lg-3 col-xl-3 col-sm-3 col-6">
                        <img src="@/assets/image/logo.png" class="w-50" alt="Logo">
                    </div>
                    <div class="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-7 mt-2">
                        <form action="" method="post">
                            <input type="text" placeholder="Search For Products.." size="400"
                                   class="form-control rounded-pill position-relative">
                            <button type="submit" class="btn btn-success"><i class="fas fa-lg fa-search text-white"></i>
                            </button>
                        </form>
                    </div>
                    <div class="col-6 col-md-2 col-sm-2 col-lg-2 col-xl-2 mt-2">
                        <a href=""><img src="@/assets/image/cart-icon.png" alt=""><sup
                                class="badge badge-success">0</sup></a>
                        <a href=""><img src="@/assets/image/heart-icon.png" alt=""><sup
                                class="badge badge-success">10</sup></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Login from "../../auth/Login";
    import SignUp from "../../auth/SignUp";
    import helper from "../../../utilities/helper";

    export default {
        name: 'DefaultHeader',

        data: () => ({
            loggedIn: false,
        }),

        watch: {
            isLoggedIn: {
                immediate: true,
                deep: false,
                handler(newValue) {
                    this.loggedIn = newValue;
                }
            }
        },

        methods: {
            openLoginModal() {
                this.$modal.show(Login, {}, {
                    width: '500',
                    draggable: true,
                    height: 'auto'
                });
            },

            openSignUpModal() {
                this.$modal.show(SignUp, {}, {
                    width: '800',
                    draggable: false,
                    height: 'auto'
                });
            },

            logout() {
                this.$store.dispatch('logout')
                    .then((res) => {
                        console.log(res)
                        helper.toastApiResponse(res)
                    })
                    .catch(err => console.log(err))
            }
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            }
        },
    }
</script>
