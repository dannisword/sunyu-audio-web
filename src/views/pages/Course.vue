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