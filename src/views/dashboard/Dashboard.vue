<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="4" sm="2">
                <v-card>
                    <v-img src="../../assets/img01.jpg"></v-img>
                    <v-card-text class="pa-5">
                        <div class="d-sm-flex align-center">
                            <h3 class="title blue-grey--text text--darken-2 font-weight-bold">課程訓練管理模組</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" sm="2">
                <v-card>
                    <v-img src="../../assets/img02.jpg"></v-img>
                    <v-card-text class="pa-5">
                        <div class="d-sm-flex align-center">
                            <h3 class="title blue-grey--text text--darken-2 font-weight-bold">專家資料庫</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" sm="2">
                <v-card>
                    <v-img src="../../assets/img03.jpg"></v-img>
                    <v-card-text class="pa-5">
                        <div class="d-sm-flex align-center">
                            <h3 class="title blue-grey--text text--darken-2 font-weight-bold">測驗題庫管理模組</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" sm="2">
                <v-card>
                    <v-img src="../../assets/img04.jpg"></v-img>
                    <v-card-text class="pa-5">
                        <div class="d-sm-flex align-center">
                            <h3 class="title blue-grey--text text--darken-2 font-weight-bold">產業創新知識庫</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" sm="2">
                <v-card>
                    <v-img src="../../assets/img05.jpg"></v-img>
                    <v-card-text class="pa-5">
                        <div class="d-sm-flex align-center">
                            <h3 class="title blue-grey--text text--darken-2 font-weight-bold">智慧商情模組</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" md="4" sm="2">
                <v-card>
                    <v-img src="../../assets/img06.jpg"></v-img>
                    <v-card-text class="pa-5">
                        <div class="d-sm-flex align-center">
                            <h3 class="title blue-grey--text text--darken-2 font-weight-bold">工作事項管理模組</h3>
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</template>
  
  
<script>
const gradients = [
    ["#6c757d"],
    ["#6c757d"],
    ["#6c757d", "#6c757d", "#6c757d"],
    ["#21c1d6", "21c1d6"],
    ["#21c1d6", "#21c1d6", "#21c1d6"],
    ["#21c1d6", "#21c1d6", "#21c1d6"]
];

const gradients2 = [
    ["#1e88e5"],
    ["#1e88e5"],
    ["#1e88e5", "#1e88e5", "#1e88e5"],
    ["#1e88e5", "#1e88e5"],
    ["#1e88e5", "#1e88e5", "#1e88e5"],
    ["#1e88e5", "#1e88e5", "#1e88e5"]
];

export default {
    name: "BasicDashboard",
    data: () => ({
        fill: true,
        gradient: gradients[4],
        gradients,
        padding: 8,
        radius: 50,
        value: [0, 2, 5, 9, 5, 10, 3, 5, 1, 8, 2, 9, 0],
        width: 1,

        fill2: true,
        gradient2: gradients2[4],
        gradients2,
        radius2: 0,
        padding2: 0,
        value2: [1, 2, 5, 9, 5, 10, 3, 5, 1, 8, 2, 9, 4],
        width2: 4,
        tasks: [
            {
                done: false,
                text: "Check emails of Mr.Shah"
            },
            {
                done: false,
                text: "Give salary to employee"
            }
        ],
        task: null,
        selected: [2],
        items: [
            {
                action: "15 min",
                headline: "Brunch this weekend?",
                title: "Ali Connors",
                subtitle:
                    "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
            },
            {
                action: "2 hr",
                headline: "Summer BBQ",
                title: "me, Scrott, Jennifer",
                subtitle: "Wish I could come, but I'm out of town this weekend."
            },
            {
                action: "6 hr",
                headline: "Oui oui",
                title: "Sandra Adams",
                subtitle: "Do you have Paris recommendations? Have you ever been?"
            },
            {
                action: "12 hr",
                headline: "Birthday gift",
                title: "Trevor Hansen",
                subtitle:
                    "Have any ideas about what we should get Heidi for her birthday?"
            },
            {
                action: "18hr",
                headline: "Recipe to try",
                title: "Britta Holt",
                subtitle:
                    "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
            }
        ]
    }),
    computed: {
        completedTasks() {
            return this.tasks.filter(task => task.done).length;
        },
        progress() {
            return (this.completedTasks / this.tasks.length) * 100;
        },
        remainingTasks() {
            return this.tasks.length - this.completedTasks;
        }
    },

    methods: {
        create() {
            this.tasks.push({
                done: false,
                text: this.task
            });

            this.task = null;
        }
    }
};
</script>