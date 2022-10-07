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
                </div>

                <form class="mx-5 my-2">
                    <div class="row">
                        <div class="form-group col">
                          <label for="tipo-habitacion">Tipo Habitacion</label>
                          <select v-model="room.room_type_id" class="form-control" id="tipo-habitacion">
                                <option :value="1" :key="1">JUNIOR</option>
                                <option :value="2" :key="2">ESTANDAR</option>
                                <option :value="3" :key="3">SUITE</option>
                                </select>
                                <div v-if="errores.room_type_id" style="color:red" role="alert">{{errores.room_type_id[0]}}</div>
                          </div>

                          <div class="form-group col">
                            <label for="acomodacion">Acomodacion</label>
                            <select v-model="room.accommodation_id" class="form-control" id="acomodacion">
                                <option :value="3" :key="3">SENCILLA</option>
                                <option :value="2" :key="2">DOBLE</option>
                                <option :value="1" :key="1">TRIPLE</option>
                                <option :value="4" :key="4">CUADRUPLE</option>
                            </select>
                            <div v-if="errores.accommodation_id" style="color:red" role="alert">{{errores.accommodation_id[0]}}</div>
                          </div>
                    </div>
                    <div class="d-flex my-1">
                        <div class="form-group">
                          <input v-model="room.quantity" type="text" class="form-control" placeholder="Ingrese Cantidad">
                            <div v-if="errores.quantity" style="color:red" role="alert">{{errores.quantity[0]}}</div>
                          </div>
                    </div>
                  </form>

                  <div class="container py-1">  
                        <div class="d-grid gap-5 p-3 d-md-flex justify-content-md-end bg-light">
                          <button @click="actualizarHabitacion()" class="btn btn-primary">Actualizar Habitacion</button>
                        </div>
                    </div>

                    <div v-if="info" class="alert alert-primary mt-3" role="alert">
                         {{info}}
                    </div>

              </div>
            </div>
          </div>
        </div>
</template>

<script>
  import axios from 'axios';
    export default {
      beforeMount() {
        axios
          .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/' + this.$route.params.id)
          .then( response => {
            this.hoteles = response.data.data
          });

        axios
          .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/' + this.$route.params.item)
          .then( response => (this.hoteles2 = response.data.data));
      },
      data() {
          return {
              info: null,
              errores: {
                room_type_id: null
              },
              hoteles: [],
              hoteles2: {},
              room: {
                hotel_id: this.$route.params.item,
                room_type_id: null,
                accommodation_id: null,
                quantity: null
            }
          }
      },
      methods: {
        actualizarHabitacion() {
          axios.put('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/rooms/'+ this.$route.params.id, this.room)
          .then(response => {
            console.log(response) 
            this.info = "Habitacion actualizada con exito!!"    
           })
           .catch(error => {
                this.info = error.response.data.message
            });
        }
      }
    }
</script>
