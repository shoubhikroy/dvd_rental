<template>
  <md-field :class="validation[this.field]" md-clearable>
    <label>{{ fieldName }}</label>
    <md-input v-model="value" :type="fieldType" :maxlength="maxlength" required></md-input>
    <span class="md-error">There is an error</span>
  </md-field>
</template>

<script>
import { mapState } from "vuex";

export default {
  value: "RawInputField",
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
      field: this.stateValue,
      fieldType: this.type,
      maxlength: this.maxLength
    };
  },
  props: {
    fieldName: String,
    stateValue: String,
    type: String,
    maxLength: String
  }
};
</script>
