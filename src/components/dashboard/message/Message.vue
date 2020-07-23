<template>
    <div class="content">

        <div class="container-fluid">

            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <h4 class="page-title">Message List</h4>
                    </div>
                </div>
            </div>

                <div class="row">
                    <div class="col-sm-12 col-12 col-md-12 col-lg-6">
                        <div class="message-list">
                            <div id="sidepanel">
                                <div id="search">
                                    <input type="text" class="form-control" placeholder="Search contacts..." />
                                </div>
                                <div id="contacts">
                                    <ul>
                                        <li class="contact bg-light mt-2 p-2">
                                            <div class="row">
                                                <div class="col-2">
                                                    <img class="w-100 mt-3 rounded-circle" src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                                                </div>
                                                <div class="col-6">
                                                    <div class="meta">
                                                        <p class="name">Louis Litt <b class="badge badge-danger"> 2 </b></p>
                                                        <p class="conpany-name">Company Name Line Here</p>
                                                        <p class="preview">You just got LITT up, Mike.</p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="product-and-time">
                                                        <p>2020-04-04</p>
                                                        <img class="w-75" src="https://www.virtuix.com/wp-content/uploads/2014/12/shoes_product.png"
                                                             alt="" />
                                                    </div>
                                                </div>
                                            </div><!-- .row end -->
                                        </li>
                                        <li class="contact bg-light mt-2 p-2">
                                            <div class="row">
                                                <div class="col-2">
                                                    <img class="w-100 mt-3 rounded-circle" src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                                                </div>
                                                <div class="col-6">
                                                    <div class="meta">
                                                        <p class="name">Louis Litt <b class="badge badge-danger"> 2 </b></p>
                                                        <p class="conpany-name">Company Name Line Here</p>
                                                        <p class="preview">You just got LITT up, Mike.</p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="product-and-time">
                                                        <p>2020-04-04</p>
                                                        <img class="w-75" src="https://www.virtuix.com/wp-content/uploads/2014/12/shoes_product.png"
                                                             alt="" />
                                                    </div>
                                                </div>
                                            </div><!-- .row end -->
                                        </li>
                                        <li class="contact bg-light mt-2 p-2">
                                            <div class="row">
                                                <div class="col-2">
                                                    <img class="w-100 mt-3 rounded-circle" src="http://emilcarlsson.se/assets/louislitt.png" alt="" />
                                                </div>
                                                <div class="col-6">
                                                    <div class="meta">
                                                        <p class="name">Louis Litt <b class="badge badge-danger"> 2 </b></p>
                                                        <p class="conpany-name">Company Name Line Here</p>
                                                        <p class="preview">You just got LITT up, Mike.</p>
                                                    </div>
                                                </div>
                                                <div class="col-4">
                                                    <div class="product-and-time">
                                                        <p>2020-04-04</p>
                                                        <img class="w-75" src="https://www.virtuix.com/wp-content/uploads/2014/12/shoes_product.png"
                                                             alt="" />
                                                    </div>
                                                </div>
                                            </div><!-- .row end -->
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-12 col-md-12 col-lg-6">
                        <div class="message">
                            <div class="contact-profile bg-light p-2">
                                <div class="contact-profile-user row">
                                    <div class="col-3">
                                        <img class="w-50 rounded-circle" src="http://emilcarlsson.se/assets/harveyspecter.png" alt="" />
                                    </div>

                                    <div class="col-9">
                                        <p>Mehedi Hassan</p>
                                        <span>Fri, Apr 29, 2020 | 10:10 PM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="messages">
                                <ul>
                                    <li class="sent bg-primary text-white p-2 mb-2">
                                        <span class="time_date"> April 26, 2020 at 7:59pm</span>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            since the 1500s, when an unknown printer took a
                                            galley of type and scrambled it to make a type specimen.
                                        </p>
                                    </li>
                                    <li class="replies bg-info text-white p-2">
                                        <span class="time_date"> April 26, 2020 at 7:59pm</span>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            since the 1500s, when an unknown printer took a
                                            galley of type and scrambled it to make a type specimen.
                                        </p>
                                    </li>

                                </ul>
                            </div>
                            <div class="message-input">
                                <div class="wrap">
                                    <input type="text" class="form-control" placeholder="Type a message…" />
                                    <!-- <i class="fa fa-paperclip attachment" aria-hidden="true"></i> -->
                                    <input type="submit" class="btn btn-primary mt-2 btn-sm">
                                </div>
                            </div>

                        </div>
                    </div>
                </div>



        </div><!-- end container-fluid -->

    </div>
</template>

<script>
    export default {
        name: 'Dashboard',

        data: () => ({}),
    }
</script>
