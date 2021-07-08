<template>
  <div id="app">
    <add-member />
    <list-members :members="members" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ListMembers from "../components/ListMembers.vue";
import AddMember from "../components/AddMember.vue";

export default Vue.extend({
  async asyncData() {
    const members = await fetch("http://localhost:3001/members").then(res =>
      res.json()
    );

    return {
      members
    };
  },
  components: { ListMembers, AddMember },
  data() {
    return {
      members: []
    };
  }
});
</script>
