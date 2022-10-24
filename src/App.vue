<template>
  <!--
  <v-app id="materialpro" :class="`${!$vuetify.breakpoint.smAndDown ? 'full-sidebar' : 'mini-sidebar'}`">
    <router-view />
  </v-app>
  -->
  <router-view />
</template>

<script>
import "@/assets/css/app.scss";
export default {
  name: "App",
  data: () => ({
    //
  }),
};
</script>
