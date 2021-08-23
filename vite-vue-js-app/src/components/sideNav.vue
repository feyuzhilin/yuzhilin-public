
<template>
  <div class="aside-wrap-comp">
    <div class="title">{{isCollapse ? 'Y' : 'yuzhilin-admin'}}</div>
    <el-collapse-transition>
      <el-aside class="aside-wrap" :class="{'isCollapse':isCollapse}">
        <el-menu
          default-active="dashboard"
          router
          :unique-opened="false"
          background-color="#3B467B"
          text-color="#fff"
          :active-text-color="variables.menuActiveText"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-menu-item :index="item.path" v-for="(item,index) in routes">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </el-collapse-transition>
  </div>
</template>
<script>
import variables from "../styles/variables.scss";
import { computed } from "vue";
export default {
  props: ["isCollapse"],
  setup() {
    let defaultRouter = "/dashboard";
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const routes = [
      {
        path: "/dashboard",
        name: "首页",
        icon: "el-icon-menu"
      },
      {
        path: "/component",
        name: "组件",
        icon: "el-icon-location"
      },
      {
        path: "/setting",
        name: "设置",
        icon: "el-icon-setting"
      }
    ];
    const variables = computed(() => {
      return variables;
    });
    return {
      handleOpen,
      handleClose,
      defaultRouter,
      variables,
      routes
    };
  }
};
</script>

<style lang="scss" scoped>
.aside-wrap-comp {
  .title {
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    background-color: #3b467b;
    color: #fff;
    font-weight: bold;
  }
  .aside-wrap {
    width: 200px;
    height: 94%;
    background-color: #3b467b;
    &.isCollapse {
      width: 64px;
    }
    transition: width 0.05s linear;
    overflow-y: scroll;
  }
  .el-menu {
    border-right: none !important;
  }
}
</style>

