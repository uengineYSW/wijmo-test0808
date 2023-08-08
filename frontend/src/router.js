
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import BasicCompanyManager from "./components/listers/BasicCompanyCards"
import BasicCompanyDetail from "./components/listers/BasicCompanyDetail"
import BasicProductManager from "./components/listers/BasicProductCards"
import BasicProductDetail from "./components/listers/BasicProductDetail"

import SalesSalesOrderManager from "./components/listers/SalesSalesOrderCards"
import SalesSalesOrderDetail from "./components/listers/SalesSalesOrderDetail"

import InventoryInventoryManager from "./components/listers/InventoryInventoryCards"
import InventoryInventoryDetail from "./components/listers/InventoryInventoryDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/basics/companies',
                name: 'BasicCompanyManager',
                component: BasicCompanyManager
            },
            {
                path: '/basics/companies/:id',
                name: 'BasicCompanyDetail',
                component: BasicCompanyDetail
            },
            {
                path: '/basics/products',
                name: 'BasicProductManager',
                component: BasicProductManager
            },
            {
                path: '/basics/products/:id',
                name: 'BasicProductDetail',
                component: BasicProductDetail
            },

            {
                path: '/sales/salesOrders',
                name: 'SalesSalesOrderManager',
                component: SalesSalesOrderManager
            },
            {
                path: '/sales/salesOrders/:id',
                name: 'SalesSalesOrderDetail',
                component: SalesSalesOrderDetail
            },

            {
                path: '/inventories/inventories',
                name: 'InventoryInventoryManager',
                component: InventoryInventoryManager
            },
            {
                path: '/inventories/inventories/:id',
                name: 'InventoryInventoryDetail',
                component: InventoryInventoryDetail
            },



    ]
})
