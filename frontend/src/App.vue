<script setup>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <div id="app">
    <notifications />
    <AppHeader />
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <main id="main" class="container-fluid">
      <router-view></router-view>
    </main>
    <div class="container-fluid">
      <AppFooter />
    </div>
  </div>
</template>

<style scoped></style>
