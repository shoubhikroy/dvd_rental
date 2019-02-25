<template>
  <div class="md-title">
    <md-toolbar md-elevation="0">
      <h3 class="md-title">
        <div v-if="!loading">{{ title }}</div>
        <div v-if="loading">loading...</div>
      </h3>
    </md-toolbar>
    <div>
      <md-progress-bar v-if="loading" md-mode="indeterminate">
      </md-progress-bar>
      <md-progress-bar v-if="loading" class="md-accent" md-mode="indeterminate">
      </md-progress-bar>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ActiveTab",
  computed: mapState(["title", "loading"])
};
</script>
