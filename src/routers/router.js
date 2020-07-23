import Vue from "vue";
import VueRouter from 'vue-router';
import Index from "../components/market-place/Index";
import DashboardIndex from "../components/dashboard/Index";
import Dashboard from "../components/dashboard/Dashboard";
import Message from "../components/dashboard/message/Message";
import Order from "../components/dashboard/order/Order";
import Profile from "../components/dashboard/profile/Profile";
import Coupon from "../components/dashboard/coupon/Coupon";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'MarketPlace',
            component: Index,
            meta: {layout: 'default'}
        },
        {
            path: '/dashboard',
            redirect: '',
            component: DashboardIndex,
            meta: {layout: 'dashboard'},
            children: [
                {
                    path: '',
                    name: 'Dashboard',
                    component: Dashboard,
                    meta: {layout: 'dashboard'},
                },
                {
                    path: 'messages',
                    name: 'Message',
                    component: Message,
                    meta: {layout: 'dashboard'},
                },
                {
                    path: 'orders',
                    name: 'Order',
                    component: Order,
                    meta: {layout: 'dashboard'},
                },
                {
                    path: 'profile',
                    name: 'Profile',
                    component: Profile,
                    meta: {layout: 'dashboard'},
                },
                {
                    path: 'coupons',
                    name: 'Coupon',
                    component: Coupon,
                    meta: {layout: 'dashboard'},
                }
                // {
                //     name: '',
                //     path: 'posts',
                //     component: UserPosts
                // }
            ]
        }
    ]

});
