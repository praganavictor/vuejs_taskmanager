<template>
  <div>
    <h1>This is all my tasks</h1>
    <router-link to="/tasks/new">New Task</router-link>

    <div v-bind:key="task.id" v-for="task in allTasks">
      <hr />

      <div v-bind:task="task">
        <p>{{ task.title }}</p>
        <button @click="deleteTask(task)">Delete</button>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchTasks", "removeTask"]),
    deleteTask(task) {
      console.log(task);
      this.removeTask(task);
    }
  },
  computed: mapGetters(["allTasks"]),
  created() {
    this.fetchTasks();
  }
};
</script>
