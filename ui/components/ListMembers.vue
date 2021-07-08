<template>
  <div class="list-members">
    <p>{{ members.length }}</p>
    <ul>
      <li
        v-for="member in members"
        :key="member.github"
        class="border border-1 border-indigo-600 m-2 p-2"
      >
        <h1>{{ member.name }}</h1>
        <p>{{ member.github }}</p>
        <p>{{ member.location }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListMembers",
  props: {
    members: {
      type: Array,
      required: true
    }
  }
  // data: function() {
  //   return {
  //     members: [
  //       { name: "John Doe", github: "johndoe", location: "San Francisco" },
  //       { name: "Jane Doe", github: "janedoe", location: "New York" },
  //       { name: "Bob Doe", github: "bobdoe", location: "Chicago" },
  //       { name: "Sue Doe", github: "suedoe", location: "Los Angeles" }
  //     ]
  //   };
  // }
};
</script>
