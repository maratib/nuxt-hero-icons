<!-- Icons from https://heroicons.com/ -->
<template>
  <span v-html="getSVG(name)"></span>
</template>
<script>
import { defineComponent, ref } from "vue";
import OutlineIcons from "../outline";
import SolidIcons from "../solid";
export default defineComponent({
  name: "Icon",
  props: {
    name: { type: String, default: "annotation", required: true },
    solid: { type: Boolean, default: false },
  },
  methods: {
    getSVG(name) {
      let path = OutlineIcons[name];
      let fill = 'fill="none" stroke="currentColor" viewBox="0 0 24 24"';
      if (this.solid) {
        path = SolidIcons[name];
        fill = 'fill="currentColor" viewBox="0 0 19 19"';
      }
      const svg = `<svg ${fill} class="w-6 h-6"  aria-hidden="true"  xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${path}" /></svg>`;
      return svg;
    },
  },
});
</script>

<style></style>
