//NECESITAMOS LAS LIBRERIAS DE NAVEGACION QUE HEMOS INCLUIDO
import HomeComponent from "./components/HomeComponent.vue";
import CineComponent from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import { createRouter, createWebHistory } from "vue-router";
import CicloVida from "./components/CicloVida.vue";
import DirectivasComponent from "./components/DirectivasComponent.vue";
import ParImpar from "./components/ParImpar.vue";
import PropiedadComutada from "./components/PropiedadComutada.vue";
import MetodosFilters from "./components/MetodosFilters.vue";

//UN ARRAY CON LAS RUTAS DE NAVEGACION
const myRoutes = [
    { path: "/", component: HomeComponent },
    { path: "/musica", component: MusicaComponent },
    { path: "/cine", component: CineComponent },
    { path: "/ciclo", component: CicloVida },
    { path: "/directivas", component: DirectivasComponent },
    { path: "/parimpar", component: ParImpar },
    { path: "/propiedadconmutada", component: PropiedadComutada },
    { path: "/metodosfilters", component: MetodosFilters },
];

//CREAMOS UNA VARIBALE PARA EL router INDICANDO EL TIPO DE NAVEGACION
//Y LAS RUTAS
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes,
});

//LA CONSTANTE router ES LA QUE UTILIZARA EL FICHERO main.js
//DEBEMOS EXPORTARLA PARA QUE SEA UTILIZADA
export default router;
