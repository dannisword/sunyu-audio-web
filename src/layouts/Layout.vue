<template>
    <v-app id="inspire">
        <div class="app-container">
            <Header v-model="expandOnHover"></Header>

            <Sidebar :expand-on-hover.sync="expandOnHover"></Sidebar>

            <v-content>
                <v-container class="fill-height" fluid>
                    <router-view />
                </v-container>
            </v-content>

            <Footer></Footer>
        </div>

    </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
export default {
    name: 'Layout',
    components: {
        Header,
        Sidebar,
        Footer
    },
    props: {
        source: String
    },
    data: () => ({
        expandOnHover: false
    }),
    computed: {
        ...mapState(["Customizer_drawer"])
    },
    methods: {
        ...mapMutations({
            setCustomizerDrawer: "SET_CUSTOMIZER_DRAWER"
        })
    }
}
</script>