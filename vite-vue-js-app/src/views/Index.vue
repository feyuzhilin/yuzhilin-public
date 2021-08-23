<template>
  <div class="dashboard-wrap">
    <el-container class="container">
      <SideNav :isCollapse="isCollapse"></SideNav>
      <el-container>
        <el-header>
          <i class="fold el-icon-s-unfold" v-if="isCollapse" @click="setIsCollapse"></i>
          <i class="fold el-icon-s-fold" v-else @click="setIsCollapse"></i>
          <div> vite + vue3 + ElementPlus</div>
          <div class="header-right">
            <el-dropdown>
              <span class="el-dropdown-link">
                yuzhilin
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SideNav from "../components/sideNav.vue";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  components: { SideNav },
  setup() {
    const router = useRouter();
    const route = useRoute();
    let isCollapse = ref(false);
    const setIsCollapse = () => {
      isCollapse.value = !isCollapse.value;
    };
    const logout = () => {
      router.push({
        name: "login"
      });
      sessionStorage.removeItem('token')
    };
    return {
      isCollapse,
      setIsCollapse,
      logout
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard-wrap {
  min-height: 100vh;
  background-color: #ffffff;
  .container {
    height: 100vh;
  }
  .el-header {
    background-image: linear-gradient(
      to right,
      #29323c,
      #485563,
      #2b5876,
      #4e4376
    );
    box-shadow: 0 4px 15px 0 rgb(45 54 65 / 75%);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 24px;
      font-weight: bold;
    }
    .fold {
      cursor: pointer;
    }
    .header-right {
      display: flex;
      .el-dropdown-link {
        cursor: pointer;
        color: #fff;
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
  }
  .aside-wrap {
    display: inline-block;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    /* position: relative;
    .el-breadcrumb{
      position: absolute;
      top: 15px;
    } */
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .el-breadcrumb {
    margin-bottom: 15px;
  }
  /* fade-transform */
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.5s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>