<script setup>
import { useQuery } from "@tanstack/vue-query";

import List from "../../components/classes/List.vue"; // Update the import path
import ClassesService from "../../services/classes"; // Update the import path

const { data, refetch } = useQuery({
  queryKey: ["ClassesService.list"], // Update the query key
  queryFn: ClassesService.list, // Update the query function
});
</script>

<template>
  <div>
    <h1>Classes</h1>
    <List :classes="data" :refetch="refetch" />
    <!-- Update the prop name -->
  </div>
</template>
