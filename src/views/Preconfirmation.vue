<template>
  <div class="about">
    <DisplayField />
    <md-card-actions>
      <md-button class="md-raised" v-on:click.stop.prevent="previous()">
        Previous
      </md-button>
      <md-button
        class="md-raised md-accent"
        v-on:click.stop.prevent="clearDetails()"
      >
        Clear
      </md-button>
      <md-button
        class="md-raised md-primary"
        v-on:click.stop.prevent="continueToConfirm()"
      >
        Submit
      </md-button>
    </md-card-actions>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
import DisplayField from "@/components/DisplayField.vue";

export default {
  name: "continueToConfirm",
  components: { DisplayField },
  methods: {
    previous: function() {
      this.SET_ROUTE("creditcard");
      this.$router.push("creditcard");
    },
    continueToConfirm: function() {
      this.SET_LOADING(true);
      this.callConfirm().then(() => {
        this.SET_LOADING(false);
      });
      this.SET_ROUTE("confirm");
      this.$router.push("confirm");
    },
    clearDetails: function() {
      this.CLEAR_DETAILS();
      location.reload();
    },
    bootstrap: function() {
      this.SET_TITLE("Review your info: ");
    },
    ...mapMutations(["SET_TITLE", "SET_ROUTE", "CLEAR_DETAILS", "SET_LOADING"]),
    ...mapActions(["callConfirm"])
  },
  mounted() {
    this.bootstrap();
  }
};
</script>
