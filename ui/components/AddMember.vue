<template>
  <form @submit="onSubmit">
    <div>
      <label for="name">Member name</label>
      <input v-model="name" placeholder="Enter name" />
    </div>
    <div>
      <label for="location">Member location</label>
      <input v-model="location" placeholder="Enter location" />
    </div>
    <div>
      <label for="github">Member Github</label>
      <input v-model="github" placeholder="Enter Github username" />
    </div>
    <button
      type="submit"
      class="bg-indigo-600 shadow-sm rounded-full p-2 text-white"
    >
      Add member
    </button>
  </form>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      name: "",
      location: "",
      github: ""
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const result = await this.$axios.$post("http://localhost:3001/members", {
        name: this.name,
        location: this.location,
        github: this.github
      });

      console.log(result);
    }
  }
});
</script>
