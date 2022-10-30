<template>
  <v-container fluid class="pa-0">
    <Banner></Banner>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      class="parallax-wrap"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" md="8">
          <h1 class="text-h4 font-weight-bold mb-4">
            {{ course.courseName }}
          </h1>
          <v-card>
            <v-tabs color="deep-purple accent-4" vertical>
              <v-tab
                v-for="item in course.appendiies"
                :key="item.seq"
                @click="onChang(item)"
              >
                {{ item.unit }}
              </v-tab>
              <v-tab-item
                v-for="item in course.appendiies"
                :key="item.seq"
                :transition="false"
                class="fade"
              >
                <div class="videoContainer">
                  <video-player ref="video" :src="item.filePath" />
                </div>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row>
      <v-col md="8">
        <v-card class="mx-auto pa-4 mt-5">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title
                class="title amber--text text--darken-2 font-weight-bold mb-2"
                >本期重點</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>

          <v-list-item two-line v-for="(tip, i) in classInfo.tips">
            <v-list-item-content>
              <v-list-item-title
                ><span
                  class="text-h4 amber--text text--darken-2 font-weight-bold mr-3"
                  >{{ i + 1 }}</span
                >{{ tip.content }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card width="400" class="mx-auto pa-4 mt-5" elevation="2" outlined>
          <v-img
            height="150px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
          >
            <v-card-title
              class="white--text d-flex align-center flex-column justify-center mt-2"
            >
              <v-avatar size="80">
                <img alt="user" :src="classInfo.teacherUrl" />
              </v-avatar>
              <p class="text-h6">
                {{ classInfo.teacherName }}
              </p>
            </v-card-title>
          </v-img>
          <v-card-actions>
            <v-list-item class="grow">
              <v-row align="center" justify="center">
                <v-icon class="mr-1 amber--text text--darken-2t">
                  mdi-facebook
                </v-icon>
                <v-icon class="mr-1 amber--text text--darken-2">
                  mdi-youtube
                </v-icon>
              </v-row>
            </v-list-item>
          </v-card-actions>
          <v-card-text>
            <div class="subtitle-2">
              {{ classInfo.teacherInfo }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Banner from "@/components/Banner.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import pageMixin from "@/unit/pageMixin";
import { getCourse } from "@/api/course";

export default {
  name: "Knowledge",
  components: {
    Banner,
    VideoPlayer,
  },
  mixins: [pageMixin],
  data() {
    return {
      course: {},
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: "", //http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4
            type: "video/mp4",
          },
        ],
      },
      classInfo: {
      classTitle: "AutoMedia 影片教材大師",
      teacherUrl: require("@/assets/teacher01.png"),
      teacherName: "AutoMedia",
      teacherInfo: "影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片",
      tips: [
        {
          content:
            "數位學習服務：數位教材製作 / 線上學習系統 / 影片教材大師AutoMedia",
        },
        {
          content:
            "資訊軟體開發：票務自動化系統 / 人力資源管理系統 / 會計管理系統",
        },
        {
          content: "人工智慧應用：AI語音合成技術 / 客服機器人 / 多元整合服務",
        },
      ],
      items: [
        { tab: "第 1 章", url: "https://www.youtube.com/embed/EjtJt7-i2VM" },
        { tab: "第 2 章", url: "https://www.youtube.com/embed/EjtJt7-i2VM" },
        { tab: "第 3 章", url: "https://www.youtube.com/embed/EjtJt7-i2VM" },
        { tab: "第 4 章", url: "https://www.youtube.com/embed/EjtJt7-i2VM" },
      ],
    },
    };
  },
  created() {
    getCourse(this.$route.params.Seq).then((res) => {
      this.course = res;
    });
  },
  watch: {
    async $route(to, from) {
      const unit = this.decoded(from.params.Unit);
      await this.pause(unit);
    },
  },
  methods: {
    onChang(val) {
      const unit = this.encoded(val.filePath);
      const uri = `/Course/${this.$route.params.Seq}/${unit}`;
      this.$router.push(uri).catch((e) => {});
    },
    async pause(unit) {
      var video = this.$refs.video.filter((x) => x.src == unit);
      video[0].player.pause();
    },
  },
  beforeDestroy() {
    //console.log("beforeDestroy");
  },
  destroyed() {
    //console.log("destroyed");
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
  width: 960px;
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
