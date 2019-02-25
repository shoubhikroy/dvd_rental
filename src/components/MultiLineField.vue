<template>
  <div>
    <div v-for="value in items" :key="value">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  value: "MultiLineField",
  data: function() {
    return {
      items: this.values
    };
  },
  props: {
    values: Array
  }
};
</script>
