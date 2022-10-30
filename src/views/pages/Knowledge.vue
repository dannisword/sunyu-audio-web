<template>
  <v-container>
    <Banner />
    <!-- 最新上架 -->
    <v-row align="center" class="list-content">
      <v-col cols="12">
        <v-card class="deep-orange-border-bottom">
          <v-card-text class="pa-3">
            <div class="d-sm-flex align-center">
              <h3
                class="title deep-orange--text text--darken-2 font-weight-bold"
              >
                最新上架
              </h3>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" sm="6" v-for="item in last" text>
        <v-card elevation="3" outlined @click="onNav(item)">
          <v-img src="@/assets/lesson01_bg.png"> </v-img>
          <v-card-title
            class="title blue-grey--text text--darken-2 font-weight-bold mb-1"
            >{{ item.courseName }}
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center mx-0">
              <v-avatar size="56">
                <img alt="user" src="@/assets/teacher01.png" />
              </v-avatar>

              <div class="text-subtitle-1 ms-4">AutoMedia</div>
            </div>
            <div class="d-flex justify-space-between align-center">
              <div
                class="my-4 body-2 text-decoration-line-through blue-grey--text text--darken-1"
              >
                原價 $ 1000
              </div>
              <div class="my-4">
                <span
                  class="body-2 font-weight-bold amber--text text--darken-3"
                >
                  優惠價
                </span>
                <span
                  class="text-h5 font-weight-bold amber--text text--darken-3"
                >
                  $ 2000
                </span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- 繼續看 -->
    <v-row align="center">
      <v-col cols="12">
        <v-card class="deep-orange-border-bottom">
          <v-card-text class="pa-3">
            <div class="d-sm-flex align-center">
              <h3
                class="title deep-orange--text text--darken-2 font-weight-bold"
              >
                繼續看
              </h3>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" sm="6" v-for="item in half" text>
        <v-card elevation="3" outlined @click="onNav(item)">
          <v-img src="@/assets/lesson01_bg.png"> </v-img>
          <v-card-title
            class="title blue-grey--text text--darken-2 font-weight-bold mb-1"
            >{{ item.courseName }}
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center mx-0">
              <v-avatar size="56">
                <img alt="user" src="@/assets/teacher01.png" />
              </v-avatar>

              <div class="text-subtitle-1 ms-4">AutoMedia</div>
            </div>
            <div class="d-flex justify-space-between align-center">
              <div
                class="my-4 body-2 text-decoration-line-through blue-grey--text text--darken-1"
              >
                原價 $ 1000
              </div>
              <div class="my-4">
                <span
                  class="body-2 font-weight-bold amber--text text--darken-3"
                >
                  優惠價
                </span>
                <span
                  class="text-h5 font-weight-bold amber--text text--darken-3"
                >
                  $ 2000
                </span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 全部課程 -->
    <v-row align="center">
      <v-col cols="12">
        <v-card class="deep-orange-border-bottom">
          <v-card-text class="pa-3">
            <div class="d-sm-flex align-center">
              <h3
                class="title deep-orange--text text--darken-2 font-weight-bold mr-3"
              >
                全部課程
              </h3>
              <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip
                  v-for="classOption in classOptions"
                  :key="classOption.optionID"
                >
                  {{ classOption.optionName }}
                </v-chip>
              </v-chip-group>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" sm="6" v-for="item in mine" text>
        <v-card elevation="3" outlined @click="onNav(item)">
          <v-img src="@/assets/lesson01_bg.png"> </v-img>
          <v-card-title
            class="title blue-grey--text text--darken-2 font-weight-bold mb-1"
            >{{ item.courseName }}
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center mx-0">
              <v-avatar size="56">
                <img alt="user" src="@/assets/teacher01.png" />
              </v-avatar>

              <div class="text-subtitle-1 ms-4">AutoMedia</div>
            </div>
            <div class="d-flex justify-space-between align-center">
              <div
                class="my-4 body-2 text-decoration-line-through blue-grey--text text--darken-1"
              >
                原價 $ 1000
              </div>
              <div class="my-4">
                <span
                  class="body-2 font-weight-bold amber--text text--darken-3"
                >
                  優惠價
                </span>
                <span
                  class="text-h5 font-weight-bold amber--text text--darken-3"
                >
                  $ 2000
                </span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- -->
    <v-row align="center">
      <v-col cols="12">
        <v-card class="deep-orange-border-bottom">
          <v-card-text class="pa-3">
            <div class="d-sm-flex align-center">
              <h3
                class="title deep-orange--text text--darken-2 font-weight-bold mr-3"
              >
                講師陣容
              </h3>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
        v-for="teacher in teacherList"
        :key="teacher.teacherID"
        text
      >
        <v-card elevation="3" outlined>
          <v-card-text>
            <div class="d-flex flex-column align-center">
              <v-avatar size="80">
                <img alt="user" :src="teacher.teacherUrl" />
              </v-avatar>
              <div class="text-h6">
                {{ teacher.teacherName }}
              </div>
            </div>

            <div class="text-caption">
              {{ teacher.teacherInfo }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getLast, getHalf, getMine } from "@/api/course";
