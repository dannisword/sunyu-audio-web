<template>
  <v-container class="pa-10">
    <v-overlay :value="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>

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
          <v-img class="lesson_pic" :src="item.src"> </v-img>

          <v-card-title
            class="title blue-grey--text text--darken-2 font-weight-bold mb-1"
            >{{ item.courseName }}
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center mx-0">
              <v-avatar size="56">
                <img alt="user" :src="item.authorSrc" />
              </v-avatar>

              <div class="text-subtitle-1 ms-4">AutoMedia</div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 繼續看 -->
    <v-row align="center" v-if="half.length > 0">
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
          <v-img class="lesson_pic" :src="item.src"> </v-img>
          <v-card-title
            class="title blue-grey--text text--darken-2 font-weight-bold mb-1"
            >{{ item.courseName }}
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center mx-0">
              <v-avatar size="56">
                <img alt="user" :src="item.authorSrc" />
              </v-avatar>

              <div class="text-subtitle-1 ms-4">AutoMedia</div>
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
          <v-img class="lesson_pic" :src="item.src"> </v-img>
          <v-card-title
            class="title blue-grey--text text--darken-2 font-weight-bold mb-1"
            >{{ item.courseName }}
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center mx-0">
              <v-avatar size="56">
                <img alt="user" :src="item.authorSrc" />
              </v-avatar>

              <div class="text-subtitle-1 ms-4">AutoMedia</div>
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
    loading: false,
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
  async created() {
    /*
    let params = this.getParams(this.params.half);
    const half = await getHalf(params);
    if (half.resultCode == 10) {
      this.half = half.content;
      for (let item of this.half) {
        item.src = `${item.courseImageType} ${item.courseImage}`;
        item.authorSrc = `${item.authorImageType} ${item.authorImage}`;
      }
    } else {
      this.half = [];
    }
    */

    let params = this.getParams(this.params.last);

    getLast(params).then((resp) => {
      if (resp.resultCode == 10) {
        this.last = resp.content;
        for (let item of this.last) {
          item.src = `${item.courseImageType} ${item.courseImage}`;
          item.authorSrc = `${item.authorImageType} ${item.authorImage}`;
        }
      } else {
        this.last = [];
      }
    });

    params = this.getParams(this.params.mine);
    getMine(params).then((resp) => {
      if (resp.resultCode == 10) {
        this.mine = resp.content;
        for (let item of this.mine) {
          item.src = `${item.courseImageType} ${item.courseImage}`;
          item.authorSrc = `${item.authorImageType} ${item.authorImage}`;
        }
      } else {
        this.mine = [];
      }
    });
  },
  async mounted() {
    this.loading = true;
    setTimeout(async () => {
      let params = this.getParams(this.params.half);
      this.half = [];
      getHalf(params)
        .then((resp) => {
          if (resp.resultCode == 10) {
            this.half = resp.content;
            for (let item of this.half) {
              item.src = `${item.courseImageType} ${item.courseImage}`;
              item.authorSrc = `${item.authorImageType} ${item.authorImage}`;
            }
          }
          this.loading = false;
        })
        .catch((e) => {
          this.loading = false;
        });
    }, 1000);
  },
  methods: {
    onNav(val) {
      const uri = `Course/${val.seq}`;
      this.$router.push(uri);
    },
  },
};
</script>

<style lang="scss" scoped>
.deep-orange-border-bottom {
  border-bottom: 1px solid #e64a19 !important;
}

@media (min-width: 1904px) {
  .container {
    max-width: 1280px;
  }
}

.lesson_pic {
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -8%);
  width: 85%;
  height: 50%;
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
