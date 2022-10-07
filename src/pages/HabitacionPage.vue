<template>
    <div class="container">
        <div class="d-flex justify-content-center mt-5">
            <div class="card" style="width:100%;">
              <div class="card-body">

                <div class="d-flex text-center justify-content-between mb-4 p-2">
                    <div class="d-flex">
                        <h5 class="justify-content-center mx-3" style="font-size: 80px;"><i class="bi bi-house-fill"></i></h5>
                        <div class="d-flex flex-column align-items-start justify-content-center">
                            <h3>{{hoteles2.name}}</h3>
                            <p>Numero de Habitaciones: {{hoteles2.num_rooms}}</p>
                        </div>
                    </div>
                    <router-link :to="{ name:'HabitacionCreatePage', params:{id:this.$route.params.id}}" class="btn btn-success h-25 justify-content-center align-items-center" aria-current="page" href="#">Crear Habitacion</router-link>
                </div>
                <table class="table table-striped text-center">
                  <thead>
                    <tr>
                      <th scope="col">TIPO</th>
                      <th scope="col">ACOMODACION</th>
                      <th scope="col">CANTIDAD</th>
                      <th scope="col">E/M</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="hotel in hoteles" :key="hotel.hotel_id">
                      <td>{{hotel.type.name}}</td>
                      <td>{{hotel.accommodation.name}}</td>
                      <td>{{hotel.quantity}}</td>
                      <td class="d-flex justify-content-center">
                          <router-link :to="{ name:'HabitacionEditarPage', params:{id:hotel.id, item: this.$route.params.id}}" class="btn btn-warning rounded-4 text-white mx-1" aria-current="page" href="#"><strong>Editar</strong></router-link>
                          <button @click="eliminarHabitacion" type="submit" class="btn btn-danger rounded-4 mx-1"><strong>Eliminar</strong></button>
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
              .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/' + this.$route.params.id)
              .then( response => (this.hoteles = response.data.data));

              axios
              .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.id)
              .then( response => (this.hoteles2 = response.data.data));
      },
      data() {
          return {
              hoteles: [],
              hoteles2: {}
          }
      },
      methods: {
        eliminarHabitacion() {
          axios.
           delete('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+ this.hoteles[0].id)
          .then(response => {
            console.log(response);
            location.reload();
        });
        }
      }
  }
  </script>