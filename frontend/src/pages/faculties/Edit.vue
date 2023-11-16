<script setup>
import { reactive, watchEffect } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { notify } from "@kyvg/vue3-notification";
import { useRouter, useRoute } from "vue-router";
import FacultiesService from "../../services/faculties";
const router = useRouter();
const route = useRoute();

const facultyId = route.params?.id;

const rules = {
  faculty_name: {
    required,
    minLength: minLength(8),
  },
};
const formData = reactive({
  faculty_name: "",
});

const v$ = useVuelidate(rules, formData);

const { isLoading, isError, data, error } = useQuery({
  queryKey: ["FacultiesService.show(facultyId)"],
  queryFn: () => FacultiesService.show(facultyId),
  retry: 0,
});

watchEffect(() => {
  formData.faculty_name = data.value?.faculty_name;
});

const { mutate } = useMutation({
  mutationKey: ["FacultiesService.create"],
  mutationFn: () => FacultiesService.update(facultyId, formData),
  onSuccess: () => {
    notify({
      type: "success",
      title: "Edit Success",
      text: "",
    });
    router.push("/");
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
    <h2 class="text-center" v-if="isError">Faculty not found</h2>
    <h2 class="text-center" v-if="isError">
      <button class="btn btn-success" @click="router.back">Back</button>
    </h2>

    <h1 class="text-center" v-if="!isLoading && !isError">
      Edit Faculties {{ facultyId }}
    </h1>
    <form
      v-if="!isLoading && !isError"
      class="card"
      @submit.prevent="handleSubmit"
    >
      <div class="card-body">
        <div class="mb-3">
          <label for="faculty_name" class="form-label">Name</label>
          <input
            v-model="formData.faculty_name"
            type="text"
            class="form-control"
            id="faculty_name"
          />

          <span
            class="text-danger"
            v-for="error in v$.faculty_name.$errors"
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
