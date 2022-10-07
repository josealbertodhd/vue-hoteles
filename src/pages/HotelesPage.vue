<template>
    <div class="container">
        <div class="d-flex justify-content-center my-4">
            <div class="card" style="width:100%;">
              <div class="card-body">

                <div class="d-flex text-center justify-content-between mb-4 p-2">
                  <h5 class="justify-content-center" style="font-size: 25px;"><i class="bi bi-house-fill"></i> Hoteles</h5>
                  <router-link to="/hoteles/create" class="btn btn-success" aria-current="page" href="#">Crear Hotel</router-link>
                </div>

                <table class="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">NIT</th>
                      <th scope="col">NOMBRES</th>
                      <th scope="col">APELLIDOS</th>
                      <th scope="col">CIUDAD</th>
                      <th scope="col">CAPACIDAD HAB</th>
                      <th scope="col">E/M</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="hotel in hotels" :key="hotel.id">
                      <th scope="row">{{hotel.nit}}</th>
                      <td>{{hotel.name}}</td>
                      <td>{{hotel.address}}</td>
                      <td>{{hotel.city.name}}</td>
                      <td>{{hotel.num_rooms}}</td>
                      <td class="d-flex justify-content-center">
                          <router-link :to="{ name:'DetallesPage', params:{id:hotel.id}}" class="btn btn-warning rounded-4 text-white mx-1" aria-current="page" href="#"><strong>Detalle</strong></router-link>
                          <router-link :to="{ name:'HabitacionPage', params:{id:hotel.id}}" class="btn btn-success rounded-4 mx-1" aria-current="page" href="#"><strong>Habitaciones</strong></router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
  import axios from 'axios'
  export default {
      beforeMount() {
          axios
              .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels')
              .then( response => (this.hotels = response.data.data))
      },
      data() {
          return {
              hotels: []
          }
      }
  }
  </script>