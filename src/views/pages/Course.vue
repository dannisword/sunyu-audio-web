<template>
  <v-container fluid class="pa-0">
    <v-overlay :value="loading">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-overlay>
    <Banner></Banner>
    <div class="parallax-wrap">
      <v-row align="center" justify="center">
        <v-col class="text-center" md="10" lg="10" xl="8">
          <h1 class="text-h5 font-weight-bold mb-4 mt-4 pt-5">
            {{ course.courseName }}
          </h1>
          <v-card>
            <div class="videoLayout">
              <video-player
                ref="video"
                :src="videoPath"
                @on-action="onAction"
              />
              <div class="video-side">
                <v-btn-toggle>
                  <v-btn
                    active-class="active-btn"
                    v-for="item in course.appendiies"
                    :key="item.seq"
                    @click="onChang(item)"
                  >
                    {{ item.unit }}
                  </v-btn>
                </v-btn-toggle>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-container>
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
            <span v-html="course.courseMemo"></span>
          </v-card>
        </v-col>
        <!-- 教師資訊 -->
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
                  <img alt="user" :src="course.teacherUrl" />
                </v-avatar>
                <p class="text-h6">
                  {{ course.authorName }}
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
                <span v-html="course.authorMemo"></span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import Banner from "@/components/Banner.vue";
import VideoPlayer from "@/components/VideoPlayer.vue";
import pageMixin from "@/unit/pageMixin";
import {
  getCourse,
  setViewHistory,
  getViewHistory,
  setViewHistoryEnd,
  addViewLog,
} from "@/api/course";
import moment from "moment";

export default {
  name: "Course",
  components: {
    Banner,
    VideoPlayer,
  },
  mixins: [pageMixin],
  data() {
    return {
      loading: false,
      course: {},
      appendix: {},
      viewHistory: {},
      startTime: "",
      videoPath: "",
      videoOptions: {
        autoplay: false,
        controls: true,
        fluid: true,
        sources: [
          {
            src: "",
            type: "video/mp4",
          },
        ],
      },
    };
  },
  created() {
    this.startTime = moment();
    this.onLoad();
  },
  computed: {
    video() {
      return this.$refs.video.player;
    },
  },
  watch: {
    appendix(newVal, oldVal) {
      if (oldVal.seq != undefined) {
        this.save(oldVal, this.video.currentTime());
      }
      this.setCurrentTime();
    },
  },
  methods: {
    onLoad: async function () {
      this.loading = true;
      getCourse(this.$route.params.Seq)
        .then((resp) => {
          this.course = resp;
          this.appendix = this.course.appendiies[0];
          this.course.teacherUrl = `${this.course.authorImageType} ${this.course.authorImage}`;

          setTimeout(() => {
            this.loading = false;
          }, 500);
        })
        .catch((e) => {
          this.loading = false;
        });
    },
    onChang: async function (val) {
      // 觀看紀錄
      this.loading = true;
      this.video.pause();
      this.appendix = val;
    
      this.loading = false;
    },
    onAction(val) {
      setViewHistoryEnd(this.viewHistory.seq).then((resp) => {});
      // 結束
    },
    setCurrentTime: function () {
      this.videoPath = `${process.env.VUE_APP_VIDEO_PATH}${this.appendix.filePath}${this.appendix.fileName}`;
      // 紀錄
      this.$nextTick(async () => {
        var resp = await getViewHistory(
          this.appendix.courseSeq,
          this.appendix.seq
        );
        if (this.video == null) {
          return;
        }
        this.viewHistory = resp;
        if (this.viewHistory.seq == 0) {
          this.save(this.appendix, 0);
        }
        this.video.src(this.videoPath);
        this.video.currentTime(resp.viewLastTime);
      });
    },
    save(appendix, second) {
      const data = {
        seq: 0,
        courseSeq: appendix.courseSeq,
        appendixSeq: appendix.seq,
        viewLastTime: second,
        deleteTag: 0,
      };
      setViewHistory(data).then((resp) => {});
    },
  },
  async beforeDestroy() {
    await this.save(this.appendix, this.video.currentTime());
    var data = {
      courseSeq: this.course.seq,
      appendixSeq: this.appendix.seq,
      viewStartTime: this.startTime,
    };
    await addViewLog(data);
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
  margin: 80px -12px -12px -12px;
  background: url("../../assets/lesson01_bg_blur.png") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;

  h1 {
    color: #fff;
    font-size: 2rem;
  }

  .row {
    margin: 0;
  }
}

.v-tabs--vertical > .v-window {
  height: 390px;
}
.v-tabs--vertical {
  display: flex;
  flex-direction: row-reverse;
}

.videoLayout {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.video-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .v-btn-toggle {
    flex-direction: column;
    width: 100%;
    button {
      &:first-of-type {
        margin-top: 5px;
      }

      margin-bottom: 5px;
      border-radius: 2px !important;
      border: 1px solid !important;
    }
  }
}

@media screen and (max-width: 768px) {
  .videoLayout {
    flex-direction: column;
  }

  .video-side {
    width: 100%;
    flex-direction: row;
    .v-btn-toggle {
      flex-direction: row;
      align-items: center;
      button {
        &:first-of-type {
          margin: 0 5px;
        }

        margin-right: 5px;
        margin-bottom: 0;
      }
    }
  }
}

.active-btn {
  background: #ffb200 !important;
  color: #fff !important;
  &:focus::before {
    background: #ffb200 !important;
    color: #fff !important;
    opacity: 1 !important;
  }

  &:hover,
  &:active,
  &:focus,
  &:visited,
  &:target {
    background: #ffb200 !important;
    color: #fff !important;
  }

  &:first-of-type {
    margin-top: 5px;
  }
  margin-bottom: 10px;
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
