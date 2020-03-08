<template>
  <div class="flex flex-wrap justify-center pt-8">
    <Card v-for="note in notes" :key="note.id" :note="note" />

    <router-link
      class="cursor-pointer bg-blue-100 h-12 w-full h-4 rounded-lg shadow hover:shadow-lg flex justify-center items-center hover:text-teal-200 hover:bg-indigo-800"
      to="/Add"
    >
      <div
        class="bg-white w-8 g-8 flex justify-center items-center rounded-full border-dashed border text-black"
      >
        <span class="text-gray-800">
          +
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
import Card from "../components/Card";

export default {
  name: "Home",
  components: {
    Card
  },
  computed: {
    notes() {
      return this.$store.getters.getNotes;
    }
  }
};
</script>
