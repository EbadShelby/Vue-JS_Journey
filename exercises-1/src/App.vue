<script setup>
import "./assets/main.css";
import { ref } from "vue";
const tasks = ref([{ text: "learn vue", completed: false }]);
const newTask = ref("");
const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push({ text: newTask.value.trim(), completed: false });
    newTask.value = "";
  }
};
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<template>
  <div class="scan-lines"></div>
  <div class="todo">
    <h1>Vue Todo</h1>
    <p class="no-task" v-if="tasks.length === 0">No task yet!</p>
    <p class="remaining-tasks" v-else-if="tasks.length !== 0">
      {{ tasks.filter((task) => !task.completed).length }} task<span
        v-if="tasks.filter((task) => !task.completed).length > 1"
        >s</span
      >
      remaining
    </p>
    <form @submit.prevent="addTask" class="add-container">
      <input
        type="text"
        id="newTask"
        name="newTask"
        placeholder="Input todo..."
        v-model="newTask"
      />
      <button class="primary-button" type="submit">Add</button>
    </form>
    <ul class="task-container" v-for="(task, index) in tasks" key="task">
      <li :class="{ 'text-gray-400 line-through': task.completed }">
        {{ task.text }}
      </li>
      <div class="task-buttons">
        <label class="relative inline-flex cursor-pointer items-center">
          <!-- Hidden checkbox -->
          <input type="checkbox" class="peer hidden" v-model="task.completed" />

          <!-- Checkbox box -->
          <div class="done-task"></div>

          <!-- Your custom icon (only shows when checked) -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="white"
            class="absolute top-1 left-1 hidden h-8 w-4 peer-checked:block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        </label>

        <button class="primary-button" @click="deleteTask(index)">
          Delete
        </button>
      </div>
    </ul>
  </div>
</template>
