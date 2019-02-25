<template>
  <md-table-row>
    <md-table-cell>
      <md-datepicker v-model="value" :class="validation[this.field]" required>
        <label>{{ fieldName }}</label>
        <span class="md-error">There is an error</span>
      </md-datepicker>
    </md-table-cell>
  </md-table-row>
</template>

<script>
import { mapState } from "vuex";

export default {
  value: "ExpirationField",
  computed: {
    value: {
      get() {
        return this.$store.state.form[this.field];
      },
      set(value) {
        this.$store.commit("updateField", { type: this.field, value: value });
      }
    },
     ...mapState(["title", "loading", "validation"])
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
