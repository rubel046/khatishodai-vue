<template>
    <div class="content">

        <!-- Start Content-->
        <div class="container-fluid">

            <div class="orders-section p-2">
                <span class="h4 mr-3">Orders</span>
                <div class="card mt-2">
                    <div class="card-body">
                        <a href="">Awating Payment</a>
                        <a href="">Awating Shipment</a>
                        <a href="">Awating Delivery</a>
                        <a href="">Disputs</a>
                        <a href="">Unread Order Message</a>
                    </div>

                </div>
                <div class="card">
                    <div class="card-body">
                        <form action="" method="post">
                            <div class="row">
                                <div class="col-12 col-lg-4">
                                    <span>Order Number</span>
                                    <span><input type="text" class="form-control"></span>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="row">
                                        <div class="col-8">
                                            <span>Product</span>
                                            <span><input type="text" class="form-control"></span>
                                        </div>
                                        <div class="col-4">
                                            <input type="submit" class="mt-4 btn btn-warning">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-2">
                                    <select name="" id="" class="form-control mt-4">
                                        <option value="">More Filter</option>
                                        <option value="">More Filter</option>
                                        <option value="">More Filter</option>
                                        <option value="">More Filter</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div><!-- .card-body end -->
                </div><!-- .card-end -->
                <div class="product-table">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-striped">
                                <thead class="bg-light">
                                <tr>
                                    <th>Product</th>
                                    <th>Product Action</th>
                                    <th>Order Status</th>
                                    <th>Order Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                </tr>
                                <tr>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                </tr>
                                <tr>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                    <td>Lorem Ipsum</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div><!-- .orders-section end -->

        </div><!-- end container-fluid -->

    </div>
</template>

<script>
    export default {
        name: 'Dashboard',

        data: () => ({}),
    }
</script>
