<template>
    <section class="Contactos container" id="Contactos">
        <h1 class="text-center">Contactos</h1>
        <hr>
        <div class="row">
        </div>
    </section>
    <main>
        <section class=" container text-center mb-3">
            <BotonInicio/>
        </section>
    </main>
</template>
<script>
import BotonInicio from '@/components/BotonInicio.vue'

export default{
    name:"ProductoView",
    components:{
        
        BotonInicio
}
}
</script>