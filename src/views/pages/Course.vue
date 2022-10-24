<template>
  <v-container>
    <Banner></Banner>
  </v-container>
</template>
<script>
import Banner from "@/components/Banner.vue";
import { getCourse } from "@/api/course";
export default {
  name: "Knowledge",
  components: {
    Banner,
  },
  data(){

  },
  created() {
    
    getCourse(this.$route.params.Seq).then((res) => {
      console.log(res);
    });
  },
};
</script>
