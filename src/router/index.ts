import {createRouter, createWebHistory} from 'vue-router';

import Home from '../components/Home.vue';
import Login from '../pages/Login/index.vue';
import Register from '../pages/Register/index.vue';

import LogCollection from '../pages/LogCollection/index.vue';
import LogUpload from '../pages/LogUpload/index.vue';
import TempCollection from '../pages/TempCollection/index.vue';
import TempUpload from '../pages/TempUpload/index.vue';
import RhCollection from '../pages/RhCollection/index.vue';
import RhUpload from '../pages/RhUpload/index.vue';
import GasCollection from '../pages/GasCollection/index.vue';
import GasUpload from '../pages/GasUpload/index.vue';
import Download from '../pages/Download/index.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', redirect: 'login', component: Login},
  { path: '/login', component: Login , name: 'login'},
  { path: '/register', component: Register , name: "register"},
  { path: '/logcollection', component: LogCollection, meta: {
    requireAuth: true
  }, name: "logcollection"},
  { path: '/logupload', component: LogUpload, meta: {
    requireAuth: true
  }, name: "logupload"},
  { path: '/tempcollection', component: TempCollection, meta: {
    requireAuth: true
  }, name: "tempcollection"},
  { path: '/tempupload', component: TempUpload, meta: {
    requireAuth: true
  }, name: "tempupload"},
  { path: '/rhcollection', component: RhCollection, meta: {
    requireAuth: true
  }, name: "rhcollection"},
  { path: '/rhupload', component: RhUpload, meta: {
    requireAuth: true
  }, name: "rhupload"},
  { path: '/gascollection', component: GasCollection, meta: {
    requireAuth: true
  }, name: "gascollection"},
  { path: '/gasupload', component: GasUpload, meta: {
    requireAuth: true
  }, name: "gasupload"},
  { path: '/download', component: Download, meta: {
    requireAuth: true
  }, name: "download"},
  
]
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.

export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})