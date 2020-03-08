<template>
  <div class="text-2xl bg-gray-500 min-h-screen text-indigo-900">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
