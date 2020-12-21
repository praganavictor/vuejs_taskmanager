<template>
  <div>
    <div id="nav">
      <router-link to="/">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>

    <form @submit="onSubmit">
      <input type="text" v-model="email" name="email" placeholder="Add email" />
      <input type="password" v-model="password" name="password" />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { setToken } from "../services/auth";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  computed: {
    ...mapGetters(["getUser"])
  },

  watch: {
    getUser() {
      if (this.getUser.token) {
        setToken(this.getUser.token);
        this.$router.push("tasks");
      }
    }
  },

  methods: {
    ...mapActions(["authUser"]),
    onSubmit(e) {
      e.preventDefault();
      const user = {
        email: this.email,
        password: this.password
      };
      this.authUser(user);
    }
  }
};
</script>
