<script setup>
import { useQuery } from "@tanstack/vue-query";

import List from "../../components/students/List.vue";
import StudentsService from "../../services/students";

const { data, refetch } = useQuery({
  queryKey: ["StudentsService.list"],
  queryFn: StudentsService.list,
});
</script>

<template>
  <div>
    <h1>Students</h1>
    <List :students="data" :refetch="refetch" />
  </div>
</template>
