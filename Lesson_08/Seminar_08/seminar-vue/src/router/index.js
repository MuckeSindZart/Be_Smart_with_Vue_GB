import MainPage from "@/pages/MainPage.vue";
import Not404Found from "@/pages/NotFound.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ContactsPage from "@/pages/ContactsPage.vue";
import Catalog from "@/pages/Catalog.vue";

const routes = [
  { path: "/", component: MainPage },
  {
    path: "/about",
    component: AboutPage,
  },
  {
    path: "/contacts",
    component: ContactsPage,
  },
  {
    path: "*",
    component: Not404Found,
  },
  {
    path: "/catalog",
    component: Catalog,
  },
  {
    path: "/catalog/:page",
    component: Catalog,
  },
];
export default routes;

// { path: "/main", component: import("@/pages/MainPage.vue") },
// {
//   path: "/about",
//   component: import("@/pages/AboutPage.vue"),
// },
// {
//   path: "/contacts",
//   component: import("@/pages/ContactsPage.vue"),
// },
