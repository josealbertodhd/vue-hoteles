import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap"

import HotelesPage from "@/pages/HotelesPage.vue";
import HotelesCreatePage from "@/pages/hoteles/HotelesCreatePage.vue";
import HabitacionesPage from "@/pages/Habitaciones/HabitacionesPage.vue";
import AcomodacionesPage from "@/pages/AcomodacionesPage.vue";
import DetallesPage from "@/pages/hoteles/DetallesPage.vue";
import HabitacionPage from "@/pages/Habitaciones/HabitacionPage.vue";
import HabitacionCreatePage from "@/pages/HabitacionCreatePage.vue";
import HabitacionEditarPage from "@/pages/Habitaciones/HabitacionEditarPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'HotelesPage', component: HotelesPage},
        {path: '/hoteles/create', name:'HotelCreatePage', component: HotelesCreatePage},
        {path: '/hoteles/detalles', name:'DetallesPage', component: DetallesPage},
        {path: '/hoteles/detalles/:id', name:'DetallesPage', component: DetallesPage},
        {path: '/hoteles/habitacion', name:'HabitacionPage', component: HabitacionPage},
        {path: '/hoteles/habitacion/:id', name:'HabitacionPage', component: HabitacionPage},
        {path: '/habitaciones', name:'HabitacionesPage', component: HabitacionesPage},
        {path: '/hoteles/habitacion/create', name:'HabitacionCreatePage', component: HabitacionCreatePage},
        {path: '/hoteles/habitacion/create/:id', name:'HabitacionCreatePage', component: HabitacionCreatePage},
        {path: '/hoteles/habitacion/editar', name:'HabitacionEditarPage', component: HabitacionEditarPage},
        {path: '/hoteles/habitacion/editar/:id/:item', name:'HabitacionEditarPage', component: HabitacionEditarPage},
        {path: '/acomodaciones', name:'AcomodacionesPage', component: AcomodacionesPage}

    ]
})

createApp(App)
.use(router)
.mount('#app')


