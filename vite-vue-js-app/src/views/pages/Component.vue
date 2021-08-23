<template>
  <div class="component-wrap" :style="{'backgroundColor': color1}">
    <h3>颜色选择器</h3>
    <div class="color-block">
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
    <h3>按钮</h3>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <h3>颜色选择器</h3>
    <div class="progress">
      <el-progress :percentage="percentage" :color="customColor"></el-progress>
      <el-progress :percentage="percentage" :color="customColorMethod"></el-progress>
      <el-progress :percentage="percentage" :color="customColors"></el-progress>
      <el-progress :percentage="percentage2" :color="customColors"></el-progress>
      <el-button-group>
        <el-button icon="el-icon-minus" @click="decrease"></el-button>
        <el-button icon="el-icon-plus" @click="increase"></el-button>
      </el-button-group>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, toRefs, onMounted } from "vue";

export default defineComponent({
  setup() {
    const color1 = ref(null);
    const state = reactive({
      percentage: 20,
      percentage2: 0,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ]
    });
    const customColorMethod = percentage => {
      if (percentage < 30) {
        return "#909399";
      }
      if (percentage < 70) {
        return "#e6a23c";
      }
      return "#67c23a";
    };
    const increase = () => {
      state.percentage += 10;
      if (state.percentage > 100) {
        state.percentage = 100;
      }
    };
    const decrease = () => {
      state.percentage -= 10;
      if (state.percentage < 0) {
        state.percentage = 0;
      }
    };
    onMounted(() => {
      setInterval(() => {
        state.percentage2 = (state.percentage2 % 100) + 10;
      }, 500);
    });

    return {
      ...toRefs(state),
      color1,
      customColorMethod,
      increase,
      decrease
    };
  }
});
</script>

<style lang="scss" scoped>
.component-wrap {
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  .el-row {
    margin-bottom: 15px;
  }
  .color-block {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #fff;
    padding: 10px;
  }
  .el-progress {
    margin-bottom: 15px;
  }
}
</style>