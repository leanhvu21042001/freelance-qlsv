<script setup>
import moment from "moment";
import { useMutation } from "@tanstack/vue-query";
import ClassesService from "../../services/classes"; // Update the import path
import { notify } from "@kyvg/vue3-notification";

const { classes, refetch } = defineProps(["classes", "refetch"]);

const { mutate } = useMutation({
  mutationKey: ["ClassesService.delete"], // Update the mutation key
  mutationFn: ClassesService.delete, // Update the mutation function
  onSuccess: () => {
    notify({
      type: "success",
      title: "Delete Success",
      text: "",
    });

    refetch();
  },
});

const handleDelete = (classId) => mutate(classId);
</script>

<template>
  <div class="card">
    <div class="card-body">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Faculty</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="classItem in classes" :key="classItem.classes.class_id">
            <th scope="row">{{ classItem.classes.class_id }}</th>
            <td>{{ classItem.classes.class_name }}</td>
            <td>{{ classItem.faculties.faculty_name }}</td>
            <td>{{ moment(classItem.created_at).format("DD/MM/YYYY") }}</td>
            <td>
              <button
                @click="() => handleDelete(classItem.class_id)"
                class="btn btn-danger"
              >
                Delete
              </button>
              <router-link
                class="btn btn-warning ms-2"
                :to="`/classes/edit/${classItem.class_id}`"
              >
                Edit
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
