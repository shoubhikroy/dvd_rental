<template>
  <md-table-row>
    <md-table-cell>{{ label }}</md-table-cell>
    <md-table-cell>{{ value }}</md-table-cell>
  </md-table-row>
</template>

<script>
export default {
  value: "InputField",
  props: {
    label: String,
    value: String
  }
};
</script>
