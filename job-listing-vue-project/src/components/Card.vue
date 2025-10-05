<script setup>
import { defineProps } from "vue";

defineProps({
  bg: {
    type: String,
    default: "bg-gray-200",
  },
});
</script>

<template>
  <div :class="`${bg} rounded-lg p-6 shadow-lg`">
    <slot></slot>
  </div>
</template>
