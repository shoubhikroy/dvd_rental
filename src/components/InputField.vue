<template>
  <md-table-row>
    <md-table-cell>
      <RawInputField :fieldName="fieldName" :stateValue="stateValue" :type="type" :maxLength="maxLength" />
    </md-table-cell>
  </md-table-row>
</template>

<script>
import RawInputField from "@/components/RawInputField.vue";

export default {
  value: "InputField",
  components: { RawInputField },
  props: {
    fieldName: String,
    stateValue: String,
    type: String,
    maxLength: String
  }
};
</script>
