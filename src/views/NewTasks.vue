<template>
  <div>
    <div id="nav">
      <router-link to="/tasks">Back</router-link>
    </div>

    <form @submit="onSubmit">
      <input type="text" v-model="title" name="title" placeholder="Add title" />
      <input
        type="text"
        v-model="date"
        name="date"
        placeholder="Add date - YYYY/MM/DD"
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      title: "",
      date: ""
    };
  },

  methods: {
    ...mapActions(["addTask"]),
    onSubmit(e) {
      e.preventDefault();
      const task = {
        title: this.title,
        date: this.date
      };
      this.addTask(task);
      this.$router.push("tasks");
    }
  }
};
</script>
