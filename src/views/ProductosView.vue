<template>
    <main>
        <section class="productos container" id="productos">
    <h1 class=" text-center">Nuestros Productos</h1>
    <div class="row">
      <!-- primera -->
      <div class="col-sm-4 col-12 px-5 mb-4">

        <div class="card">
          <img src="../assets/img/colaciones.jpg" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{nombre}}</h5>
            <p class="card-text">
              {{descripcion}}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{precio}}</li>
            <li class="list-group-item">{{cantidad}}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
          </div>
        </div>
      </div>
    </div>
  </section>
        <section class=" container text-center mb-3">
            <BotonInicio/>
        </section>
    </main>
  </template>

<script>
import Card from '@/components/Card.vue'
import BotonInicio from '@/components/BotonInicio.vue'

export default{
    name:"ProductoView",
    components:{
        Card,
        BotonInicio
    },
    props:{
        nombre: String,
        precio: Number,
        descripcion: String,
        cantidad: String
    }
}
</script>