<template>
  <v-container class="pa-0">
    <v-overlay :value="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>
    <Banner />

    <v-row class="list-content">
      <v-col cols="12">
        <v-card class="deep-orange-border-bottom">
          <v-card-text class="pa-3">
            <div class="d-sm-flex align-center">
              <h3
                class="title deep-orange--text text--darken-2 font-weight-bold"
              >
                我的課程
              </h3>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4" sm="6" v-for="item in self" :key="item.seq" text>
        <v-card elevation="3" outlined @click="onNav(item)">
          <v-img src="../../assets/lesson01_bg.png">
            <img :src="item.src" class="lesson_pic" />
          </v-img>
          <v-card-title
            class="title blue-grey--text text--darken-2 font-weight-bold mb-1"
            >{{ item.courseNmae }}
          </v-card-title>
          <v-card-text>
            <div class="d-flex align-center mx-0">
              <v-avatar size="56">
                <img alt="user" :src="item.authorSrc" />
              </v-avatar>

              <div class="text-subtitle-1 ms-4">
                {{ item.teacherName }}
              </div>
            </div>
            <div class="d-flex justify-space-between align-center mt-2 mb-2">
              <v-progress-linear
                color="lime"
                height="15"
                v-model="item.value"
                striped
              >
                <strong>{{ Math.ceil(item.value) }}%</strong>
              </v-progress-linear>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> 提示訊息 </v-card-title>
        <v-card-text class="m-1">
          <h2>{{ message }}</h2>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">確認</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Banner from "../../components/Banner.vue";
import pageMixin from "@/unit/pageMixin";

import { getSelf, getSignup } from "@/api/course";
export default {
  name: "MyClass",
  mixins: [pageMixin],
  components: {
    Banner,
  },
  data: () => ({
    self: [],
    loading: false,
    message: "",
    dialog: false,
    params: {
      self: {
        currentPage: 1,
        itemsPerPage: 10,
      },
    },
    classItems: [
      {
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson01.png"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        value: 30,
      },
      {
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson02.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        value: 50,
      },
      {
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson03.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        value: 50,
      },
      {
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson04.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        value: 60,
      },
      {
        path: "/class-content",
        title: "影片教材大師",
        imgUrl: require("@/assets/lesson05.jpeg"),
        teacherInfo: {
          teacherUrl: require("@/assets/teacher01.png"),
          teacherName: "AutoMedia",
        },
        value: 100,
      },
    ],
  }),
  created() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      this.loading = true;
      let params = this.getParams(this.params.self);

      getSelf(params)
        .then((resp) => {
          if (resp.resultCode == 10) {
            this.self = resp.content;
            for (let item of this.self) {
              item.src = `${item.courseImageType} ${item.courseImage}`;
              item.authorSrc = `${item.authorImageType} ${item.authorImage}`;
            }
          } else {
            this.self = [];
            this.message = resp.message;
            this.dialog = true;
          }
          this.loading = false;
        })
        .catch((e) => {
          this.loading = false;
        });
    },
    onNav(val) {
      // 檢查是否報名
      getSignup(val.seq).then((resp) => {
        if (resp.resultCode == 10) {
          const uri = `/Course/${val.seq}`;
          this.$router.push(uri);
        } else {
          this.dialog = true;
          this.message = resp.message;
        }
      });
    },
  },
};
</script>

<style lang="scss">
.theme--light .v-content {
  background-color: #fff;
}
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
  padding: 0;
  height: 100%;
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

.parallax-wrap {
  width: 100vw;
  margin: 100px -12px -12px -12px;
}

.v-tabs--vertical > .v-window {
  height: 390px;
}
.v-tabs--vertical {
  display: flex;
  flex-direction: row-reverse;
}

.videoContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

iframe {
  /* optional */
  width: 100%;
  height: 100%;
}

.fade {
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2022-9-25 4:18:24
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in
 * ----------------------------------------
 */
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
