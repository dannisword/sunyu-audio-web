<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
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
  },
  data() {
    return {
 
      player: null,
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
  mounted() {
    this.videoOptions.sources[0].src = this.src;
    this.player = videojs(
      this.$refs.videoPlayer,
      this.videoOptions,
      function onPlayerReady() {
        //console.log("onPlayerReady", this);
      }
    );
    //this.player.currentTime(20);
  },
  methods: {
    onAction(action) {
      this.player.pause();
      this.$emit("on-action");
    },
  },
  beforeDestroy() {
    if (this.player) {
      //
      console.log("record");
      console.log(this.player);
      this.player.dispose();
    }
  },
};
</script>
