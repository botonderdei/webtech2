import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import AddCar from './components/AddCar';
import Login from './components/Login';
import Home from './components/Home';
import ModifyUser from './components/ModifyUser';
import GetMyCars from './components/GetMyCars';
import GetCar from './components/GetCar.vue';
import Register from './components/Register';


Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const routes = [
  {
    name: 'register',
    path: '/register',
    component: Register, Login

  },
  {
    name: 'addcar',
    path: '/addCar',
    component: AddCar
  },
  {
    name: 'getcar',
    path: '/getCars',
    component: GetCar
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'modifyuser',
    path: '/modify',
    component: ModifyUser
  },
  {
    name: 'getmycars',
    path: '/getMyCars',
    component: GetMyCars
  }
];
const router = new VueRouter({ mode: 'history', routes: routes });

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
