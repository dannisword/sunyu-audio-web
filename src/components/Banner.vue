<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="banner">
        <v-carousel
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="100"
          :continuous="true"
          :show-arrows="true"
          :hide-delimiters="true"
        >
          <v-carousel-item
            v-for="activity in activities"
            :key="activity.seq"
            :src="activity.image"
          >
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getMaps } from "@/api/course";

export default {
  name: "Banner",
  data: () => ({
    img: "",
    activities: [
      {
        id: 1,
        mainTitle: "線上帶你學到會",
        subTitle: "在線學習人數超過 30, 000",
        imgUrl: require("@/assets/slide01.png"),
      },
      {
        id: 2,
        mainTitle: "線上 24 小時內隨傳隨到",
        subTitle: "學習不卡關",
        imgUrl: require("@/assets/slide01.png"),
      },
    ],
  }),
  created() {
    getMaps().then((resp) => {
      this.activities = resp;
      for (let item of this.activities) {
        item.imgSrc = `data:image/png;base64, ${item.image}`;
      }
    });
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
