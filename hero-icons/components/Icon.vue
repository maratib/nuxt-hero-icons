<!-- Icons from https://heroicons.com/ -->
<template>
  <span v-html="getSVG(name)"></span>
</template>
<script>
import { defineComponent, ref } from "vue";
import Icons from "../icons";
export default defineComponent({
  name: "Icon",
  props: {
    name: { type: String, default: "annotation", required: true },
  },
  methods: {
    getSVG(name) {
      const svg = `<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" ${Icons[name]} /></svg>`;
      return svg;
    },
  },
});
</script>

<style></style>
