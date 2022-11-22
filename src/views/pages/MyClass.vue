<template>
    <v-container class="pa-0">
        <Banner />
        <v-row class="list-content">
            <v-col cols="12">
                <v-card class="deep-orange-border-bottom">
                    <v-card-text class="pa-3">
                        <div class="d-sm-flex align-center">
                            <h3 class="title deep-orange--text text--darken-2 font-weight-bold">我的課程</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
           
            <v-col cols="12" md="4" sm="6" v-for="classItem in classItems" :key="classItem" text>
                <router-link :to="classItem.path" custom>
                    <v-card elevation="3" outlined>
                        <v-img src="../../assets/lesson01_bg.png">
                            <img :src="classItem.imgUrl" class="lesson_pic">
                        </v-img>
                        <v-card-title class="title blue-grey--text text--darken-2 font-weight-bold mb-1">{{classItem.title}}
                        </v-card-title>
                        <v-card-text>
                            <div class="d-flex align-center mx-0">
                                <v-avatar size="56">
                                    <img alt="user" :src="classItem.teacherInfo.teacherUrl">
                                </v-avatar>
            
                                <div class="text-subtitle-1 ms-4">
                                    {{classItem.teacherInfo.teacherName}}
                                </div>
                            </div>
                            <div class="d-flex justify-space-between align-center mt-2 mb-2">
                                <v-progress-linear color="lime" height="15" v-model="classItem.value" striped>
                                    <strong>{{ Math.ceil(classItem.value) }}%</strong>
                                </v-progress-linear>
                            </div>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import Banner from '../../components/Banner.vue'
export default {
    name: "MyClass",
    components: {
        Banner,
    },
    data: () => ({
        activities: [
            {
                id: 1,
                mainTitle: '線上帶你學到會',
                subTitle: '在線學習人數超過 30, 000'
            },
            {
                id: 2,
                mainTitle: '線上 24 小時內隨傳隨到',
                subTitle: '學習不卡關'
            },
        ],
        classItems: [
            {
                path: "/class-content",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson01.png'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                value: 30,

            },
            {
                path: "/class-content",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson02.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                value: 50,

            },
            {
                path: "/class-content",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson03.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                value: 50,

            },
            {
                path: "/class-content",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson04.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                value: 60,

            },
            {
                path: "/class-content",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson05.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                value: 100,

            },


        ],
    }),
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
    padding: 0;
    height: 100%;

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


.v-tabs--vertical>.v-window {
    height: 390px;
}
.v-tabs--vertical {
    display: flex;
    flex-direction: row-reverse;

}

.videoContainer {
    position: absolute;
    width: 100%;
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
    -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
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