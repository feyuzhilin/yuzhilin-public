<template>
  <div
    class="lin-image"
    :style="{ width: `${width}px`, height: `${height}px` }"
  >
    <img :src="src" class="lin-image_img" />
  </div>
</template>

<script>
export default {
  name: "lin-image",
  props: {
    width: {
      type: Number | String,
      default: "",
    },
    height: {
      type: Number | String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
    fit: {
      type: String,
      default: "fill",
    },
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.lin-image {
  .lin-image_img {
    width: 100%;
    height: 100%;
  }
}
</style>