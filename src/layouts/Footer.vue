<template>
    <v-footer app class="footerpart pa-0">

      <v-col cols="12" class="amber darken-2">
        <span class="grey--text text--lighten-5">© {{ new Date().getFullYear() }} Sunyu Tech Inc. All Rights Reserved.</span>
      </v-col>
    </v-footer>
</template>
<script>
export default {
    name: "Footer",
}
</script>
<style lang="scss">
.v-application .footerpart {
    background-color: #eef5f9;
    position: static;
}
</style>