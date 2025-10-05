<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "Vue Dev",
  },
  subtitle: {
    type: String,
    default: "Find Vue jobs",
  },
});
</script>

<template>
  <section class="bg-green-500">
    <div class="mx-auto max-w-200 space-y-2 py-20 text-center">
      <h1 class="text-5xl font-bold">{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </section>
</template>
