import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/personal",
      name: "personal",
      component: () => import("./views/PersonalInfo.vue")
    },
    {
      path: "/address",
      name: "address",
      component: () => import("./views/AddressInfo.vue")
    },
    {
      path: "/creditcard",
      name: "creditcard",
      component: () => import("./views/CreditCardInfo.vue")
    },
    {
      path: "/preconfirm",
      name: "preconfirm",
      component: () => import("./views/Preconfirmation.vue")
    },
    {
      path: "/confirm",
      name: "confirm",
      component: () => import("./views/Confirmation.vue")
    }
  ],
  mode: "abstract"
});
