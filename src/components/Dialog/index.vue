<template>
  <el-dialog v-bind="$attrs" :width="comWidth" :close-on-click-modal="closeOnClickModal">
    <template #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
    <template #footer v-if="$slots.footer">
      <slot name="footer"> </slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    width: {
      type: [Number, String],
      default: "",
    },
    size: {
      type: String,
      default: "small",
    },
    closeOnClickModal: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    comWidth() {
      const { width, size } = this;

      const sizeMap = new Map();
      sizeMap.set("mini", "400px");
      sizeMap.set("small", "560px");
      sizeMap.set("medium", "720px");
      sizeMap.set("large", "960px");

      const sizeW = sizeMap.get(size);

      return width || sizeW || "50%";
    },
  },
};
</script>

<style></style>