<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="4"
        sm="6"
        v-for="appItem in appItems"
        :key="appItem.id"
      >
        <v-card elevation="3" outlined @click="onNav(appItem)">
          <v-img :src="appItem.imgUrl"></v-img>
          <v-card-text class="pa-5">
            <div class="d-sm-flex align-center">
              <h3 class="title blue-grey--text text--darken-2 font-weight-bold">
                {{ appItem.title }}
              </h3>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getUser1 } from "@/api/course";
import pageMixin from "@/unit/pageMixin";

export default {
  name: "Dashboard",
  mixins: [pageMixin],
  data: () => ({
    appItems: [
      {
        id: 1,
        path: "/training-class",
        title: "課程訓練管理模組",
        imgUrl: require("@/assets/img01.jpg"),
      },
      {
        id: 2,
        path: "/professional-data",
        title: "專家資料庫",
        imgUrl: require("@/assets/img02.jpg"),
      },
      {
        id: 3,
        path: "/quizzes",
        title: "測驗題庫管理模組",
        imgUrl: require("@/assets/img03.jpg"),
      },
      {
        id: 4,
        path: "AllClass",
        title: "產業創新知識庫",
        imgUrl: require("@/assets/img04.jpg"),
      },
      {
        id: 5,
        path: "/know-how",
        title: "智慧商情模組",
        imgUrl: require("@/assets/img05.jpg"),
      },
      {
        id: 6,
        path: "/wrok-management",
        title: "工作事項管理模組",
        imgUrl: require("@/assets/img06.jpg"),
      },
    ],
  }),
  created() {},
  methods: {
    onNav(val) {
      this.$router.push({
        name: val.path,
        params: {
          token:
            "",
        },
      });
    },
  },
};
</script>

<style lang="scss">
.theme--light .v-content {
  background-color: #eef5f9;
}
</style>
