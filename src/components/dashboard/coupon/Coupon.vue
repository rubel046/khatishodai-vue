<template>
    <v-app>
        <div class="orders-section p-2">
            <div class="card">
                <div class="card-body">
                    <span class="float-left h3">My Coupons</span>
                    <span class="float-right"><a href="">Learn All About Coupon</a></span>
                </div>
            </div><!-- .card end -->
            <div class="product-table">
                <div class="card">
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead class="bg-light">
                            <tr>
                                <th>All Cupons</th>
                                <th>Valid Now</th>
                                <th>Not Valid Yet</th>
                                <th>Used</th>
                                <th>Expired</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Lorem</td>
                                <td>Ipsum</td>
                                <td>eid</td>
                                <td>ramadan</td>
                                <td>winter</td>
                            </tr>
                            <tr>
                                <td>Lorem</td>
                                <td>Ipsum</td>
                                <td>eid</td>
                                <td>ramadan</td>
                                <td>winter</td>
                            </tr>
                            <tr>
                                <td>Lorem</td>
                                <td>Ipsum</td>
                                <td>eid</td>
                                <td>ramadan</td>
                                <td>winter</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div><!-- .orders-section end -->
    </v-app>
</template>

<script>
    export default {
        name: 'Coupon',

        data: () => ({}),
    }
</script>
