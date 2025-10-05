<script setup>
import Hero from "@/components/hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <Hero
    title="Become a Vue Dev"
    subtitle="Find the Vue job that fits your skills and needs"
  />
  <HomeCards />
  <JobListings :limit="3" :show-jobs-button="true" />
</template>
