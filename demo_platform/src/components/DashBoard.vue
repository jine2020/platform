<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-item v-else :key="item.code" link>
            <v-row>
              <v-col>
                <v-icon>mdi-plus</v-icon>
                <v-btn @click="caselist" icon style="width: 200px">用例列表</v-btn>
              </v-col>
              <v-col>
                <v-icon>mdi-cellphone-link</v-icon>
                <v-btn @click="caselists" icon style="width: 200px">测试用例集</v-btn>
              </v-col>
              <v-col>
                <v-icon>mdi-cog</v-icon>
                <v-btn @click="sysset" icon style="width: 200px">系统设置</v-btn>
              </v-col>
              <v-col>
                <v-icon>mdi-help-circle</v-icon>
                <v-btn @click="help" icon style="width: 200px">帮助</v-btn>
              </v-col>
            </v-row>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">工作空间</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon @click="logout">退出</v-btn>
    </v-app-bar>
    <v-main>
      <!-- <v-alert type="info" :value="t" style="width: 300px">获取数据成功</v-alert> -->
      <slot />
    </v-main>
  </v-app>
</template>


<script>
export default {
  name: "DashBoard",
  props: {
    source: String,
  },
  data: () => ({
    drawer: null,
    items: [{ icon: "mdi-plus", text: "用例列表" }],
  }),
  methods: {
    caselist: function () {
      if (this.$route.path === "/dashboard") {
        this.$router.push("testcase");
      }
    },
    caselists: function () {
      window.alert("建设中");
    },
    sysset: function () {
      window.alert("建设中");
    },
    help: function () {
      window.alert("建设中");
    },
    logout: function () {
      this.$router.push("login");
    },
  },
};
</script>