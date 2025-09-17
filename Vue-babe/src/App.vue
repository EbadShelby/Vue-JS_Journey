<script setup>
import "./assets/main.css";
import { ref } from 'vue';

const name = ref('jhon')
const status = ref('active')
const href = ref('https://youtube.com')
const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'inactive'
  } else {
    status.value = 'active'
  }
}
const tasks = ref(['task1', 'task2'])
const newTask = ref('');
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
}

</script>

<template>
  <header>

  </header>

  <main>
    <h1 class="typing-caret">this is {{ vue }} my new babe</h1>
    <p>{{ name }}</p>

    <a :href>youtube</a>
    <div class="active" v-if="status === 'active'">this user is online</div>
    <div class="inactive" v-else-if="status === 'inactive'">this user is offsline</div>
    <button @:click="toggleStatus">Subsapakaribe</button>
    <h2>Todo</h2>
    <ul v-for="(task, index) in tasks" class="active" :key="task">
      <span>
        {{ task }} |
      </span>
      <button @click="deleteTask(index)">Delete</button>
    </ul>
    <form @submit.prevent="addTask">
      <label for="newTask"></label>
      <input type="text" placeholder="Enter Todo" id="newTask" name="newTask" v-model="newTask">
      <button type="submit">submit</button>
    </form>
  </main>
</template>

<style scoped>
@import "tailwindcss";

.active {
  color: green;
  font-weight: 800;
  font-size: 20px;
}
.inactive {
  color: darkred;
  font-weight: 800;
  font-size: 20px;
}


main {
  @layer base {
    font-size: 1.5rem;
    color: rgb(40, 252, 181);
  }
}
</style>
