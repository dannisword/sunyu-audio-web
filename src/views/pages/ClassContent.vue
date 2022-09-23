<template>
    <v-container fluid class="pa-0">
        <v-row>
            <v-col cols="12" class="banner">
                <v-carousel v-model="model" hide-delimiter-background delimiter-icon="mdi-minus" height="100"
                    :continuous="false" :cycle="cycle" :show-arrows="false">
                    <v-carousel-item v-for="activity in activities" :key="activity">
                        <v-sheet color="orange darken-1" height="100%" tile>
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="text-h5 white--text mr-2">
                                    {{ activity.mainTitle }}{{ activity.subTitle }}
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" class="parallax-wrap">
            <v-row align="center" justify="center">
                <v-col class="text-center" md="8">
                    <h1 class="text-h4 font-weight-bold mb-4">
                        {{classInfo.classTitle}}
                    </h1>
                    <v-card>
                        <v-tabs color="deep-purple accent-4" vertical>
                            <v-tab v-for="item in classInfo.items" :key="item.tab">
                                {{ item.tab }}
                            </v-tab>
                            <v-tab-item v-for="item in classInfo.items" :key="item.tab" :transition="false" class="fade">
                                <div class="videoContainer">
                                    <iframe width="678" height="382" :src="item.url" title="【AutoMedia影片教材大師-多元應用案例】湯武IOT資訊監控系統—實現智能工廠"
                                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                </div>
                            </v-tab-item>
                        </v-tabs>
                    </v-card>
                </v-col>
            </v-row>
        </v-parallax>
        <v-row>
            <v-col md="8">
                <v-card class="mx-auto pa-4 mt-5">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="title amber--text text--darken-2 font-weight-bold mb-2">本期重點</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                
                    <v-list-item two-line v-for="(tip, i) in classInfo.tips" :key="tip">
                        <v-list-item-content>
                            <v-list-item-title><span class="text-h4 amber--text text--darken-2 font-weight-bold mr-3">{{i+1}}</span>{{tip.content}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                
                </v-card>
            </v-col>
            <v-col md="4">
                <v-card width="400" class="mx-auto pa-4 mt-5" elevation="2" outlined>
                    <v-img height="150px" src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg">
                
                        <v-card-title class="white--text d-flex align-center flex-column justify-center mt-2">
                            <v-avatar size="80">
                                <img alt="user" :src="classInfo.teacherUrl">
                            </v-avatar>
                            <p class="text-h6">
                                {{classInfo.teacherName}}
                            </p>
                        </v-card-title>
                    </v-img>
                <v-card-actions>
                    <v-list-item class="grow">
                        <v-row align="center" justify="center">
                           
                            <v-icon class="mr-1 amber--text text--darken-2t">
                                mdi-facebook
                            </v-icon>
                            <v-icon class="mr-1 amber--text text--darken-2">
                                mdi-youtube
                            </v-icon>
                        </v-row>
                    </v-list-item>
                </v-card-actions>
                    <v-card-text>
                        <div class="subtitle-2">
                            {{classInfo.teacherInfo}}
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
export default {
    name: "Knowledge",
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
        classInfo:
        {
            classTitle: "AutoMedia 影片教材大師",
            teacherUrl: require('@/assets/teacher01.png'),
            teacherName: 'AutoMedia',
            teacherInfo: '影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片',
            tips: [
                {
                    content:'數位學習服務：數位教材製作 / 線上學習系統 / 影片教材大師AutoMedia'
                },
                {

                    content: '資訊軟體開發：票務自動化系統 / 人力資源管理系統 / 會計管理系統'

                },
                {
                    content:'人工智慧應用：AI語音合成技術 / 客服機器人 / 多元整合服務'
                },
            ],
            items: [
                { tab: '第 1 章', url: 'https://www.youtube.com/embed/EjtJt7-i2VM' },
                { tab: '第 2 章', url: 'https://www.youtube.com/embed/EjtJt7-i2VM' },
                { tab: '第 3 章', url: 'https://www.youtube.com/embed/EjtJt7-i2VM' },
                { tab: '第 4 章', url: 'https://www.youtube.com/embed/EjtJt7-i2VM' },
            ],

        },
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