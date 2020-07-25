<template>
    <v-app>
        <div class="orders-section p-2">
            <span class="h4 mr-3">Orders</span>
            <div class="card mt-2">
                <div class="card-body">
                    <a href="">Awating Payment <span>(10)</span></a>
                    <a href="">Awating Shipment <span>(10)</span></a>
                    <a href="">Awating Delivery <span>(10)</span></a>
                    <a href="">Disputs <span>(10)</span></a>
                    <a href="">Unread Order Message <span>(10)</span></a>
                </div>

            </div>
            <div class="card mt-3 mb-3">
                <div class="card-body">
                    <form action="" method="post">
                        <div class="row">
                            <div class="col-2">
                                <label for="tran-id">Order Id</label>
                                <input type="text" id="tran-id" class="form-control">
                            </div>
                            <div class="col-2">
                                <label for="from-date">From Date</label>
                                <input type="date" id="-from-date" class="form-control">
                            </div>
                            <div class="col-2">
                                <label for="to-date">To Date</label>
                                <input type="date" id="tran-id" class="form-control">
                            </div>
                            <div class="col-2">
                                <label for="amount">Amount</label>
                                <input type="text" id="amount" class="form-control">
                            </div>
                            <div class="col-2">
                                <label for="method">Status</label>
                                <select name="method" id="method" class="form-control">
                                    <option value="">All</option>
                                    <option value="">Completed</option>
                                    <option value="">Processing</option>
                                </select>
                            </div>
                            <div class="col-2 mt-4">
                                <input type="submit" class="btn btn-success" value="Search">
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
                                <td><p>12-3-2020</p>
                                    <p>02.3.4pm</p></td>
                                <td>444</td>
                                <td>In Process</td>
                                <td>Motijhil, 4432, Dhaka</td>
                                <td><a href="" class="btn btn-danger btn-sm">view details</a></td>
                            </tr>
                            <tr>
                                <td>Wdk344</td>
                                <td><p>12-3-2020</p>
                                    <p>02.3.4pm</p></td>
                                <td>444</td>
                                <td>In Process</td>
                                <td>Motijhil, 4432, Dhaka</td>
                                <td><a href="" class="btn btn-danger btn-sm">view details</a></td>
                            </tr>
                            <tr>
                                <td>Wdk344</td>
                                <td><p>12-3-2020</p>
                                    <p>02.3.4pm</p></td>
                                <td>444</td>
                                <td>In Process</td>
                                <td>Motijhil, 4432, Dhaka</td>
                                <td><a href="" class="btn btn-danger btn-sm">view details</a></td>
                            </tr>
                            <tr>
                                <td>Wdk344</td>
                                <td><p>12-3-2020</p>
                                    <p>02.3.4pm</p></td>
                                <td>444</td>
                                <td>In Process</td>
                                <td>Motijhil, 4432, Dhaka</td>
                                <td><a href="" class="btn btn-danger btn-sm">view details</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
    export default {
        name: 'Dashboard',

        data: () => ({}),
    }
</script>
