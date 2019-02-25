<template>
  <div class="page-container">
    <md-card>
        <div class="md-title">
          <ActiveTab />
        </div>
      <router-view v-if="!loading" />
    </md-card>
  </div>
</template>

<script>
import ActiveTab from "@/components/ActiveTab.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  computed: mapState(["activeRoute", "loading"]),
  components: {
    ActiveTab
  },
  methods: {
    bootstrap: function() {
      this.$router.push(this.activeRoute);
    }
  },
  mounted() {
    this.bootstrap();
  }
};
</script>
