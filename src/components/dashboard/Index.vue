<template>
    <div class="content">
        <router-view></router-view>
        <!-- Start Content-->
        <div class="container-fluid">

            <!-- start page title -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">

                        <h4 class="page-title">Light Sidebar</h4>
                    </div>
                </div>
            </div>
            <!-- end page title -->

            <div class="row">
                <div class="col-lg-6 col-xl-3">
                    <div class="card widget-box-three pan">
                        <div class="card-body">
                            <div class="overflow-hidden">
                                <div class="float-left left-part">
                                    <img src="@/assets/dashboard/images/dash1.png" alt="">
                                </div>

                                <div class="float-right right-part">
                                    <h3>100</h3>
                                    <p>Cart Product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-6 col-xl-3">
                    <div class="card widget-box-three pan">
                        <div class="card-body">
                            <div class="overflow-hidden">
                                <div class="float-left left-part">
                                    <img src="@/assets/dashboard/images/dash2.png" alt="">
                                </div>

                                <div class="float-right right-part">
                                    <h3>50</h3>
                                    <p>Wishlist Product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-6 col-xl-3">
                    <div class="card widget-box-three pan">
                        <div class="card-body">
                            <div class="overflow-hidden">
                                <div class="float-left left-part">
                                    <img src="@/assets/dashboard/images/dash3.png" alt="">
                                </div>

                                <div class="float-right right-part">
                                    <h3>1030</h3>
                                    <p>Completed Order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
                <div class="col-lg-6 col-xl-3">
                    <div class="card widget-box-three pan">
                        <div class="card-body">
                            <div class="overflow-hidden">
                                <div class="float-left left-part">
                                    <img src="@/assets/dashboard/images/dash4.png" alt="">
                                </div>

                                <div class="float-right right-part">
                                    <h3>9050Tk</h3>
                                    <p>Total Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->

            <div class="row">
                <!-- end col -->

                <div class="col-12">
                    <div class="card-box">
                        <span class="header-title mb-2 font-weight-bold mr-5">Order History</span>
                        <a href="" class=" mb-3 btn btn-outline-success btn-sm rounded-pill">View All Order</a>

                        <div class="table-responsive">
                            <table class="table table-hover table-centered m-0">
                                <thead>
                                <tr>
                                    <th>Order Number</th>
                                    <th>Product Price</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Ship To</th>
                                    <th>Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>W26587932</td>
                                    <td>350 tk</td>
                                    <td>10-07-2020</td>
                                    <td>In Process</td>
                                    <td>Motijheel c/A, Dhaka 1000</td>
                                    <td>view details</td>
                                </tr>
                                <tr>
                                    <td>W26587932</td>
                                    <td>350 tk</td>
                                    <td>10-07-2020</td>
                                    <td>In Process</td>
                                    <td>Motijheel c/A, Dhaka 1000</td>
                                    <td>view details</td>
                                </tr>
                                <tr>
                                    <td>W26587932</td>
                                    <td>350 tk</td>
                                    <td>10-07-2020</td>
                                    <td>In Process</td>
                                    <td>Motijheel c/A, Dhaka 1000</td>
                                    <td>view details</td>
                                </tr>


                                </tbody>
                            </table>

                        </div>
                        <!-- table-responsive -->
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->

            </div>
            <!-- end row -->

            <div class="row">
                <!-- end col -->

                <div class="col-12">
                    <div class="card-box">
                        <span class="header-title mb-2 font-weight-bold mr-5">Transaction History</span>
                        <a href="" class=" mb-3 btn btn-outline-success btn-sm rounded-pill">View All Transaction</a>

                        <div class="table-responsive">
                            <table class="table table-hover table-centered m-0">
                                <thead>
                                <tr>
                                    <th>Order Number</th>
                                    <th>Amount Positon</th>
                                    <th>Order Date</th>
                                    <th>Payment Method</th>
                                    <th>Status</th>
                                    <th>Details</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>W26587932</td>
                                    <td>350 tk</td>
                                    <td>10-07-2020</td>
                                    <td>Bikash</td>
                                    <td>Compleated</td>
                                    <td>view details</td>
                                </tr>
                                <tr>
                                    <td>W26587932</td>
                                    <td>350 tk</td>
                                    <td>10-07-2020</td>
                                    <td>Bikash</td>
                                    <td>Compleated</td>
                                    <td>view details</td>
                                </tr>
                                <tr>
                                    <td>W26587932</td>
                                    <td>350 tk</td>
                                    <td>10-07-2020</td>
                                    <td>Bikash</td>
                                    <td>Compleated</td>
                                    <td>view details</td>
                                </tr>
                                <tr>
                                    <td>W26587932</td>
                                    <td>350 tk</td>
                                    <td>10-07-2020</td>
                                    <td>Bikash</td>
                                    <td>Compleated</td>
                                    <td>view details</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                        <!-- table-responsive -->
                    </div>
                    <!-- end card -->
                </div>
                <!-- end col -->

            </div>
            <!-- end row -->

        </div>
        <!-- end container-fluid -->

    </div>
</template>

<script>
    export default {
        name: 'Dashboard',

        data: () => ({}),
    }
</script>
