<template>
  <md-table-row>
    <md-table-cell>
      <div class="md-body-2" :style="validation.tier">{{ fieldName }}</div>
      <md-radio
        :style="validation.tier"
        v-model="value"
        value="Regular plan at $7.99/month" required
      >
        Regular plan at $7.99/month
      </md-radio>
      <md-radio
        :style="validation.tier"
        v-model="value"
        value="Premium plan at $12.99/month" required
      >
        Premium plan at $12.99/month
      </md-radio>
    </md-table-cell>
  </md-table-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  value: "TierSelection",
  computed: {
    value: {
      get() {
        return this.$store.state.form[this.field];
      },
      set(value) {
        this.$store.commit("updateField", { type: this.field, value: value });
      }
    },
    ...mapState(["validation"])
  },
  data: function() {
    return {
      field: this.stateValue
    };
  },
  props: {
    fieldName: String,
    stateValue: String
  }
};
</script>
