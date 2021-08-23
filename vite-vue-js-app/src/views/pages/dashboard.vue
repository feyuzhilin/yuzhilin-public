<template>
  <div class="dashboard-wrap">
    <el-button type="primary" @click="refresh">refresh</el-button>
    <el-table v-loading="pageData.loading" :data="pageData.data" border style="width: 100%">
      <el-table-column prop="id" label="ID" width="60" align="center"></el-table-column>
      <el-table-column prop="title" label="title"></el-table-column>
      <el-table-column prop="author" label="author" width="180" align="center"></el-table-column>
      <el-table-column label="action" width="180" align="center">
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import useHome from "../../hooks/useHome";
export default {
  setup() {
    const { pageData,refresh } = useHome();
    return {
      pageData,
      refresh
    };
  }
};
</script>

<style lang="scss" scoped>
.dashboard-wrap {
  height: 100%;
}
</style>