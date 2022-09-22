<template>
    <v-app-bar app clipped-left clipped-right class="header-img">
        <v-toolbar-title style="cursor: pointer">
            <router-link v-slot="{navigate}" :to="{ name:'About' }" custom>
                <span role="link" @click="navigate" class="logo-text ml-2">
                    <img src="../assets/LOGO_220308_cn.png" class="pt-3" />
                </span>
            </router-link>
        </v-toolbar-title>
        <v-app-bar-nav-icon class="d-block" v-if="false"
            @click="$vuetify.breakpoint.smAndDown ? setSidebarDrawer(!Sidebar_drawer) : $emit('input', !value)" />
        <v-spacer />
        <!---right part -->
        <div class="d-none d-sm-flex">
            <v-btn v-for="link in userprofile" :key="link" text>
                {{ link.title }}
            </v-btn>
        </div>

        <div class="d-flex d-sm-none">
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn dark icon v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, i) in userprofile" :key="i" @click="href">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>
    </v-app-bar>
</template>
<script>
// Utilities
import { mapState, mapMutations } from "vuex";
export default {
    name: "Header",

    components: {},

    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        userprofile: [
            { title: "所有課程" },
            { title: "我的課程" },
            { title: "學習中心" }
        ],
        href() {
            return undefined;
        }
    }),

    computed: {
        ...mapState(["Sidebar_drawer"])
    },

    methods: {
        ...mapMutations({
            setSidebarDrawer: "SET_SIDEBAR_DRAWER"
        })
    }
};
</script>