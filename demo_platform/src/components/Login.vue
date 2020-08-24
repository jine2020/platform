<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>登录</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn :href="source" icon large target="_blank" v-on="on"></v-btn>
                  </template>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="用户名"
                    name="用户名"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="密码"
                    name="密码"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import http from "@/api/http";
export default {
  name: "Login",
  props: {
    source: String,
  },
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      http
        .post("/login", { username: this.username, password: this.password })
        .then((res) => {
          if (res.data.errcode === 0) {
            localStorage.setItem("token", res.data.data.token);
            this.$router.push("dashboard");
          } else {
            window.alert("用户名或者密码错误！");
          }
        });
    },
  },
};
</script>