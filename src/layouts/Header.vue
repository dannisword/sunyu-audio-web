<template>
  <v-app-bar app clipped-left clipped-right class="header-img">
    <v-toolbar-title style="cursor: pointer" class="d-flex align-center">
      <router-link v-slot="{ navigate }" :to="{ name: '/AllClass' }" custom>
        <span role="link" class="logo-text ml-2">
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
        text
        @click="onNav(link)"
      >
        {{ link.title }}
      </v-btn>
    </div>
  </v-app-bar>
</template>
<script>
// Utilities
export default {
  name: "Header",
  data: () => ({
    userprofile: [
      {
        id: 1,
        title: "所有課程",
        url: "/AllClass",
      },
      {
        id: 2,
        title: "我的課程",
        url: "/MyClass",
      },
    ],
    href() {
      return undefined;
    },
  }),
  methods: {
    onNav(val) {
      this.$emit("onRoute");
      this.$router.push(val.url).catch((e) => {

      });
    },
  },
};
</script>
