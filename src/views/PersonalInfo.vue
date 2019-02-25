<template>
  <div>
    <md-card-content>
      <md-table>
        <TierSelection fieldName="Please select a tier: " stateValue="tier" />
        <InputField fieldName="First Name" stateValue="first" />
        <InputField fieldName="Last Name" stateValue="last" />
        <InputField fieldName="E-mail" type="email" stateValue="email" />
        <InputField fieldName="Password" type="password" stateValue="password" />
      </md-table>
    </md-card-content>
    <md-card-actions>
      <md-button
        class="md-raised md-accent"
        v-on:click.stop.prevent="clearDetails()"
      >
        Clear
      </md-button>
      <md-button
        class="md-raised md-primary"
        v-on:click.stop.prevent="validatePersonal()"
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
import TierSelection from "@/components/TierSelection.vue";

export default {
  name: "Personal",
  computed: mapState(["error"]),
  components: {
    InputField,
    TierSelection
  },
  methods: {
    validatePersonal: function() {
      this.SET_ROUTE("address");
      if (!this.error) this.$router.push("address");
    },
    clearDetails: function() {
      this.CLEAR_DETAILS();
      location.reload();
    },
    bootstrap: function() {
      this.SET_TITLE("Enter account info:");
      this.CLEAR_ERROR();
    },
    ...mapMutations(["SET_TITLE", "SET_ROUTE", "CLEAR_DETAILS", "CLEAR_ERROR"])
  },
  mounted() {
    this.bootstrap();
  }
};
</script>
