<script setup>
import { reactive, watchEffect } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { notify } from "@kyvg/vue3-notification";
import { useRouter, useRoute } from "vue-router";
import ClassesService from "../../services/classes";
import FacultiesService from "../../services/faculties";
const router = useRouter();
const route = useRoute();

const classId = route.params?.id;

const rules = {
  class_name: {
    required,
    minLength: minLength(8),
  },
  faculty_id: {
    required,
  },
};
const formData = reactive({
  class_name: "",
  faculty_id: "",
});

const v$ = useVuelidate(rules, formData);

const { isLoading, isError, data } = useQuery({
  queryKey: ["ClassesService.show(classId)"],
  queryFn: () => ClassesService.show(classId),
  retry: 0,
});

watchEffect(() => {
  formData.class_name = data.value?.class_name;
  formData.faculty_id = data.value?.faculty_id;
});

const { data: faculties } = useQuery({
  queryKey: ["FacultiesService.list"],
  queryFn: FacultiesService.list,
});

const { mutate } = useMutation({
  mutationKey: ["ClassesService.update"],
  mutationFn: () =>
    ClassesService.update(classId, formData.class_name, formData.faculty_id),
  onSuccess: () => {
    notify({
      type: "success",
      title: "Edit Success",
      text: "",
    });
    router.push("/classes");
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
    <h2 class="text-center" v-if="isLoading">Loading...</h2>
    <h2 class="text-center" v-if="isError">Class not found</h2>
    <h2 class="text-center" v-if="isError">
      <button class="btn btn-success" @click="router.back">Back</button>
    </h2>

    <h1 class="text-center" v-if="!isLoading && !isError">
      Edit Class {{ classId }}
    </h1>
    <form
      v-if="!isLoading && !isError"
      class="card"
      @submit.prevent="handleSubmit"
    >
      <div class="card-body">
        <div class="mb-3">
          <label for="class_name" class="form-label">Name</label>
          <input
            v-model="formData.class_name"
            type="text"
            class="form-control"
            id="class_name"
          />

          <span
            class="text-danger"
            v-for="error in v$.class_name.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </span>
        </div>

        <div class="mb-3">
          <label class="form-label">Faculty</label>
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
