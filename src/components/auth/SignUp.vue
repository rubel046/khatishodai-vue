<template>
    <ValidationObserver ref="form">
            <div class="main-register">
                <div class="register bg-white m-auto overflow-hidden p-3">
                    <a href="" id="register-close">&times;</a>
                    <div class="header-text overflow-hidden mt-3">
                        <span class="float-left font-weight-light">Create Your Khatisodai Account</span>
                        <span class="float-right font-weight-light">Already Member? <a href="" class="text-success">Login</a> Here</span>
                    </div>
                    <div class="register-form p-3">
                        <form v-on:submit.prevent="login">
                            <div class="form-group">
                                <label for="phone" class="font-weight-light">Phone Number Or Email</label>
                                <input type="text" id="phone" name="phone" placeholder="+88 01xxxxxxxxx"
                                       class="form-control">
                            </div>
                            <a href="#" class="btn btn-outline-success d-block">Send To Get Sms Code</a>
                            <span class="position-relative text-white bg-success arrow">>></span>
                            <div class="form-group">
                                <label for="verification" class="font-weight-light">Send Verification Code</label>
                                <input type="number" id="verification" name="verification" class="form-control"
                                       placeholder="4 digits">
                            </div>
                            <div class="form-group">
                                <label for="name" class="font-weight-light">Full Name</label>
                                <input type="text" id="name" name="name" class="form-control" placeholder="Your Name">
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <label for="date">Birthday</label>
                                        <input type="date" id="date" name="date" class="form-control" placeholder="">
                                    </div>
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <label for="gender">Gender</label>
                                        <select name="gender" id="gender" class="form-control">
                                            <option value="">Gender</option>
                                            <option value="">Male</option>
                                            <option value="">Female</option>
                                            <option value="">Other's</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password"
                                       class="form-control position-relative" aria-describedby="passwordHelp"
                                       placeholder="* * * * * *">
                                <a href="" class="position-relative show-password"><i class="far fa-eye-slash"></i></a>
                                <small id="passwordHelp" class="form-text text-muted">Please Enter 6-20 Character(A-Z,
                                    a-z, 1-0) only</small>
                            </div>
                            <div class="form-group agree">
                                <input type="checkbox" id="terms" name="terms">
                                <span>I agree to the Khatisadai’s <a href=""
                                                                     class="text-success">Terms</a> of use and <a
                                        href="" class="text-success">Privacy Policy</a></span>
                            </div>
                            <button type="submit" class="btn btn-success w-100 text-white">Sign Up</button>
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
    import {ValidationObserver} from "vee-validate";

    export default {
        name: 'Home',

        components: {
          //  ValidationProvider,
            ValidationObserver,
        },

        data: () => ({
            data: {},
            showPassword: false,

            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],

            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 8) || 'Min 8 characters',
            ],
        }),

        methods: {
            login: function () {
                this.$refs.form.validate().then(success => {
                    if (success) {
                        const email = this.data.email
                        const password = this.data.password

                        this.$store.dispatch('login', {email, password})
                            .then(() => this.$router.push('/'))
                            .catch(err => console.log(err))
                    }
                })
            }
        }
    }
</script>
