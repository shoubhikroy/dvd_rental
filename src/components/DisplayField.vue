<template>
  <md-card-content>
    <md-table>
      <md-table-row>
        <md-table-head>Name:</md-table-head>
        <md-table-head>{{ form.first + " " + form.last }}</md-table-head>
      </md-table-row>
      <PairDisplayField label="Tier:" :value="form.tier" />
      <PairDisplayField label="E-mail:" :value="form.email" />
      <MultiLineColumnField label="Shipping address:" :values="longAddress" />
      <MultiLineColumnField label="Card Info:" :values="cardInfo" />
      <MultiLineColumnField label="Billing address:" :values="billingAddress" />
    </md-table>
  </md-card-content>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import PairDisplayField from "@/components/PairDisplayField.vue";
import MultiLineColumnField from "@/components/MultiLineColumnField.vue";

export default {
  value: "DisplayField",
  components: { PairDisplayField, MultiLineColumnField },
  computed: {
    ...mapGetters(["longAddress", "billingAddress", "cardInfo"]),
    ...mapState(["form"])
  },
  props: {
    fieldName: String,
    stateValue: String
  }
};
</script>
