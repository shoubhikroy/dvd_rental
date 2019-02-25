<template>
  <div>
    <md-card-content>
      <md-table>
        <md-table-row>
          <md-table-cell>
            <md-icon class="md-size-5x">thumb_up</md-icon>
          </md-table-cell>
        </md-table-row>
      </md-table>
      <DisplayField />
    </md-card-content>
    <md-card-actions>
      <md-button
        class="md-raised md-accent"
        v-on:click.stop.prevent="clearDetails()"
      >
        Reset Form
      </md-button>
    </md-card-actions>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapState } from "vuex";
import DisplayField from "@/components/DisplayField.vue";

export default {
  name: "Confirm",
  components: { DisplayField },
  computed: mapState(["loading"]),
  methods: {
    bootstrap: function() {
      this.SET_TITLE("Congratulations");
    },
    clearDetails: function() {
      this.CLEAR_DETAILS();
      location.reload();
    },
    ...mapMutations(["SET_TITLE", "CLEAR_DETAILS"])
  },
  mounted() {
    this.bootstrap();
  }
};
</script>
