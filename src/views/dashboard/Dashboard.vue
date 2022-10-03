<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="4"
        sm="6"
        v-for="appItem in appItems"
        :key="appItem"
        text
      >
        <router-link :to="appItem.path" custom>
          <v-card elevation="3" outlined>
            <v-img :src="appItem.imgUrl"></v-img>
            <v-card-text class="pa-5">
              <div class="d-sm-flex align-center">
                <h3
                  class="title blue-grey--text text--darken-2 font-weight-bold"
                >
                  {{ appItem.title }}
                </h3>
              </div>
            </v-card-text>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "BasicDashboard",
  data: () => ({
    appItems: [
      {
        path: "/training-class",
        title: "課程訓練管理模組",
        imgUrl: require("@/assets/img01.jpg"),
      },
      {
        path: "/professional-data",
        title: "專家資料庫",
        imgUrl: require("@/assets/img02.jpg"),
      },
      {
        path: "/quizzes",
        title: "測驗題庫管理模組",
        imgUrl: require("@/assets/img03.jpg"),
      },
      {
        path: "/knowledge",
        title: "產業創新知識庫",
        imgUrl: require("@/assets/img04.jpg"),
      },
      {
        path: "/know-how",
        title: "智慧商情模組",
        imgUrl: require("@/assets/img05.jpg"),
      },
      {
        path: "/wrok-management",
        title: "工作事項管理模組",
        imgUrl: require("@/assets/img06.jpg"),
      },
    ],
  }),
  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    },
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task,
      });

      this.task = null;
    },
  },
};
</script>

<style lang="scss">
.theme--light .v-content {
  background-color: #eef5f9;
}
</style>
