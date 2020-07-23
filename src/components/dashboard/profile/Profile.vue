<template>
    <div class="content">

        <!-- Start Content-->
        <div class="container-fluid">

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
                                    <p>Photo</p>
                                </div>
                                <div class="col-10">
                                    <input type="File" class="form-control" name="photo">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-2">
                                    <p>About Me</p>
                                </div>
                                <div class="col-10">
                                    <textarea name="about_me" id="about_me" cols="30" rows="10"
                                              class="form-control"></textarea>
                                </div>
                            </div>
                            <p>Change Your Password?</p>
                            <div class="form-group row">
                                <div class="col-2">
                                    <p>Your Password</p>
                                </div>
                                <div class="col-10">
                                    <input type="text" class="form-control" name="password" placeholder="Your Password">
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-2">
                                    <p>Confirm Password</p>
                                </div>
                                <div class="col-10">
                                    <input type="text" class="form-control" name="password"
                                           placeholder="Confirm Password">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div><!-- .profile-password-section end -->

        </div>
        <!-- end container-fluid -->

    </div>
</template>

<script>
    export default {
        name: 'Profile',

        data: () => ({}),
    }
</script>
