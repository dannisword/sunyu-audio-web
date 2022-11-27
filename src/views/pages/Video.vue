<template>
  <div>
    <video-player ref="video" :src="src" />
    <input style="padding: 8px" v-model="second" />
    <v-btn @click="onAction(1)">start </v-btn>
    <v-btn @click="onAction(2)">stop </v-btn>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";

export default {
  components: {
    VideoPlayer,
  },
  data() {
    return {
      play: null,
      second: 5,
      src: "http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4",
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: "http://localhost:8080/assets/mp4/1001.mp4", //"http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4",
            type: "video/mp4",
          },
        ],
      },
    };
  },
  computed: {
    video() {
      return this.$refs.video.player;
    },
  },
  mounted() {
    //this.play = videojs(this.$refs.video);
    //this.play = this.$video(this.$refs.video);
    window.onpopstate = function (event) {
      alert(
        "location: " +
          document.location +
          ", state: " +
          JSON.stringify(event.state)
      );
    };
  },
  created() {
    //this.play = this.$refs.video;
    this.play.pause();
  },
  methods: {
    onAction(action) {
      if (action == 1) {
        this.video.currentTime(this.second);
        this.video.play();
      }
      //pause
      if (action == 2) {
        this.video.pause();
      }
    },
  },
  beforeDestroy() {
  
  },
  destroyed() {

  },
};
</script>
