<script setup>
import "./assets/main.css";
import HeaderNav from "@/components/HeaderNav.vue";
import Hero from "@/components/hero.vue";
import HomeCards from "@/components/HomeCards.vue";
import JobListings from "./components/JobListings.vue";
</script>

<template>
  <HeaderNav />
  <main>
    <Hero
      title="Become a Vue Dev"
      subtitle="Find the Vue job that fits your skills and needs"
    />
    <HomeCards />
    <JobListings :limit="3" :show-jobs-button="true" />
  </main>
</template>
