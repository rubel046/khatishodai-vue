<template>
    <v-app>
        <ValidationObserver ref="form">
            <div class="main-login">
                <div class="login m-auto bg-white overflow-hidden rounded p-3">
                    <a href="Javascript:void(0)" @click="closeModal" id="login-close">&times;</a>
                    <div class="header-text overflow-hidden mt-3 border-bottom pb-2">
                        <span class="float-left font-weight-bold">Create <a href="">Account</a> ?</span>
                        <span class="float-right font-weight-bold">
                        <a href="Javascript:void(0)" @click="openSignUpModal"
                           class="text-success">Register</a> Here</span>
                    </div>
                    <div class="login-form p-3">
                        <form v-on:submit.prevent="handleSubmit">
                            <div class="form-group pt-2">
                                <label for="username" class="font-weight-light">Phone Number Or Email Address</label>
                                <ValidationProvider v-slot="{ errors }" name="Email or Phone" rules="required">
                                    <input v-model="data.username" type="text" id="username"
                                           placeholder="+88 01xxxxxxxxx" class="form-control">
                                    <small class="text-danger">{{ errors[0] }}</small>
                                </ValidationProvider>
                            </div>

                            <div class="form-group ">
                                <a @click="showPassword = !showPassword" class="position-relative show-password"><i
                                        class="far fa-eye-slash"></i></a>
                                <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
                                    <input v-model="data.password" :type="showPassword ? 'text' : 'password'"
                                           id="password" class="form-control position-relative"
                                           aria-describedby="passwordHelp"
                                           placeholder="* * * * * *">
                                    <small class="text-danger">{{ errors[0] }}</small>
                                </ValidationProvider>
                            </div>

                            <v-btn type="submit"
                                   color="#28a745"
                                   class="btn btn-success w-100 text-white"
                                   :loading="formSubmitLoading"
                            >
                                Sign In
                            </v-btn>
                        </form>
                        <div class="forget-password mt-2">
                            <a href="" class="text-success">Forgot Password ?</a>
                        </div>
                        <div class="or-signin">
                            <p class="text-muted mt-2">or sign In With</p>
                            <a href="" class="btn btn-danger float-left">Sign In With Google</a>
                            <a href="" class="btn btn-info float-right">Sign In With Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </ValidationObserver>
    </v-app>
</template>

<script>
    import "../../utilities/validationRules";
    import {ValidationObserver, ValidationProvider} from "vee-validate";
    import SignUp from "./SignUp";
    import helper from "../../utilities/helper";

    export default {
        name: 'Login',

        components: {
            ValidationProvider,
            ValidationObserver,
        },

        data: () => ({
            formSubmitLoading: false,
            showPassword: false,

            data: {},

        }),

        methods: {
            handleSubmit: function () {
                this.formSubmitLoading = true;

                this.$refs.form.validate().then(success => {
                    if (success) {
                        this.$store.dispatch('login', this.data)
                            .then((res) => {
                                helper.toastApiResponse(res)
                                if (res.data.success) {
                                    this.closeModal();
                                }
                            })
                            .catch(err => console.log(err))
                            .finally(() => this.formSubmitLoading = false);
                    }
                })
            },

            openSignUpModal() {
                this.closeModal();

                this.$modal.show(SignUp, {}, {
                    width: '800',
                    draggable: false,
                    height: 'auto'
                });
            },

            closeModal(res = {status: 'cancel'}) {
                this.$emit('close', res);
            },
        }
    }
</script>
