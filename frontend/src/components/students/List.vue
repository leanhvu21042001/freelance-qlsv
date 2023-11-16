<script setup>
import moment from "moment";
import { useMutation } from "@tanstack/vue-query";
import StudentsService from "../../services/students"; // Update the import path
import { notify } from "@kyvg/vue3-notification";

const { students, refetch } = defineProps(["students", "refetch"]);

const { mutate } = useMutation({
  mutationKey: ["StudentsService.delete"], // Update the mutation key
  mutationFn: StudentsService.delete, // Update the mutation function
  onSuccess: () => {
    notify({
      type: "success",
      title: "Delete Success",
      text: "",
    });

    refetch();
  },
});

const handleDelete = (studentId) => mutate(studentId);
</script>

<template>
  <div class="card">
    <div class="card-body">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Date of Birth</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Class</th>
            <th scope="col">Faculty</th>
            <th scope="col">Created At</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.students.student_id">
            <th scope="row">{{ student.students.student_id }}</th>
            <td>{{ student.students.name }}</td>
            <td>{{ moment(student.students.dob).format("DD/MM/YYYY") }}</td>
            <td>{{ student.students.gender }}</td>
            <td>{{ student.students.email }}</td>
            <td>{{ student.classes.class_name }}</td>
            <td>{{ student.faculties.faculty_name }}</td>
            <td>
              {{ moment(student.students.created_at).format("DD/MM/YYYY - HH:MM:SS") }}
            </td>
            <td>
              <button
                @click="() => handleDelete(student.students.student_id)"
                class="btn btn-danger"
              >
                Delete
              </button>
              <router-link
                class="btn btn-warning ms-2"
                :to="`/students/edit/${student.students.student_id}`"
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
