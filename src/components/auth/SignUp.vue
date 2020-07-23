<template>
    <v-app>
        <ValidationObserver ref="form">
            <div class="main-register">
                <div class="register bg-white m-auto overflow-hidden p-3">
                    <a href="Javascript:void(0)" @click="closeModal" id="register-close">&times;</a>
                    <div class="header-text overflow-hidden mt-3">
                        <span class="float-left font-weight-bold">Create <a href="">Account ?</a></span>
                        <span class="float-right font-weight-bold">Already Member?
                            <a href="Javascript:void(0)" @click="openLoginModal"
                               class="text-success">Login</a> Here</span>
                    </div>
                    <div class="register-form p-3">
                        <form v-on:submit.prevent="handleSubmit">
                            <div class="form-group">
                                <label for="username" class="font-weight-light">Phone Number Or Email Address</label>
                                <ValidationProvider v-slot="{ errors }" name="Email or Phone" rules="required">
                                    <input v-model="data.username" type="text" id="username"
                                           placeholder="+88 01xxxxxxxxx" class="form-control">
                                    <small class="text-danger">{{ errors[0] }}</small>
                                </ValidationProvider>
                            </div>

                            <a href="Javascript:void(0)" @click="sendOTP" :loading="OTPSendLoading"
                               class="btn btn-outline-success d-block">Send To Get Sms Code</a>

                            <span class="position-relative text-white bg-success arrow">>></span>
                            <div class="form-group">
                                <label for="verification" class="font-weight-light">Send Verification Code</label>
                                <ValidationProvider v-slot="{ errors }" name="Verification Code" rules="required">
                                    <input v-model="data.verification_token" type="number" id="verification"
                                           class="form-control"
                                           placeholder="4 digits">
                                    <small class="text-danger">{{ errors[0] }}</small>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="name" class="font-weight-light">Full Name</label>
                                <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
                                    <input v-model="data.name" type="text" id="name" class="form-control"
                                           placeholder="Your Name">
                                    <small class="text-danger">{{ errors[0] }}</small>
                                </ValidationProvider>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <ValidationProvider v-slot="{ errors }" name="Password" rules="required">
                                    <input v-model="data.password" :type="showPassword ? 'text' : 'password'"
                                           id="password"
                                           class="form-control position-relative" aria-describedby="passwordHelp"
                                           placeholder="* * * * * *">
                                    <a class="position-relative show-password" @click="showPassword = !showPassword"><i
                                            class="far fa-eye-slash"></i></a>
                                    <small class="text-danger" style="margin-left: -20px">{{ errors[0] }}</small>
                                </ValidationProvider>

                                <small id="passwordHelp" class="form-text text-muted">Please Enter 6-20 Character(A-Z,
                                    a-z, 1-0) only</small>
                            </div>

                            <v-btn type="submit"
                                   class="btn btn-success w-100 text-white"
                                   color="#28a745"
                                   :loading="formSubmitLoading"
                            >
                                Sign Up
                            </v-btn>
                        </form>
                        <div class="or-signup">
                            <p class="text-muted mt-2">or sign up</p>
                            <a href="" class="btn btn-danger float-left">Sign Up With Google</a>
                            <a href="" class="btn btn-primary float-right">Sign Up With Facebook</a>
                        </div>
                    </div><!-- .register-form end -->
                </div><!-- .register end -->
            </div>
        </ValidationObserver>

        <!--        <ValidationObserver ref="form">-->
        <!--            <div class="main-register">-->
        <!--                <div class="register bg-white m-auto overflow-hidden p-3">-->
        <!--                    <a href="" id="register-close">&times;</a>-->
        <!--                    <div class="header-text overflow-hidden mt-3">-->
        <!--                        <span class="float-left font-weight-light">Create Your Khatisodai Account</span>-->
        <!--                        <span class="float-right font-weight-light">Already Member?-->
        <!--                        <a class="text-success">Login</a> Here</span>-->
        <!--                    </div>-->

        <!--                    <div class="register-form p-3">-->
        <!--                        <form v-on:submit.prevent="handleSubmit">-->
        <!--                            <div class="form-group">-->
        <!--                                <label for="phone" class="font-weight-light">Phone Number Or Email</label>-->
        <!--                                <ValidationProvider v-slot="{ errors }" name="Email or Phone" rules="required">-->
        <!--                                    <input v-model="data.username" type="text" name="phone"-->
        <!--                                           placeholder="+88 01xxxxxxxxx" id="phone" class="form-control">-->
        <!--                                    <small class="text-danger">{{ errors[0] }}</small>-->
        <!--                                </ValidationProvider>-->
        <!--                            </div>-->

        <!--                            <v-btn-->
        <!--                                    class="btn btn-outline-success d-block"-->
        <!--                                    color="#28a745"-->
        <!--                                    :loading="OTPSendLoading"-->
        <!--                                    @click="sendOTP"-->
        <!--                            >-->
        <!--                                Send To Get Sms Code-->
        <!--                            </v-btn>-->

        <!--                            <span class="position-relative text-white bg-success arrow">>></span>-->
        <!--                            <div class="form-group">-->
        <!--                                <label for="verification" class="font-weight-light">Send Verification Code</label>-->
        <!--                                <input type="number" id="verification" name="verification" class="form-control"-->
        <!--                                       placeholder="4 digits">-->
        <!--                            </div>-->
        <!--                            <div class="form-group">-->
        <!--                                <label for="name" class="font-weight-light">Full Name</label>-->
        <!--                                <input v-model="data.firstName" type="text" id="name" class="form-control"-->
        <!--                                       placeholder="Your Name">-->
        <!--                            </div>-->
        <!--                            <div class="form-group">-->
        <!--                                <div class="row">-->
        <!--                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">-->
        <!--                                        <label for="date">Birthday</label>-->
        <!--                                        <input type="date" id="date" name="date" class="form-control" placeholder="">-->
        <!--                                    </div>-->
        <!--                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">-->
        <!--                                        <label for="gender">Gender</label>-->
        <!--                                        <select name="gender" id="gender" class="form-control">-->
        <!--                                            <option value="">Gender</option>-->
        <!--                                            <option value="">Male</option>-->
        <!--                                            <option value="">Female</option>-->
        <!--                                            <option value="">Other's</option>-->
        <!--                                        </select>-->
        <!--                                    </div>-->
        <!--                                </div>-->
        <!--                            </div>-->
        <!--                            <div class="form-group">-->
        <!--                                <label for="password">Password</label>-->
        <!--                                <input v-model="data.password" type="password" id="password"-->
        <!--                                       class="form-control position-relative" aria-describedby="passwordHelp"-->
        <!--                                       placeholder="* * * * * *">-->
        <!--                                <a href="" class="position-relative show-password"><i class="far fa-eye-slash"></i></a>-->
        <!--                                <small id="passwordHelp" class="form-text text-muted">Please Enter 6-20 Character(A-Z,-->
        <!--                                    a-z, 1-0) only</small>-->
        <!--                            </div>-->
        <!--                            <div class="form-group agree">-->
        <!--                                <input type="checkbox" id="terms" name="terms">-->
        <!--                                <span>I agree to the Khatisadai’s <a href=""-->
        <!--                                                                     class="text-success">Terms</a> of use and <a-->
        <!--                                        href="" class="text-success">Privacy Policy</a></span>-->
        <!--                            </div>-->


        <!--                            <v-btn type="submit"-->
        <!--                                   class="btn btn-success w-100 text-white"-->
        <!--                                   color="#28a745"-->
        <!--                                   :loading="formSubmitLoading"-->
        <!--                            >-->
        <!--                                Sign Up-->
        <!--                            </v-btn>-->
        <!--                        </form>-->

        <!--                        <div class="or-signup">-->
        <!--                            <p class="text-muted mt-2">or sign up</p>-->
        <!--                            <a href="" class="btn btn-danger float-left">Sign Up With Google</a>-->
        <!--                            <a href="" class="btn btn-primary float-right">Sign Up With Facebook</a>-->
        <!--                        </div>-->
        <!--                    </div>&lt;!&ndash; .register-form end &ndash;&gt;-->
        <!--                </div>&lt;!&ndash; .register end &ndash;&gt;-->
        <!--            </div>-->
        <!--        </ValidationObserver>-->
    </v-app>


    <!--    <v-container>-->
    <!--        <v-form v-on:submit.prevent="login">-->
    <!--            <ValidationProvider v-slot="{ errors }" name="Email" rules="required|email">-->
    <!--                <v-text-field-->
    <!--                        v-model="data.email"-->
    <!--                        :error-messages="errors"-->
    <!--                        label="E-mail"-->
    <!--                ></v-text-field>-->
    <!--            </ValidationProvider>-->

    <!--            <ValidationProvider v-slot="{ errors }" name="Password" rules="required|min:6">-->
    <!--                <v-text-field-->
    <!--                        v-model="data.password"-->
    <!--                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"-->
    <!--                        :error-messages="errors"-->
    <!--                        :type="showPassword ? 'text' : 'password'"-->
    <!--                        label="Password"-->
    <!--                        @click:append="showPassword = !showPassword"-->
    <!--                ></v-text-field>-->
    <!--            </ValidationProvider>-->

    <!--            <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:10">-->
    <!--                <v-text-field-->
    <!--                        v-model="data.name"-->
    <!--                        :error-messages="errors"-->
    <!--                        label="Name"-->
    <!--                ></v-text-field>-->
    <!--            </ValidationProvider>-->

    <!--            <v-btn type="submit">Log In</v-btn>-->
    <!--        </v-form>-->
    <!--    </v-container>-->

