<template>
  <v-app-bar app clipped-left clipped-right class="header-img">
    <v-toolbar-title style="cursor: pointer" class="d-flex align-center">
      <router-link v-slot="{ navigate }" :to="{ name: 'Home' }" custom>
        <span role="link" @click="navigate" class="logo-text ml-2">
          <img src="../assets/LOGO_220308_cn.png" class="pt-3" />
        </span>
      </router-link>

    </v-toolbar-title>

    <v-spacer />
    <!---right part -->
    <div class="d-none d-sm-flex">
      <v-btn
        color="grey darken-3"
        v-for="link in userprofile"
        :key="link.id"
        text
        :href="link.url"
      >
        {{ link.title }}
      </v-btn>
    </div>

    <div class="d-flex d-sm-none">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, i) in userprofile" :key="i" @click="href">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>
<script>
// Utilities
export default {
  name: "Header",
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userprofile: [
      {
        id: 1,
        title: "所有課程",
        url: "/all-class",
      },
      {
        id: 2,
        title: "我的課程",
        url: "/my-class",
      },
      {
        id: 3,
        title: "學習中心",
        url: "/learn-central",
      },
    ],
    href() {
      return undefined;
    },
  }),
  computed: {
   
  },
  methods: {

  },
};
</script>
