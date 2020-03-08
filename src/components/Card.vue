<template>
  <div
    class="bg-blue-100 w-1/5 mx-4 mb-4 rounded-lg shadow-xl p-4 text-indigo-800"
  >
    <h1 class="font-bold text-2xl text-blue-600">{{ note.title }}</h1>
    <p class="base text-lg">{{ note.content }}</p>
    <div class="flex justify-end text-sm">
      <button class="text-green-500 px-2">Edit</button>
      <button class="text-red-500 px-2" @click="remove(note.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    note: {
      type: Object,
      default: () => ({
        id: 0,
        title: "",
        content: ""
      })
    }
  },
  methods: {
    remove(id) {
      this.$store.dispatch('removeNote', id)
    }
  }
};
</script>
