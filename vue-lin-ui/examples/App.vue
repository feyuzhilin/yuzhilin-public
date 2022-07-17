<template>
  <div id="app">
    <lin-button type="primary" plain round>按钮</lin-button>
    <lin-image width="200" height="200" :src="imageSrc" fit="contain"></lin-image>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      imageSrc: "https://img01.yzcdn.cn/vant/cat.jpeg",
    };
  },
};
</script>
