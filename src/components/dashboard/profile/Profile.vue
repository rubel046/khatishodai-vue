<template>
    <v-app>
        <div class="profile-password-section p-2">
            <span class="h4 mr-3">Manage Profile</span>
            <span class="h4">& Password</span>
            <div class="card mt-2">
                <div class="card-header">
                    <h3>Basic Info</h3>
                </div>
                <div class="card-body">
                    <form action="" method="post">
                        <div class="form-group row">
                            <div class="col-2">
                                <p>Your Name</p>
                            </div>
                            <div class="col-10">
                                <input type="text" class="form-control" name="name" placeholder="Your Name">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-2">
                                <p>Your Email</p>
                            </div>
                            <div class="col-10">
                                <input type="email" class="form-control" name="email" placeholder="Your Email">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-2">
                                <p>Phone Number</p>
                            </div>
                            <div class="col-10">
                                <input type="number" class="form-control" name="email" placeholder="Your Phone Number">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-2">
                                <p>Date Of Birth</p>
                            </div>
                            <div class="col-10">
                                <input type="date" class="form-control" name="date">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-2">
                                <p>Your Gender</p>
                            </div>
                            <div class="col-10">
                                <select name="" id="" class="form-control">
                                    <option value="">Select Gender</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-2">
                                <p>Photo</p>
                            </div>
                            <div class="col-10">
                                <input type="File" class="form-control" name="photo">
                            </div>
                        </div>
                        <div class="form-group">

                        </div>
                        <div class="form-group row">
                            <div class="col-2">
                                <p>About Me</p>
                            </div>
                            <div class="col-10">
                                <textarea name="about_me" id="about_me" cols="30" rows="4"
                                          class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-2">

                            </div>
                            <div class="col-10">
                                <input type="submit" class="btn btn-info" value="save">
                            </div>
                        </div>
                    </form>
                </div>
            </div><!-- .card end -->
            <div class="card">
                <div class="card-body w-75 m-auto change-password">
                    <form action="" method="post">
                        <p class="font-weight-bold">Change Your Password?</p>
                        <div class="form-group row">
                            <div class="col-4">
                                <p>Your Password</p>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" name="password" placeholder="Your Password">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-4">
                                <p>Confirm Password</p>
                            </div>
                            <div class="col-8">
                                <input type="text" class="form-control" name="password" placeholder="Confirm Password">
                            </div>
                        </div>
                        <input type="submit" class="btn btn-primary" value="Change Password">
                    </form>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
    export default {
        name: 'Profile',

        data: () => ({}),
    }
</script>
