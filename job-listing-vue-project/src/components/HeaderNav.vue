<script setup>
import logo from "../assets/favicon.ico";

</script>

<template>
  <header class="border-b-1 bg-green-500">
    <div class="mx-auto flex max-w-200 items-center justify-between py-4">
      <a href="#">
        <img :src="logo" class="rounded-sm bg-green-700 p-1" alt="logo" />
      </a>
      <nav>
        <ul class="flex gap-5">
          <li class="text-lg font-medium">
            <a href="../views/HomeView.vue">Home</a>
          </li>
          <li class="text-lg font-medium">
            <a href="../views/JobsView.vue">Jobs</a>
          </li>
          <li class="text-lg font-medium">
            <a href="../views/HomeView.vue">Add Job</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
