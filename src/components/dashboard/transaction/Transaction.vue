<template>
    <v-app>
        <div class="transaction-section p-2">
            <h2 class="text-center mr-3">Transaction History</h2>

            <div class="view-all-form">
                <form action="" method="post">
                    <div class="row">
                        <div class="col-2">
                            <label for="tran-id">Transcation Id</label>
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
                            <label for="method">Method</label>
                            <select name="method" id="method" class="form-control">
                                <option value="">Bikash</option>
                                <option value="">Rocket</option>
                                <option value="">Nagad</option>
                            </select>
                        </div>
                        <div class="col-2 mt-4">
                            <input type="submit" class="btn btn-success" value="Search">
                        </div>
                    </div>
                </form>
            </div>
            <div class="transaction-body card mt-5">
                <table class="table card-body table-striped overflow-auto" style="overflow-y: scroll!important;">
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
                    </tbody>
                </table>
            </div><!-- .transaction-body end -->
        </div>
    </v-app>
</template>

<script>
    export default {
        name: 'Dashboard',

        data: () => ({}),
    }
</script>
