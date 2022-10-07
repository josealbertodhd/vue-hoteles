<template>
    <div class="container mb-3">
        <div class="d-flex justify-content-center mt-4 ">
            <div class="card p-3 " style="width:100% ">
              <div class="card-body">

                <div class="d-flex text-center justify-content-between mb-1 p-2">
                  <h5 class="justify-content-center" style="font-size: 35px;"><i class="bi bi-house-fill"></i> Crear nuevo Hotel</h5>
                </div>
                <!-- items -->
                <div class="container text-left p-1 ">

                    <form>
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
                    </form>
                    </div>

                    <div class="container py-2">  
                        <div class="d-grid gap-5 p-3 d-md-flex justify-content-md-end bg-light">
                        <button @click="sendHotel" type="submit" class="btn btn-primary">Enviar</button>
                    </div>

                    <div v-if="info" class="alert alert-primary mt-3" role="alert">
                         {{info}}
                    </div>
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
            .get('http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/cities')
            .then( response => (this.cities = response.data) )
    },
    data() {
        return {
            errores: {
                nit: null
            },
            info: null,
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
        sendHotel() {
            axios({
                method: 'post',
                url: 'http://ec2-44-201-108-206.compute-1.amazonaws.com/decameron/api/hotels',
                data: this.hotel,
                responseType: 'json',
            }) 
            .then(response => {  
                this.info = response.data.message
                this.hotel.name = null
                this.hotel.nit = null
                this.hotel.address = null
                this.hotel.num_rooms = null
                this.hotel.city_id = null
            })
            .catch(error => {
                this.errores = error.response.data.errors
            })  
        }
    },
}
</script>