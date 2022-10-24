<template>
  <v-app >
    <div class="app-container">
      <Header ></Header>
      <v-content>
        <v-container class="fill-height" fluid>
          <router-view />
        </v-container>
      </v-content>

      <Footer></Footer>
    </div>
  </v-app>
</template>

<script>
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
export default {
  name: "Layout",
  components: {
    Header,
    Sidebar,
    Footer,
  },

  data: () => ({
    expandOnHover: false,
  }),
  methods: {
 
  },
};
</script>
