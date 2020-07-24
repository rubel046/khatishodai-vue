<template>
    <v-app>
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="text-center p-4">Dashboard</h4>
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
                <div class="card-box pt-3">
                    <span class="header-title mb-2 font-weight-bold mr-5">Order History</span>
                    <a href="" class=" mb-3 btn btn-outline-success btn-sm rounded-pill">View All Order</a>

                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead class="bg-light">
                            <tr>
                                <th>Order Id</th>
                                <th>Date/Time</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Ship To</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Wdk344</td>
                                <td>12-3-2020</td>
                                <td>444</td>
                                <td>In Process</td>
                                <td>Motijhil, 4432, Dhaka</td>
                                <td><a href="" class="btn btn-danger btn-sm">view details</a></td>
                            </tr>
                            <tr>
                                <td>Wdk344</td>
                                <td>12-3-2020</td>
                                <td>444</td>
                                <td>In Process</td>
                                <td>Motijhil, 4432, Dhaka</td>
                                <td><a href="" class="btn btn-danger btn-sm">view details</a></td>
                            </tr>
                            <tr>
                                <td>Wdk344</td>
                                <td>12-3-2020</td>
                                <td>444</td>
                                <td>In Process</td>
                                <td>Motijhil, 4432, Dhaka</td>
                                <td><a href="" class="btn btn-danger btn-sm">view details</a></td>
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
                <div class="card-box pt-2">
                    <span class="header-title mb-2 font-weight-bold mr-5">Transaction History</span>
                    <a href="" class=" mb-3 btn btn-outline-success btn-sm rounded-pill">View All Transaction</a>

                    <div class="table-responsive">
                        <table class="table card-body table-striped overflow-auto"
                               style="overflow-y: scroll!important;">
                            <thead class="bg-dark text-white">
                            <tr>
                                <th>Trans. Id</th>
                                <th>Order Id</th>
                                <th>Amount</th>
                                <th>Date/Time</th>
                                <th>Payment Method</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>3433</td>
                                <td>1</td>
                                <td>343 Tk</td>
                                <td><p>12-2-2020</p>
                                    <p>02-17-04pm</p></td>
                                <td>Bikash</td>
                                <td>Completed</td>
                                <td><a href="" class="btn btn-danger btn-sm">View Details</a></td>
                            </tr>
                            <tr>
                                <td>3433</td>
                                <td>1</td>
                                <td>343 Tk</td>
                                <td><p>12-2-2020</p>
                                    <p>02-17-04pm</p></td>
                                <td>Bikash</td>
                                <td>Completed</td>
                                <td><a href="" class="btn btn-danger btn-sm">View Details</a></td>
                            </tr>
                            <tr>
                                <td>3433</td>
                                <td>1</td>
                                <td>343 Tk</td>
                                <td><p>12-2-2020</p>
                                    <p>02-17-04pm</p></td>
                                <td>Bikash</td>
                                <td>Completed</td>
                                <td><a href="" class="btn btn-danger btn-sm">View Details</a></td>
                            </tr>
                            <tr>
                                <td>3433</td>
                                <td>1</td>
                                <td>343 Tk</td>
                                <td><p>12-2-2020</p>
                                    <p>02-17-04pm</p></td>
                                <td>Bikash</td>
                                <td>Completed</td>
                                <td><a href="" class="btn btn-danger btn-sm">View Details</a></td>
                            </tr>
                            <tr>
                                <td>3433</td>
                                <td>1</td>
                                <td>343 Tk</td>
                                <td><p>12-2-2020</p>
                                    <p>02-17-04pm</p></td>
                                <td>Bikash</td>
                                <td>Completed</td>
                                <td><a href="" class="btn btn-danger btn-sm">View Details</a></td>
                            </tr>
                            <tr>
                                <td>3433</td>
                                <td>1</td>
                                <td>343 Tk</td>
                                <td><p>12-2-2020</p>
                                    <p>02-17-04pm</p></td>
                                <td>Bikash</td>
                                <td>Completed</td>
                                <td><a href="" class="btn btn-danger btn-sm">View Details</a></td>
                            </tr>
                            <tr>
                                <td>3433</td>
                                <td>1</td>
                                <td>343 Tk</td>
                                <td><p>12-2-2020</p>
                                    <p>02-17-04pm</p></td>
                                <td>Bikash</td>
                                <td>Completed</td>
                                <td><a href="" class="btn btn-danger btn-sm">View Details</a></td>
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
    </v-app>
</template>

<script>
    export default {
        name: 'Dashboard',

        data: () => ({}),
    }
</script>
