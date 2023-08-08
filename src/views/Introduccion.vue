<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg3
      .row.justify-content-center.align-items-center.mb-4 
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.svg', alt='')                 
        .col-lg-8.my-3.j
          p(data-aos="fade-down").mb-0 Estimado aprendiz, bienvenido al componente formativo #[b.tg “Procedimientos operativos de tránsito y transporte”]. Antes de iniciar con el contenido, es preciso identificar quienes son las autoridades de tránsito, por lo que le invitamos a revisar el siguiente video introductorio.     
     
    .row.justify-content-center.align-items-center          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/H3MbZ3Q7fsU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Procedimientos operativos de tránsito y transporte
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