</template>

<script>
    import "../../utilities/validationRules";
    import {ValidationObserver, ValidationProvider} from "vee-validate";
    import axios from "axios";
    import helper from "../../utilities/helper";
    import Login from "./Login";

    export default {
        name: 'Signup',

        components: {
            ValidationProvider,
            ValidationObserver,
        },

        data: () => ({
            OTPSendLoading: false,
            formSubmitLoading: false,

            data: {},
            showPassword: false,
        }),

        methods: {
            handleSubmit: function () {
                this.$refs.form.validate().then(valid => {
                    if (valid) {
                        this.formSubmitLoading = true;
                        this.$store.dispatch('register', this.data)
                            .then((res) => {
                                //this.$router.push('/')
                                helper.toastApiResponse(res);
                                if (res.data.success) {
                                    this.openLoginModal();
                                }
                            })
                            .catch(err => console.log(err))
                            .finally(() => this.formSubmitLoading = false)
                    }
                })
            },
            sendOTP: async function () {
                if (this.data.username) {
                    axios.post('account/send-registration-otp', this.data,)
                        .then(res => {
                            helper.toastApiResponse(res);
                        })
                        .catch(err => {
                            helper.handleError(err);
                        })
                } else {
                    helper.toastMessage('Username is required', 'error')
                }
            },

            openLoginModal() {
                this.closeModal();

                this.$modal.show(Login, {}, {
                    width: '500',
                    draggable: true,
                    height: 'auto'
                });
            },

            closeModal(res = {status: 'cancel'}) {
                this.$emit('close', res);
            },
        }
    }
</script>
