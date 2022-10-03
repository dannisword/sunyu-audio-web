<template>
  <div>
    <video-player ref="video" :options="videoOptions" />
    <input
      style="padding: 8px"
      v-model="secound"
    />
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
      secound: 5,
      videoOptions: {
        autoplay: true,
        controls: true,

        sources: [
          {
            src: "http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4",
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
  },
  created() {
    //this.play = this.$refs.video;
  },
  methods: {
    onAction(action) {
      console.log(this.secound);
      if (action == 1) {
        this.video.currentTime(this.secound);
        this.video.play();
      }
      //pause
      if (action == 2) {
        this.video.pause();
      }
    },
  },
};
</script>
