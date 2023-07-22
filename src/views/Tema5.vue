<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Equipos y plataformas tecnológicas para el tránsito y transporte
      
    .row.justify-content-center.mb-4
      .col.my-3.j
        p(data-aos="fade-down").mb-0 De acuerdo con Movilidad Bogotá, la cual ya tiene en funcionamiento un total de 600 comparenderas digitales (electrónicas) que aseguran la eficiencia y eficacia en la imposición de comparendos, #[b.tg se relacionan a continuación los principales beneficios y características de este tipo de dispositivos.]       
      .col-lg-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/28.svg', alt='')                 
    
    .row.justify-content-start.mb-3
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/ico.svg', alt='')
          .list__txt.box-ico.p-0.px-4
            h4.mb-0 Beneficios de la utilización de los dispositivos   

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        .bg10.p-4.mb-4.j
          p(data-aos="fade-down").mb-0 La plataforma tecnológica está diseñada para almacenar las evidencias de la infracción (fotos, videos, fecha, hora y lugar) que son tomadas en vía por los policías de tránsito. Dicha información es enviada al Sistema Integrado de Información sobre Movilidad Urbano Regional, que está a cargo de la Secretaría Distrital de Movilidad. De esta forma, el ciudadano puede estar tranquilo de que el diligenciamiento de la información es verídico y hay seguridad en el manejo de los datos personales.
        p(data-aos="fade-down") Por otro lado, el ciudadano #[b.tg podrá recibir información inmediata sobre el comparendo, descuentos, cursos pedagógicos, puntos de pago, grúa y patio al cual se destinará el vehículo inmovilizado.]
        .row.justify-content-center
          .col-lg-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/29.svg', alt='')                 
          .col.my-3.j
            p(data-aos="fade-down").mb-0 La transmisión de datos a la plataforma tecnológica de la entidad será inmediata, evitando contratiempos y retrasos con el actual sistema, para que los ciudadanos puedan consultar, pagar y retirar el vehículo de los patios en el menor tiempo posible sin hacer largas filas.                                
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='') 

    .row.justify-content-start.mb-5
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/ico.svg', alt='')
          .list__txt.box-ico.p-0.px-4
            h4.mb-0 Características de los dispositivos  

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4.up
        .tarjeta.h-100.p-4.bg11
          img.mb-3.inv(src='@/assets/curso/temas/31.svg', alt='' style="width: 90px;")
          p Se trata de dispositivos inteligentes marca Chainway C75, los cuales funcionan con tecnología Android y lector de códigos 2D para leer los caracteres de la licencia de conducción y de las cédulas, entre otros documentos. 
      .col-lg-4.col-md-6.mb-4.up
        .tarjeta.h-100.p-4.bg11
          img.mb-3.inv(src='@/assets/curso/temas/31.svg', alt='' style="width: 90px;")
          p También tienen acceso a internet, ubicación GPS y una impresora integrada, elementos que garantizarán adelantar el procedimiento de imposición de comparendos tanto de tránsito como de transporte público, de forma 100% digital. 
      .col-lg-4.col-md-6.mb-4.up  
        .tarjeta.h-100.p-4.bg11
          img.mb-3.inv(src='@/assets/curso/temas/31.svg', alt='' style="width: 90px;")
          p Los dispositivos cuentan con una batería de duración promedio de 10 horas de operación continua, son resistentes a caídas de un metro de altura y tienen una cámara de 13 megapíxeles con flash.                                 
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
