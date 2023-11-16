<script setup>
import { reactive } from "vue";
import { useMutation } from "@tanstack/vue-query";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from "vue-router";
import FacultiesService from "../../services/faculties";
const router = useRouter();

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

const { mutate } = useMutation({
  mutationKey: ["FacultiesService.create"],
  mutationFn: FacultiesService.create,
  onSuccess: () => {
    notify({
      type: "success",
      title: "Create Success",
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

  mutate(formData);
};
</script>

<template>
  <div>
    <h1>Create Faculties</h1>

    <form class="card" @submit.prevent="handleSubmit">
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
