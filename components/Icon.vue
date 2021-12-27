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
      let fill = 'fill="none" stroke="currentColor"';
      if (this.solid) {
        path = SolidIcons[name];
        fill = 'fill="currentColor"';
      }
      const svg = `<svg class="h-6 w-6" ${fill} viewBox="0 0 24 24"  aria-hidden="true"  xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${path}" /></svg>`;
      return svg;
    },
  },
});
</script>

<style></style>
