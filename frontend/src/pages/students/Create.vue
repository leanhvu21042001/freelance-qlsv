<script setup>
import { computed, reactive, watch } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from "vue-router";
import StudentsService from "../../services/students";
import ClassesService from "../../services/classes";
import FacultiesService from "../../services/faculties";
import moment from "moment";
const router = useRouter();

const rules = {
  name: {
    required,
    minLength: minLength(8),
  },
  dob: {
    required,
  },
  gender: {
    required,
  },
  email: {
    required,
  },
  class_id: {
    required,
  },
  faculty_id: {
    required,
  },
};
const formData = reactive({
  name: "",
  dob: "",
  gender: "",
  email: "",
  class_id: "",
  faculty_id: "",
});

const v$ = useVuelidate(rules, formData);

const { data: classes } = useQuery({
  queryKey: ["ClassesService.list"],
  queryFn: ClassesService.list,
});

const { data: faculties } = useQuery({
  queryKey: ["FacultiesService.list"],
  queryFn: FacultiesService.list,
});

const { mutate } = useMutation({
  mutationKey: ["StudentsService.create"],
  mutationFn: () =>
    StudentsService.create(
      formData.name,
      formData.dob,
      formData.gender,
      formData.email,
      formData.class_id,
      formData.faculty_id
    ),
  onSuccess: () => {
    notify({
      type: "success",
      title: "Create Success",
      text: "",
    });
    router.push("/students");
  },
  onError: ({ message }) => {
    notify({
      type: "error",
      title: message,
      text: "",
    });
  },
});

const handleSubmit = async () => {
  const check = await v$.value.$validate();
  if (!check) return;

  mutate();
};
</script>

<template>
  <div>
    <h1 class="text-center">Create Student</h1>
    <form class="card" @submit.prevent="handleSubmit">
      <div class="card-body">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input
            v-model="formData.name"
            type="text"
            class="form-control"
            id="name"
          />

          <span
            class="text-danger"
            v-for="error in v$.name.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
        </div>

        <div class="mb-3">
          <label for="dob" class="form-label">Date of Birth</label>
          <input
            v-model="formData.dob"
            type="date"
            class="form-control"
            id="dob"
          />

          <span
            class="text-danger"
            v-for="error in v$.dob.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
        </div>

        <div class="mb-3">
          <label for="gender" class="form-label">Gender</label>
          <input
            v-model="formData.gender"
            type="text"
            class="form-control"
            id="gender"
          />

          <span
            class="text-danger"
            v-for="error in v$.gender.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="formData.email"
            type="text"
            class="form-control"
            id="email"
          />

          <span
            class="text-danger"
            v-for="error in v$.email.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
        </div>

        <div class="mb-3">
          <label for="class_id" class="form-label">Class</label>
          <select class="form-select" v-model="formData.class_id">
            <option
              v-for="classItem in classes"
              :key="classItem.classes.class_id"
              :value="classItem.classes.class_id"
            >
              {{ classItem.classes.class_name }}
            </option>
          </select>

          <span
            class="text-danger"
            v-for="error in v$.class_id.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
        </div>

        <div class="mb-3">
          <label for="faculty_id" class="form-label">Faculty</label>
          <select class="form-select" v-model="formData.faculty_id">
            <option
              v-for="faculty in faculties"
              :key="faculty.faculty_id"
              :value="faculty.faculty_id"
            >
              {{ faculty.faculty_name }}
            </option>
          </select>

          <span
            class="text-danger"
            v-for="error in v$.faculty_id.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
