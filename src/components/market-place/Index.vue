<template>
    <div>
        <div class="category-menu-section bg-light mt-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-12" id="category">
                        <div class="category card mt-1">
                            <div class="card-heading category-heading bg-success p-2">
                                <span class="text-white">Categories</span>
                                <a href="" class="text-white float-right">View All</a>
                            </div>
                            <div class="card-body category-list">
                                <template v-for="(category, index) in categories" >
                                    <a href="Javascript:void(0)" class="active" v-if="category.children.length === 0" v-bind:key="index">
                                        <i class="fas fa-female"></i>
                                        {{category.name}}
                                    </a>


                                    <a href="Javascript:void(0)" class="dropdown-toggle" role="button" :id="index" v-bind:key="index" v-else
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                            class="fas fa-tv"></i> {{category.name}}</a>
                                    <div class="dropdown-menu sho" :aria-labelledby="index" v-bind:key="index">
                                        <div class="row">
                                            <div class="col-4" v-for="(children, index2) in category.children"
                                                 v-bind:key="index2">
                                                <div class="submenu">
                                                    <h4 class="submenu-title">{{children.name}} <span>({{Math.floor(Math.random() * (300000 - 250 + 1)) + 120}})</span>
                                                    </h4>

                                                    <template v-if="children.children">
                                                        <a href="" v-for="(child, index3) in children.children"
                                                           v-bind:key="index3">{{child.name}}</a>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </div>

                            <div class="card-body category-list">
                                <a href="#" class="dropdown-toggle" role="button" id="777"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                        class="fas fa-tv"></i> Phone & accesories</a>
                                    <div class="dropdown-menu sho" aria-labelledby="777">
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="submenu">
                                                <h4 class="submenu-title">PHone & Peripherals</h4>
                                                <a href="">CPUs</a>
                                                <a href="">Motherboards</a>
                                                <a href="">Graphics Cards</a>
                                                <a href="">Keyboards</a>
                                                <a href="">Laptops</a>
                                                <a href="">Tablets</a>
                                                <a href="">Laptop Accessories</a>
                                                <a href="">Tablet Accessories</a>
                                                <a href="">Gaming Laptops</a>
                                                <a href="">Ultraslim Laptops</a>
                                            </div>
                                        </div><!-- .eol-4 end -->
                                        <div class="col-4">
                                            <div class="submenu">
                                                <h4 class="submenu-title">Components & Peripherals</h4>
                                                <a href="">CPUs</a>
                                                <a href="">Motherboards</a>
                                                <a href="">Graphics Cards</a>
                                                <a href="">Keyboards</a>
                                                <a href="">Laptops</a>
                                                <a href="">Tablets</a>
                                                <a href="">Laptop Accessories</a>
                                                <a href="">Tablet Accessories</a>
                                                <a href="">Gaming Laptops</a>
                                                <a href="">Ultraslim Laptops</a>
                                            </div>
                                        </div><!-- .eol-4 end -->
                                        <div class="col-4">
                                            <div class="submenu">
                                                <h4 class="submenu-title">Components & Peripherals</h4>
                                                <a href="">CPUs</a>
                                                <a href="">Motherboards</a>
                                                <a href="">Graphics Cards</a>
                                                <a href="">Keyboards</a>
                                                <a href="">Laptops</a>
                                                <a href="">Tablets</a>
                                                <a href="">Laptop Accessories</a>
                                                <a href="">Tablet Accessories</a>
                                                <a href="">Gaming Laptops</a>
                                                <a href="">Ultraslim Laptops</a>
                                            </div>
                                        </div><!-- .eol-4 end -->
                                    </div><!-- .row end -->
                                </div><!-- .dropdown-container end -->
                                <a href="#" class="dropdown-toggle" role="button" id="888"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i
                                        class="fas fa-tv"></i> Computer, Office, Security</a>
                                <div class="dropdown-menu sho" aria-labelledby="888">
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="submenu">
                                                <h4 class="submenu-title">Components & Peripherals</h4>
                                                <a href="">CPUs</a>
                                                <a href="">Motherboards</a>
                                                <a href="">Graphics Cards</a>
                                                <a href="">Keyboards</a>
                                                <a href="">Laptops</a>
                                                <a href="">Tablets</a>
                                                <a href="">Laptop Accessories</a>
                                                <a href="">Tablet Accessories</a>
                                                <a href="">Gaming Laptops</a>
                                                <a href="">Ultraslim Laptops</a>
                                            </div>
                                        </div><!-- .eol-4 end -->
                                        <div class="col-4">
                                            <div class="submenu">
                                                <h4 class="submenu-title">Components & Peripherals</h4>
                                                <a href="">CPUs</a>
                                                <a href="">Motherboards</a>
                                                <a href="">Graphics Cards</a>
                                                <a href="">Keyboards</a>
                                                <a href="">Laptops</a>
                                                <a href="">Tablets</a>
                                                <a href="">Laptop Accessories</a>
                                                <a href="">Tablet Accessories</a>
                                                <a href="">Gaming Laptops</a>
                                                <a href="">Ultraslim Laptops</a>
                                            </div>
                                        </div><!-- .eol-4 end -->
                                        <div class="col-4">
                                            <div class="submenu">
                                                <h4 class="submenu-title">Components & Peripherals</h4>
                                                <a href="">CPUs</a>
                                                <a href="">Motherboards</a>
                                                <a href="">Graphics Cards</a>
                                                <a href="">Keyboards</a>
                                                <a href="">Laptops</a>
                                                <a href="">Tablets</a>
                                                <a href="">Laptop Accessories</a>
                                                <a href="">Tablet Accessories</a>
                                                <a href="">Gaming Laptops</a>
                                                <a href="">Ultraslim Laptops</a>
                                            </div>
                                        </div><!-- .eol-4 end -->
                                    </div><!-- .row end -->
                                </div><!-- .dropdown-container end -->
                                <a href="#" class=""><i class="fas fa-charging-station"></i> Consumer Electronics</a>
                                <a href="#" class=""><i class="fas fa-gem"></i> Jewelry & Watches</a>
                            </div>
                        </div>
                    </div><!-- .col-3 end -->

                    <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-12">
                        <div class="main-menu">
                            <ul class="nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Offers</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Discounts</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">New Recepies</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Product Request</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">For Investor</a>
                                </li>
                            </ul>
                        </div><!-- .main-menu end -->
                        <div class="deal-of-the-day">
                            <div class="banner-image">
                                <img src="@/assets/image/banner1.png" class="w-100" alt="">
                            </div><!-- .banner-image end -->
                            <div class="featured mt-4">
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-4">
                                        <div class="card p-2">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img src="@/assets/image/support.png" alt=""
                                                         class="w-200 m-auto mt-5">
                                                </div>
                                                <div class="col-9">
                                                    <h2 class="featured-title h6">24/7 Friendly Support</h2>
                                                    <p class="featured-content">Our support team always ready for
                                                        you.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- .col-12 end -->
                                    <div class="col-12 col-sm-12 col-md-4">
                                        <div class="card p-2">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img src="@/assets/image/delivery.png" alt=""
                                                         class="w-200 m-auto mt-5">
                                                </div>
                                                <div class="col-9">
                                                    <h2 class="featured-title h6">Free Home Delivery</h2>
                                                    <p class="featured-content">Free shipping on all area order above
                                                        ৳1000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- .col-12 end -->
                                    <div class="col-12 col-sm-12 col-md-4">
                                        <div class="card p-2">
                                            <div class="row">
                                                <div class="col-3">
                                                    <img src="@/assets/image/quality.png" alt=""
                                                         class="w-200 m-auto mt-5">
                                                </div>
                                                <div class="col-9">
                                                    <h2 class="featured-title h6">Quality Guaranteed</h2>
                                                    <p class="featured-content">If your product aren't perfect,
                                                        return.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- .col-12 end -->
                                </div><!-- .row end -->
                            </div><!-- .featured end -->
                        </div><!-- .deal-of-the-day end -->
                    </div> <!-- .col-9 end -->
                </div> <!-- .row end -->
            </div><!-- .container end -->
        </div><!-- .category-menu-section end -->

        <div class="deal-of-the-week-section mt-5 mb-5">
            <div class="container">
                <div class="deal-of-the-week-title overflow-hidden border-bottom">
                    <div class="float-left">
                        <h2 class="font-weight-bold">Deal of the week</h2>
                    </div>
                    <div class="float-right ending-in">
                        <strong>Ending in:</strong>
                        <span class="bg-success text-white p-1 rounded">24</span> :
                        <span class="bg-success text-white p-1 rounded">59</span> :
                        <span class="bg-success text-white p-1 rounded">00</span>
                    </div>
                </div><!-- .deal-of-the-week-title end -->
                <div class="item mt-5">
                    <div class="row">
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/item-wash.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/swift.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/surfexcel-item.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/swift2-item.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/item-wash.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/swift.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/surfexcel-item.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/swift2-item.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header position-relative">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-sm-6 col-md-2 mb-5 box-shadow">
                            <div class="card singel-item p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/item-wash.png" class="w-100 position-relative" alt="">
                                </div>
                                <div class="off ">
                                    <span class="bg-success p-1 text-white position-absolute">-50%</span>
                                </div>
                                <p class="text-center font-weight-bold pt-2">Passion Fruit</p>
                                <p><span>৳ 300.00</span>-
                                    <del>৳ 600.00</del>
                                </p>
                            </div><!-- .singel-item end -->
                        </div><!-- .col-6 end -->
                    </div><!-- .row end -->
                    <div class="all-product-btn text-center">
                        <a href="#" class="btn btn-success p-1">View All Products</a>
                    </div>
                </div><!-- .item end -->
            </div><!-- .container end -->
        </div><!-- .deal-of-the-week-section end -->

        <div class="latest-best-sale-section">
            <div class="container">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active font-weight-bold" id="latest-tab" data-toggle="tab" href="#latest"
                           role="tab" aria-controls="home" aria-selected="true">Latest</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link font-weight-bold" id="most-popular-tab" data-toggle="tab"
                           href="#most-popular" role="tab" aria-controls="post-popular" aria-selected="false">Most
                            Popular</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link font-weight-bold" id="best-sale-tab" data-toggle="tab" href="#best-sale"
                           role="tab" aria-controls="best-sale" aria-selected="false">Best Sale</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link font-weight-bold" id="offer-tab" data-toggle="tab" href="#offer" role="tab"
                           aria-controls="offer" aria-selected="false">Offer</a>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="latest" role="tabpanel" aria-labelledby="latest-tab">
                        <div class="row mt-3">
                            <div class="col-12 col-md-6">
                                <img src="@/assets/image/latest1.png" class="w-100" alt="">
                            </div>
                            <div class="col-12 col-md-6">
                                <img src="@/assets/image/latest2.png" class="w-100" alt="">
                                <div class="row">
                                    <div class="col-12 col-md-4 mt-4">
                                        <div class="card p-1">
                                            <div class="card-header">
                                                <img src="@/assets/image/latest3.png" class="w-100 position-relative"
                                                     alt="">
                                            </div>
                                            <div class="off">
                                                <span class="bg-success p-1 text-white position-absolute">New</span>
                                            </div>
                                            <p class="text-center font-weight-bold pt-2">Fresh Soyabean Oil - 3L</p>
                                            <p class="text-center text-success">৳ 300.00</p>
                                        </div><!-- .card end -->
                                    </div><!-- .col-12 end -->
                                    <div class="col-12 col-md-4 mt-4">
                                        <div class="card p-1">
                                            <div class="card-header">
                                                <img src="@/assets/image/latest4.png" class="w-100 position-relative"
                                                     alt="">
                                            </div>
                                            <div class="off">
                                                <span class="bg-success p-1 text-white position-absolute">New</span>
                                            </div>
                                            <p class="text-center font-weight-bold pt-2">Fresh Soyabean Oil - 3L</p>
                                            <p class="text-center text-success">৳ 300.00</p>
                                        </div><!-- .card end -->
                                    </div><!-- .col-12 end -->
                                    <div class="col-12 col-md-4 mt-4">
                                        <div class="card p-1">
                                            <div class="card-header">
                                                <img src="@/assets/image/latest3.png" class="w-100 position-relative"
                                                     alt="">
                                            </div>
                                            <div class="off">
                                                <span class="bg-success p-1 text-white position-absolute">New</span>
                                            </div>
                                            <p class="text-center font-weight-bold pt-2">Fresh Soyabean Oil - 3L</p>
                                            <p class="text-center text-success">৳ 300.00</p>
                                        </div><!-- .card end -->
                                    </div><!-- .col-12 end -->
                                </div><!-- .row end -->
                            </div><!-- .col-12 end -->
                        </div><!-- .row end -->
                    </div>
                    <div class="tab-pane fade" id="most-popular" role="tabpanel" aria-labelledby="most-popular-tab">
                        Content Will Be Go Here
                    </div>
                    <div class="tab-pane fade" id="best-sale" role="tabpanel" aria-labelledby="best-sale-tab">Content
                        Will Be Go Here
                    </div>
                    <div class="tab-pane fade" id="offer" role="tabpanel" aria-labelledby="offer-tab">Content Will Be Go
                        Here
                    </div>
                </div><!-- .tab-content end -->
                <div class="view-all-btn text-center mt-4">
                    <a href="" class="btn btn-outline-secondary">View All New Product <span>--&raquo;</span></a>
                </div>
            </div><!-- .container end -->
        </div><!-- .latest-best-sale-section -->

        <div class="recommendation-section mb-5">
            <div class="container">
                <div class="title border-bottom overflow-hidden mb-3">
                    <span class="h3 font-weight-bold float-left">Recommendation For You</span>
                    <a href="#" class="float-right text-dark">View all product -></a>
                </div><!-- .title end -->
                <div class="row">
                    <div class="col-6 col-md-2 mb-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img src="@/assets/image/favoruite-icon.png"
                                                                               class="border border-light rounded-circle p-1"
                                                                               alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mb-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/item-wash.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img src="@/assets/image/favoruite-icon.png"
                                                                               class="border border-light rounded-circle p-1"
                                                                               alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mb-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/swift2-item.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success active rounded-pill float-left">Add to
                                    cart</a>
                                <a href="#" class="float-right  favourite "><img src="@/assets/image/favoruite-icon.png"
                                                                                 class="border active-favourite border-light rounded-circle p-1"
                                                                                 alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mb-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/swift.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img src="@/assets/image/favoruite-icon.png"
                                                                               class="border border-light rounded-circle p-1"
                                                                               alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mb-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img src="@/assets/image/favoruite-icon.png"
                                                                               class="border border-light rounded-circle p-1"
                                                                               alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mb-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img src="@/assets/image/favoruite-icon.png"
                                                                               class="border border-light rounded-circle p-1"
                                                                               alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mt-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img src="@/assets/image/favoruite-icon.png"
                                                                               class="border border-light rounded-circle p-1"
                                                                               alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mt-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img src="@/assets/image/favoruite-icon.png"
                                                                               class="border border-light rounded-circle p-1"
                                                                               alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mt-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img src="@/assets/image/favoruite-icon.png"
                                                                               class="border border-light rounded-circle p-1"
                                                                               alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mt-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img src="@/assets/image/favoruite-icon.png"
                                                                               class="border border-light rounded-circle p-1"
                                                                               alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mt-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img src="@/assets/image/favoruite-icon.png"
                                                                               class="border border-light rounded-circle p-1"
                                                                               alt=""></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                    <div class="col-6 col-md-2 mt-3">
                        <div class="card p-1">
                            <div class="card-header">
                                <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                            </div>
                            <p class="name">Fresh Soyabeen Oil -3L</p>
                            <p class="price font-weight-bold">৳ 300.00</p>
                            <div class="cart-btn">
                                <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to cart</a>
                                <a href="#" class="float-right favourite"><img
                                        class="border border-light rounded-circle p-1"
                                        src="@/assets/image/favoruite-icon.png"></a>
                            </div>
                        </div><!-- .card end -->
                    </div><!-- .col-6 end -->
                </div><!-- .row end -->
            </div><!-- .container end -->
        </div><!-- .recommendation-section end -->

        <div class="featured-section">
            <div class="container">
                <div class="title row border-bottom mb-4">
                    <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <h3>Featured Products</h3>
                    </div>
                    <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">
                        <ul class="nav justify-content-end">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Grocery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Grocery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Grocery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Grocery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Grocery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Grocery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Grocery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Grocery</a>
                            </li>
                        </ul>
                    </div><!-- .col-9 end -->
                </div><!-- .row end -->
                <div class="featured-product">
                    <div class="row">
                        <div class="col-6 col-md-2 mb-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mb-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/item-wash.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mb-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/swift2-item.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success active rounded-pill float-left">Add
                                        to cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mb-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/swift.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mb-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mb-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mt-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mt-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mt-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mt-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mt-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                        <div class="col-6 col-md-2 mt-3">
                            <div class="card p-1">
                                <div class="card-header">
                                    <img src="@/assets/image/appel-item.png" class="w-100" alt="">
                                </div>
                                <p class="name">Fresh Soyabeen Oil -3L</p>
                                <p class="price font-weight-bold">৳ 300.00</p>
                                <div class="cart-btn">
                                    <a href="#" class="btn cart btn-outline-success rounded-pill float-left">Add to
                                        cart</a>
                                    <a href="#" class="float-right favourite"><img
                                            class="border border-light rounded-circle p-1"
                                            src="@/assets/image/favoruite-icon.png"></a>
                                </div>
                            </div><!-- .card end -->
                        </div><!-- .col-6 end -->
                    </div><!-- .row end -->
                </div><!-- .featured-product end -->
                <div class="more-product-btn text-center mt-4">
                    <a href="#" class="btn btn-outline-secondary rounded">View More Product --&raquo;</a>
                </div><!-- .more-product-btn end -->
            </div><!-- .container end -->
        </div><!-- .featured-section end -->
    </div>
</template>

<script>
    import helper from "../../utilities/helper";

    export default {
        name: 'Index',

        data: () => ({
            categories: [],
        }),

        created() {
            this.getCategories();
        },

        methods: {
            getCategories: function () {
                this.axios.get('category')
                    .then(res => {
                        this.categories = res.data.result;
                    })
                    .catch(err => {
                        helper.handleError(err)
                    })
            }
        }
    }
</script>
