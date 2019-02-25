<template>
  <div>
    <md-card-content>
      <md-table>
        <InputField
          fieldName="Street and number, P.O. box, c/o."
          stateValue="addrOne"
        />
        <InputField
          fieldName="Apartment, suite, unit, building, floor, etc."
          stateValue="addrTwo"
        />
        <InputField fieldName="City" stateValue="city" />
        <InputField fieldName="State/Province/Region" stateValue="state" />
        <InputField fieldName="Zip Code" type="number" maxLength="5" stateValue="zip" />
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
        v-on:click.stop.prevent="validateAddress()"
      >
        Next
      </md-button>
    </md-card-actions>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
import InputField from "@/components/InputField.vue";

export default {
  name: "AddressInfo",
  computed: mapState(["error"]),
  components: { InputField },
  methods: {
    previous: function() {
      this.SET_ROUTE("personal");
      if (!this.error) this.$router.push("personal");
    },
    validateAddress: function() {
      this.SET_ROUTE("creditcard");
      if (!this.error) this.$router.push("creditcard");
    },
    clearDetails: function() {
      this.CLEAR_DETAILS();
      location.reload();
    },
    bootstrap: function() {
      this.SET_TITLE("Enter address:");
      this.CLEAR_ERROR();
    },
    ...mapMutations(["SET_TITLE", "SET_ROUTE", "CLEAR_DETAILS", "CLEAR_ERROR"])
  },
  mounted() {
    this.bootstrap();
  }
};
</script>
