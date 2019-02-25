<template>
  <div>
    <md-card-content>
      <md-table>
        <InputField fieldName="Name on card" stateValue="nameOnCard" />
        <InputField fieldName="Card number" maxLength="19" type="number" stateValue="cardNum" />
        <ExpirationField fieldName="Expiration Date" stateValue="expDate" />
        <div @click="copyAddr()">
          <md-subheader>
            <div class="card-reservation">
              <md-icon>access_time</md-icon>
              Tap to copy from mailing address:
            </div>
          </md-subheader>
        </div>
        <InputField
          fieldName="Street and number, P.O. box, c/o."
          stateValue="addrOneBilling"
        />
        <InputField
          fieldName="Apartment, suite, unit, building, floor, etc."
          stateValue="addrTwoBilling"
        />
        <InputField fieldName="Zip Code" maxLength="5" type="number" stateValue="zipBilling" />
      </md-table>
    </md-card-content>
    <md-card-actions>
      <md-button class="md-raised" v-on:click.stop.prevent="previous()">
        Previous
      </md-button>
      <md-button
        class="md-raised md-accent"
        v-on:click.stop.prevent="clearDetails()"
      >
        Clear
      </md-button>
      <md-button
        class="md-raised md-primary"
        v-on:click.stop.prevent="validateCC()"
      >
        Next
      </md-button>
    </md-card-actions>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import InputField from "@/components/InputField.vue";
import ExpirationField from "@/components/ExpirationField.vue";
import { mapActions } from "vuex";
import { mapState } from "vuex";

export default {
  name: "CreditCard",
  computed: mapState(["error"]),
  components: {
    InputField,
    ExpirationField
  },
  methods: {
    previous: function() {
      this.SET_ROUTE("address");
      this.$router.push("address");
    },
    copyAddr: function() {
      this.COPY_ADDRESS_TO_BILLING();
    },
    validateCC: function() {
      this.SET_ROUTE("preconfirm");
      if (!this.error) {
        this.SET_LOADING(true);
        this.callPreConfirm().then(() => {
          this.SET_LOADING(false);
        });
        this.$router.push("preconfirm");
      }
    },
    clearDetails: function() {
      this.CLEAR_DETAILS();
      location.reload();
    },
    bootstrap: function() {
      this.SET_TITLE("Enter credit card info: ");
      this.CLEAR_ERROR();
    },
    ...mapMutations([
      "SET_TITLE",
      "SET_ROUTE",
      "CLEAR_DETAILS",
      "COPY_ADDRESS_TO_BILLING",
      "SET_LOADING",
      "CLEAR_ERROR"
    ]),
    ...mapActions(["callPreConfirm"])
  },
  mounted() {
    this.bootstrap();
  }
};
</script>
