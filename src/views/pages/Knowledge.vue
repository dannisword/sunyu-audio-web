<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="deep-orange-border-bottom">
                    <v-card-text class="pa-3">
                        <div class="d-sm-flex align-center">
                            <h3 class="title deep-orange--text text--darken-2 font-weight-bold">最新上架</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="6" sm="2" v-for="classItem in classItems.slice(0, 2)" :key="classItem" text>
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
                        <div class="d-flex justify-space-between align-center">
                            <div class="my-4 body-2 text-decoration-line-through blue-grey--text text--darken-1">
                                原價 $ {{classItem.unitPrice}}
                            </div>
                            <div class="my-4">
                                <span class="body-2 font-weight-bold amber--text text--darken-3">
                                    優惠價
                                </span>
                                <span class="text-h5 font-weight-bold amber--text text--darken-3">
                                    $ {{classItem.priceLimit}}
                                </span>
                        
                            </div>
                        </div>
                        </v-card-text>
                
                    </v-card>
                </router-link>
            </v-col>
            <v-col cols="12">
                <v-card class="deep-orange-border-bottom">
                    <v-card-text class="pa-3">
                        <div class="d-sm-flex align-center">
                            <h3 class="title deep-orange--text text--darken-2 font-weight-bold">繼續看</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" sm="6" v-for="trackingItem in trackingItems" :key="trackingItem" text>
                <router-link :to="trackingItem.path" custom>
                    <v-card elevation="3" outlined>
                        <v-img src="../../assets/lesson01_bg.png">
                            <img :src="trackingItem.imgUrl" class="lesson_pic">
                        </v-img>
                        <v-card-title class="title blue-grey--text text--darken-2 font-weight-bold mb-1">{{trackingItem.title}}
                        </v-card-title>
                        <v-card-text>
                            <div class="d-flex align-center mx-0">
                                <v-avatar size="56">
                                    <img alt="user" :src="trackingItem.teacherInfo.teacherUrl">
                                </v-avatar>
            
                                <div class="text-subtitle-1 ms-4">
                                    {{trackingItem.teacherInfo.teacherName}}
                                </div>
                            </div>
                            <div class="d-flex justify-space-between align-center">
                                <div class="my-4 body-2 text-decoration-line-through blue-grey--text text--darken-1">
                                    原價 $ {{trackingItem.unitPrice}}
                                </div>
                                <div class="my-4">
                                    <span class="body-2 font-weight-bold amber--text text--darken-3">
                                        優惠價
                                    </span>
                                    <span class="text-h5 font-weight-bold amber--text text--darken-3">
                                        $ {{trackingItem.priceLimit}}
                                    </span>
                                
                                </div>
                            </div>
                        </v-card-text>
            
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="12">
                <v-card class="deep-orange-border-bottom">
                    <v-card-text class="pa-3">
                        <div class="d-sm-flex align-center">
                            <h3 class="title deep-orange--text text--darken-2 font-weight-bold mr-3">全部課程</h3>
                            <v-chip-group active-class="deep-purple accent-4 white--text" column>
                                <v-chip v-for="classOption in classOptions" :key="classOption">
                                    {{ classOption.optionName }}
                                </v-chip>
                            </v-chip-group>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" v-for="classItem in classItems" :key="classItem" text>
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
                            <div class="d-flex justify-space-between align-center">
                                <div class="my-4 body-2 text-decoration-line-through blue-grey--text text--darken-1">
                                    原價 $ {{classItem.unitPrice}}
                                </div>
                                <div class="my-4">
                                    <span class="body-2 font-weight-bold amber--text text--darken-3">
                                        優惠價
                                    </span>
                                    <span class="text-h5 font-weight-bold amber--text text--darken-3">
                                        $ {{classItem.priceLimit}}
                                    </span>
            
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="12">
                <v-card class="deep-orange-border-bottom">
                    <v-card-text class="pa-3">
                        <div class="d-sm-flex align-center">
                            <h3 class="title deep-orange--text text--darken-2 font-weight-bold mr-3">講師陣容</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="3" v-for="teacher in teacherList" :key="teacher" text>
            <v-card elevation="3" outlined>
                <v-card-text>
                    <div class="d-flex flex-column align-center">
                        <v-avatar size="80">
                            <img alt="user" :src="teacher.teacherUrl">
                        </v-avatar>
                        <div class="text-h6">
                            {{teacher.teacherName}}
                        </div>
                    </div>
            
                    <div class="text-caption">
                        {{teacher.teacherInfo}}
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
        classItems: [
            {
                path: "/training-class",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson01.png'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                unitPrice:4200,
                priceLimit:2100
                
            },
            {
                path: "/training-class",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson02.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                unitPrice:4200,
                priceLimit:2100
                
            },
            {
                path: "/training-class",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson03.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                unitPrice:4200,
                priceLimit:2100
                
            },
            {
                path: "/training-class",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson04.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                unitPrice:4200,
                priceLimit:2100
                
            },
            {
                path: "/training-class",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson05.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                unitPrice:4200,
                priceLimit:2100
                
            },
            

        ],
        trackingItems: [
            {
                path: "/training-class",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson03.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                unitPrice: 4200,
                priceLimit: 2100

            },
            {
                path: "/training-class",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson04.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                unitPrice: 4200,
                priceLimit: 2100

            },
            {
                path: "/training-class",
                title: "影片教材大師",
                imgUrl: require('@/assets/lesson05.jpeg'),
                teacherInfo: {
                    teacherUrl: require('@/assets/teacher01.png'),
                    teacherName: 'AutoMedia'
                },
                unitPrice: 4200,
                priceLimit: 2100

            },
        ],
        teacherList: [
            {
                teacherID: 1,
                teacherUrl: require('@/assets/teacher01.png'),
                teacherName: 'AutoMedia',
                teacherInfo: '影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片'
            },
            {
                teacherID: 2,
                teacherUrl: require('@/assets/teacher01.png'),
                teacherName: 'AutoMedia',
                teacherInfo: '影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片'
            },
            {
                teacherID: 3,
                teacherUrl: require('@/assets/teacher01.png'),
                teacherName: 'AutoMedia',
                teacherInfo: '影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片'
            },
            {
                teacherID: 4,
                teacherUrl: require('@/assets/teacher01.png'),
                teacherName: 'AutoMedia',
                teacherInfo: '影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片'
            },
            {
                teacherID: 5,
                teacherUrl: require('@/assets/teacher01.png'),
                teacherName: 'AutoMedia',
                teacherInfo: '影片教材大師，擁有獨家專利AI智能配音技術，將簡報變成影片'
            },
        ],
        classOptions: [
            { optionID: 1, optionName: 'class1' },
            { optionID: 2, optionName: 'class2' },
            { optionID: 3, optionName: 'class3' },
        ]
    }),
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
</style>