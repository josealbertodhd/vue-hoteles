<template>
    <div class="container mb-3">
        <div class="d-flex justify-content-center mt-4 ">
            <div class="card p-3 " style="width:100% ">
              <div class="card-body">

                <div class="d-flex text-center justify-content-between mb-1 p-2">
                  <h5 class="justify-content-center" style="font-size: 35px;"><i class="bi bi-house-fill"></i> Modificar o Eliminar Hotel</h5>
                </div>
                <!-- items -->
                <div class="container text-left p-2 ">
                  <div class="row g-3">
                    <div class="col-6 py-1 d-grid ">  
                          <label classs= "fw-bold" for="Women ">Nombre</label>
                          <input v-model="hotel.name" type="text" class="form-control" name="Nombre" id="Nombre" placeholder="Ingrese el nombre del hotel">     
                          <div v-if="errores.name" style="color:red" role="alert">{{errores.name[0]}}</div>   
                    </div>
                    <div class="col-6 d-grid py-1">
                      <label for="Women">Nit</label>
                      <input v-model="hotel.nit" type="text" class="form-control" name="Nombre" id="Nombre" placeholder="Ingrese nit del hotel"> 
                      <div v-if="errores.nit" style="color:red" role="alert">{{errores.nit[0]}}</div>      
                    </div>
                    <div class="col-6 d-grid py-1">  
                        <label for="Women">Dirección</label>
                        <input v-model="hotel.address" type="text" class="form-control" name="Nombre" id="Nombre" placeholder="Ingrese la direccion del hotel">  
                        <div v-if="errores.address" style="color:red" role="alert">{{errores.address[0]}}</div>      
                    </div>
                    <div class="col-3 d-grid py-1">
                        <label for="Women">Numero de habitaciones</label>
                        <input v-model="hotel.num_rooms" type="text" class="form-control" name="Nombre" id="Nombre" placeholder="Numero de habitaciones">      
                        <div v-if="errores.num_rooms" style="color:red" role="alert">{{errores.num_rooms[0]}}</div> 
                      </div>
                    
                    <div class="col-6">
                      <label for="Women">Ciudad</label>
                      <select class="form-select" aria-label="Default select example" v-model="hotel.city_id" >
                            <option v-for="ciudad in cities" :value="ciudad.id" :key="ciudad.id">{{ ciudad.name }}</option>
                        </select>
                        <div v-if="errores.city_id" style="color:red" role="alert">{{errores.city_id[0]}}</div>
                    </div>
                  </div>
                </div>
                      <div class="p-3 mx-5 d-flex justify-content-between rounded-2" style="background-color: rgb(248, 246, 246);">  
                            <button @click="eliminarHotel" type="submit" class="btn btn-danger">Eliminar</button>
                            <button @click="actualizarHotel" class="btn btn-primary">Modificar</button>
                      </div>
              </div>
              <div v-if="info" class="alert alert-primary mt-3" role="alert">
                         {{info}}
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
              .then( response => (this.hoteles = response.data.data));

          axios
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
            .then( response => (this.cities = response.data) )
      },
      data() {
          return {
              info: null,
              hoteles: [],
              errores: {
                nit: null
              },
              cities: [],
              hotel: {
                name: null,
                nit: null,
                address: null,
                num_rooms: null,
                city_id: null
              }
          }
      },
      methods: {
        eliminarHotel() {
          axios.delete('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+ this.$route.params.id)
          .then(response => {
            console.log(response) 
            this.info = "Hotel eliminado con exito!!"
           })
           .catch(error => {
                this.info = error.response.data.message;
           });
        },
        actualizarHotel() {
          axios.put('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels/'+ this.$route.params.id, this.hotel)
          .then(response => {
            console.log(response) 
            this.info = "Habitacion actualizada con exito!!"
            this.hotel.name = null
            this.hotel.nit = null
            this.hotel.address = null
            this.hotel.num_rooms = null
            this.hotel.city_id = null
           })
           .catch(error => {
                this.errores = error.response.data.errors
            });
        }
      }

    }

</script>