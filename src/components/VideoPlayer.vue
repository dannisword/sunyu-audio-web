<template>
  <video ref="videoPlayer" class="video-js vjs-big-play-centered"></video>
</template>

<script>
import videojs from "video.js";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    src: {
      type: String,
      default: "",
    },
    second: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      player: null,
      videoOptions: {
        autoplay: false,
        controls: true,
        fluid: true,
        sources: [
          {
            src: "", //"http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4",
            type: "video/mp4",
          },
        ],
      },
    };
  },
  created() {},
  mounted() {
    // 再一次渲染
    this.$nextTick(() => {});
  },
  watch: {
    src(newVal, oldVal) {
      this.videoOptions.sources[0].src = newVal;

      this.player = videojs(
        this.$refs.videoPlayer,
        this.videoOptions,
        function onPlayerReady() {
          //console.log("onPlayerReady", this);
        }
      );

      this.player.on("ended", this.onEnd)
    },
  },
  methods: {
    onAction(mode) {
      //this.player.
      this.$emit("on-action", mode);
    },
    onEnd() {
      this.$emit("on-action", "end");
    },
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
