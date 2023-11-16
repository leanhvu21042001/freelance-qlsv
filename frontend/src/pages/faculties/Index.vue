<script setup>
import { useQuery } from "@tanstack/vue-query";

import List from "../../components/faculties/List.vue";
import FacultiesService from "../../services/faculties";

const { data, refetch } = useQuery({
  queryKey: ["FacultiesService.list"],
  queryFn: FacultiesService.list,
});
</script>

<template>
  <div>
    <h1>Faculties</h1>
    <List :faculties="data" :refetch="refetch" />
  </div>
</template>
