import { createRouter, createWebHistory } from "vue-router";

import NotFound from "./pages/not-found/Index.vue";

// Faculties
import Faculties from "./pages/Faculties/Index.vue";
import FacultiesCreate from "./pages/Faculties/Create.vue";
import FacultiesEdit from "./pages/Faculties/Edit.vue";
// Classes
import Classes from "./pages/Classes/Index.vue";
import ClassesCreate from "./pages/Classes/Create.vue";
import ClassesEdit from "./pages/Classes/Edit.vue";
// Students
import Students from "./pages/Students/Index.vue";
import StudentsCreate from "./pages/Students/Create.vue";
import StudentsEdit from "./pages/Students/Edit.vue";

const routes = [
  { path: "/", name: "FacultiesFirstLoad", component: Faculties },
  {
    path: "/faculties/create",
    name: "FacultiesCreate",
    component: FacultiesCreate,
  },
  {
    path: "/faculties/edit/:id",
    name: "FacultiesEdit",
    component: FacultiesEdit,
  },

  { path: "/classes", name: "Classes", component: Classes },
  { path: "/classes/create", name: "ClassesCreate", component: ClassesCreate },
  { path: "/classes/edit/:id", name: "ClassesEdit", component: ClassesEdit },

  { path: "/students", name: "Students", component: Students },
  {
    path: "/students/create",
    name: "StudentsCreate",
    component: StudentsCreate,
  },
  { path: "/students/edit/:id", name: "StudentsEdit", component: StudentsEdit },

  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
