<template>
  <md-field md-clearable>
    <label>{{ fieldName }}</label>
    <md-input v-model="value" required></md-input>
  </md-field>
</template>

<script>
export default {
  value: "RawDropDownField",
  computed: {
    value: {
      get() {
        return this.$store.state.form[this.field];
      },
      set(value) {
        this.$store.commit("updateField", { type: this.field, value: value });
      }
    }
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
