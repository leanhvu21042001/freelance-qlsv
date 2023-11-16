<script setup>
import moment from "moment";
import { useMutation } from "@tanstack/vue-query";
import FacultiesService from "../../services/faculties";
import { notify } from "@kyvg/vue3-notification";

const { faculties, refetch } = defineProps(["faculties", "refetch"]);

const { mutate } = useMutation({
  mutationKey: ["FacultiesService.delete"],
  mutationFn: FacultiesService.delete,
  onSuccess: () => {
    notify({
      type: "success",
      title: "Delete Success",
      text: "",
    });

    refetch();
  },
});

const handleDelete = (facultyId) => mutate(facultyId);
</script>

<template>
  <div class="card">
    <div class="card-body">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="faculty in faculties" :key="faculty.faculty_id">
            <th scope="row">{{ faculty.faculty_id }}</th>
            <td>{{ faculty.faculty_name }}</td>
            <td>{{ moment(faculty.created_at).format("DD/MM/YYYY") }}</td>
            <td>
              <button
                @click="() => handleDelete(faculty.faculty_id)"
                class="btn btn-danger"
              >
                Delete
              </button>
              <router-link
                class="btn btn-warning ms-2"
                :to="`/faculties/edit/${faculty.faculty_id}`"
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
