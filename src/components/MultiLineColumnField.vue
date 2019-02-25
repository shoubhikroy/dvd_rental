<template>
  <md-table-row>
    <md-table-cell>{{ label }}</md-table-cell>
    <md-table-cell>
      <MultiLineField :values="values" />
    </md-table-cell>
  </md-table-row>
</template>

<script>
import MultiLineField from "@/components/MultiLineField.vue";

export default {
  value: "MultiLineColumnField",
  components: { MultiLineField },
  props: {
    values: Array,
    label: String
  }
};
</script>