import Banner from "../../components/Banner.vue";
import pageMixin from "@/unit/pageMixin";

export default {
  name: "Knowledge",
  mixins: [pageMixin],
  components: {
    Banner,
  },
  data: () => ({
    params: {
      last: {
        currentPage: 1,
        itemsPerPage: 2,
      },
      half: {
        currentPage: 1,
        itemsPerPage: 3,
      },
      mine: {
        currentPage: 1,
        itemsPerPage: 6,
      },
    },
    last: [],
    half: [],
    mine: [],
    activities: [
      {
        id: 1,
        mainTitle: "線上帶你學到會",
        subTitle: "在線學習人數超過 30, 000",
      },
      {
        id: 2,
        mainTitle: "線上 24 小時內隨傳隨到",
        subTitle: "學習不卡關",
      },
    ],
    classItems: [
      {
        id: 1,
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson01.png"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        unitPrice: 4200,
        priceLimit: 2100,
      },
      {
        id: 2,
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson02.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        unitPrice: 4200,
        priceLimit: 2100,
      },
      {
        id: 3,
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson03.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        unitPrice: 4200,
        priceLimit: 2100,
      },
      {
        id: 4,
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson04.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        unitPrice: 4200,
        priceLimit: 2100,
      },
      {
        id: 5,
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson05.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        unitPrice: 4200,
        priceLimit: 2100,
      },
    ],
    trackingItems: [
      {
        id: 1,
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson03.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        unitPrice: 4200,
        priceLimit: 2100,
      },
      {
        id: 2,
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson04.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        unitPrice: 4200,
        priceLimit: 2100,
      },
      {
        id: 3,
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson05.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        unitPrice: 4200,
        priceLimit: 2100,
      },
    ],
    teacherList: [
      {
        teacherID: 1,
        teacherUrl: require("@/assets/teacher01.png"),
        teacherName: "AutoMedia",
        teacherInfo: "影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片",
      },
      {
        teacherID: 2,
        teacherUrl: require("@/assets/teacher01.png"),
        teacherName: "AutoMedia",
        teacherInfo: "影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片",
      },
      {
        teacherID: 3,
        teacherUrl: require("@/assets/teacher01.png"),
        teacherName: "AutoMedia",
        teacherInfo: "影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片",
      },
      {
        teacherID: 4,
        teacherUrl: require("@/assets/teacher01.png"),
        teacherName: "AutoMedia",
        teacherInfo: "影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片",
      },
      {
        teacherID: 5,
        teacherUrl: require("@/assets/teacher01.png"),
        teacherName: "AutoMedia",
        teacherInfo: "影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片",
      },
    ],
    classOptions: [
      { optionID: 1, optionName: "class1" },
      { optionID: 2, optionName: "class2" },
      { optionID: 3, optionName: "class3" },
    ],
  }),
  created() {
    let params = this.getParams(this.params.last);
    getLast(params).then((resp) => {
      this.last = resp;
    });
    params = this.getParams(this.params.half);
    getHalf(params).then((resp) => {
      this.half = resp;
    });
    params = this.getParams(this.params.mine);
    getMine(params).then((resp) => {
      this.mine = resp;
    });
    // all
  },
  methods: {
    onNav(val) {
      const uri = `Course/${val.seq}/1`;
      //const uri = "/Video";
      this.$router.push(uri);
    },
  },
};
</script>

<style lang="scss">
.deep-orange-border-bottom {
  border-bottom: 1px solid #e64a19 !important;
}

.lesson_pic {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  padding: 0.8rem;
}
.banner {
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
}

.list-content {
  margin-top: 100px !important;
}
</style>
