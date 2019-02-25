import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    title: "",
    activeRoute: "personal",
    loading: false,
    form: {
      //personal:
      tier: "",
      first: "",
      last: "",
      email: "",
      password: "",

      //address:
      addrOne: "",
      addrTwo: "",
      city: "",
      state: "",
      zip: "",

      //creditCardInfo:
      nameOnCard: "",
      cardNum: "",
      expDate: "",
      addrOneBilling: "",
      addrTwoBilling: "",
      zipBilling: ""
    },
    validation: {
      //personal:
      tier: "",
      first: "Hide",
      last: "Hide",
      email: "Hide",
      password: "Hide",

      //address:
      addrOne: "Hide",
      addrTwo: "Hide",
      city: "Hide",
      state: "Hide",
      zip: "Hide",

      //creditCardInfo:
      nameOnCard: "Hide",
      cardNum: "Hide",
      expDate: "Hide",
      addrOneBilling: "Hide",
      addrTwoBilling: "Hide",
      zipBilling: "Hide"
    },
    error: false
  },
  getters: {
    longAddress: state => {
      return new Array(
        state.form.addrOne + ", " + state.form.addrTwo,
        state.form.city + ", " + state.form.state + ", " + state.form.zip
      );
    },
    billingAddress: state => {
      return new Array(
        state.form.addrOneBilling + ", " + state.form.addrTwoBilling,
        state.form.zipBilling
      );
    },
    cardInfo: state => {
      return new Array(
        state.form.nameOnCard,
        state.form.cardNum.replace(/.(?=.{4,}$)/g, "#"),
        new Date(state.form.expDate).getMonth() +
          "/" +
          new Date(state.form.expDate).getDate() +
          "/" +
          new Date(state.form.expDate).getFullYear()
      );
    }
  },
  mutations: {
    SET_LOADING: (state, data) => {
      console.log("SET_LOADING: ", state, data);
      state.loading = data;
    },
    SET_TITLE: (state, data) => {
      console.log("SET_TITLE: ", state, data);
      state.title = data;
    },
    CLEAR_ERROR: (state) => {
      console.log("CLEAR_ERROR: ", state);
      state.error = false;
      for (let property in state.validation) {
        if (state.validation.hasOwnProperty(property)) {
          state.validation[property] = "";
          console.log(
            "Clearing validation property: ",
            property,
            state.validation[property]
          );
        }
      }
    },
    SET_ROUTE: (state, data) => {
      console.log("SET_ROUTE: ", state, data);
      state.error = false;
      //validations - todo refactor
      switch (data) {
        case "address":
          if (!state.form.password) { state.error = true; state.validation.password = { 'md-invalid': 'Show' };
          } else { state.validation.password  = ""; }
          if (!state.form.tier) { state.error = true; state.validation.tier = { 'color': 'red' };
          } else { state.validation.tier = ""; }
          if (!state.form.first) { state.error = true; state.validation.first = { 'md-invalid': 'Show' };
          } else { state.validation.first  = ""; }
          if (!state.form.last) { state.error = true; state.validation.last = { 'md-invalid': 'Show' };
          } else { state.validation.last  = ""; }
          let regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          let hasValidEmail = state.form.email && regExpEmail.test(String(state.form.email).toLowerCase());
          if (!hasValidEmail) { state.error = true; state.validation.email = { 'md-invalid': 'Show' };
          } else { state.validation.email  = ""; }
          break;
        case "creditcard":
          if (!state.form.addrOne) { state.error = true; state.validation.addrOne = { 'md-invalid': 'Show' };
          } else { state.validation.addrOne  = ""; }
          if (!state.form.city) { state.error = true; state.validation.city = { 'md-invalid': 'Show' };
          } else { state.validation.city  = ""; }
          if (!state.form.state) { state.error = true; state.validation.state = { 'md-invalid': 'Show' };
          } else { state.validation.state  = ""; }
          if (!state.form.zip) { state.error = true; state.validation.zip = { 'md-invalid': 'Show' };
          } else { state.validation.zip  = ""; }
          break;
        case "preconfirm":
          if (!state.form.nameOnCard) { state.error = true; state.validation.nameOnCard = { 'md-invalid': 'Show' };
          } else { state.validation.nameOnCard  = ""; }
          if (!state.form.cardNum) { state.error = true; state.validation.cardNum = { 'md-invalid': 'Show' };
          } else { state.validation.cardNum  = ""; }
          if (!state.form.expDate) { state.error = true; state.validation.expDate = { 'md-invalid': 'Show' };
          } else { state.validation.expDate  = ""; }
          if (!state.form.addrOneBilling) { state.error = true; state.validation.addrOneBilling = { 'md-invalid': 'Show' };
          } else { state.validation.addrOneBilling  = ""; }
          if (!state.form.zipBilling) { state.error = true; state.validation.zipBilling = { 'md-invalid': 'Show' };
          } else { state.validation.zipBilling  = ""; }
          break;
      }
      if (!state.error) state.activeRoute = data;
    },
    COPY_ADDRESS_TO_BILLING: state => {
      console.log("COPY_ADDRESS_TO_BILLING: ", state);
      state.form.addrOneBilling = state.form.addrOne;
      state.form.addrTwoBilling = state.form.addrTwo;
      state.form.zipBilling = state.form.zip;
    },
    CLEAR_DETAILS: state => {
      console.log("CLEAR_DETAILS, before", state);
      state.activeRoute = "personal";
      for (let property in state.form) {
        if (state.form.hasOwnProperty(property)) {
          state.form[property] = "";
          console.log(
            "Clearing form property: ",
            property,
            state.form[property]
          );
        }
      }
      for (let property in state.validation) {
        if (state.validation.hasOwnProperty(property)) {
          state.validation[property] = "";
          console.log(
            "1Clearing validation property: ",
            property,
            state.validation[property]
          );
        }
      }
      console.log("CLEAR_DETAILS, after", state);
    },
    updateField(state, payload) {
      console.log("updateField, ", payload.type, state);
      state.form[payload.type] = payload.value;
    }
  },
  actions: {
    callConfirm() {
      //mock service call delay
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 1500);
      });
    },
    //mock service call delay
    callPreConfirm() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 1500);
      });
    }
  },
  plugins: [vuexLocal.plugin]
});
