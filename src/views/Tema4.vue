<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Inmovilización de vehículos por infracciones al tránsito y al transporte

    p(data-aos="fade-down").mb-5 En el desarrollo de actividades de control de tránsito o del transporte hay un procedimiento que ocasionalmente aplica a ciertas infracciones: la inmovilización, definida como la suspensión temporal de la circulación de un vehículo, debiendo ser trasladado al parqueadero autorizado por la autoridad administrativa de la jurisdicción donde se haya cometido la infracción. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.my-3
        .bg10.px-4.mb-4
          .row.justify-content-center
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.svg', alt='')                 
            .col.my-3.j
              p(data-aos="fade-down").mb-0 Las infracciones al tránsito, se encuentran descritas en la Resolución 3027 del 2010, y en el marco las infracciones al transporte que dan inmovilización, la Ley 336 de 1996 establece los criterios sancionatorios para la inmovilización de vehículos que prestan servicio en el sector transporte.  
        p(data-aos="fade-down") Ahora bien, en el sentido procedimental de ambos casos, esta facultad recae directamente en los funcionarios facultados para ejercer el control al tránsito: agentes de tránsito pertenecientes a las secretarías o funcionarios policiales adscritos al cuerpo de especialidad para el tránsito y transporte Ditra. Los procedimientos asociados se encuentran descritos en el artículo 3° de la ley 769 de 2002, y la Resolución 3027 de 2010 para casos de tránsito y el Decreto 1079 de 2015 en casos de transporte.                               
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')  

    .row.justify-content-center.align-items-center         
      .col-lg-10(data-aos="fade-right")
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/36.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.ts
                  h4 Causales de inmovilización en el tránsito
                  p.mb-0 Conozca las infracciones que dan lugar a la inmovilización de vehículos descargando el archivo propuesto.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Causales_de_inmovilizacion_en_el_transito.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  

    .row.justify-content-start.mb-3
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/ico.svg', alt='')
          .list__txt.box-ico.p-0.px-4
            h4.mb-0 Inmovilización para las motos 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')       
      .col-lg-8.my-3
        h4(data-aos="zoom-in").tg Para los motorizados adicionalmente aplican las siguientes infracciones:
        ul.lista-ul.fa-ul
          li 
            i.fas.fa-chevron-right
            p.mb-0 D.3. Transitar en sentido contrario al estipulado para la vía, calzada o carril.
          li 
            i.fas.fa-chevron-right
            p.mb-0 D.4. No detenerse ante una luz roja o amarilla de semáforo, una señal de “PARE” o un semáforo intermitente en rojo.
          li 
            i.fas.fa-chevron-right
            p.mb-0 D.5. Conducir un vehículo sobre aceras, plazas, vías peatonales, separadores, bermas, demarcaciones de canalización, zonas verdes o vías especiales para vehículos no motorizados.
          li 
            i.fas.fa-chevron-right
            p.mb-0 D.6. Adelantar a otro vehículo en berma, túnel, puente, curva, pasos a nivel y cruces no regulados o al aproximarse a la cima de una cuesta o donde la señal de tránsito correspondiente lo indique.
          li 
            i.fas.fa-chevron-right
            p.mb-0 D.7. Conducir realizando maniobras altamente peligrosas e irresponsables que pongan en peligro a las personas o las cosas. 

    Separador 
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.1 Causales de inmovilización en el transporte                                           

    p(data-aos="fade-down").mb-5 Las causales de inmovilización del transporte se encuentran establecidas en el artículo 49 de la ley 336 de 1996 el cual establece la inmovilización o retención de los equipos en los siguientes eventos:  

    .row.bg9.align-items-center.pt-3.mb-4
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.up.d-none.d-lg-block(data-aos="fade-right")
            img(src='@/assets/curso/temas/38.png', alt='')
          .col-md-11.col-lg-8.mb-4.mb-md-0.up.pb-2(data-aos="fade-left")
            .tarjeta.tarjeta-verde.bgw.p-4(data-aos="fade-left") 
              SlyderA(tipo="b")
                .row.justify-content-center.mt-3
                  .col-lg-7.mb-4.mb-md-0.my-3.order-1
                    .bg12.px-4.brad
                      .row.justify-content-center
                        .col-auto.my-3
                          .bg13.j.p-2 
                            h3.mb-0.px-1 1                                        
                        .col-lg-10.my-3
                          p(data-aos="fade-down").mb-0 Cuando se compruebe que el equipo no cumple con las condiciones de homologación establecidas por la autoridad competente, caso en el cual se ordenará la cancelación de la matrícula o registro correspondiente. 
                  .col-lg-5.my-3.order-lg-2
                    img.img-a.img-t(src='@/assets/curso/temas/39.png', alt='')        
                .row.justify-content-center.mt-3
                  .col-lg-7.mb-4.mb-md-0.my-3.order-1
                    .bg12.px-4.brad
                      .row.justify-content-center
                        .col-auto.my-3
                          .bg13.j.p-2 
                            h3.mb-0.px-1 2                                        
                        .col-lg-10.my-3
                          p(data-aos="fade-down").mb-0 Cuando se trate de equipos al servicio de empresas de transporte cuya habilitación y permiso de operación, licencia, registro o matrícula se les haya suspendido o cancelado, salvo las excepciones expresamente establecidas en las disposiciones respectivas. 
                  .col-lg-5.my-3.order-lg-2
                    img.img-a.img-t(src='@/assets/curso/temas/40.png', alt='') 
                .row.justify-content-center.mt-3
                  .col-lg-7.mb-4.mb-md-0.my-3.order-1
                    .bg12.px-4.brad
                      .row.justify-content-center
                        .col-auto.my-3
                          .bg13.j.p-2 
                            h3.mb-0.px-1 3                                      
                        .col-lg-10.my-3
                          p(data-aos="fade-down").mb-0 Cuando se compruebe la inexistencia o alteración de los documentos que sustentan la operación del equipo y sólo por el tiempo requerido para clarificar los hechos. 
                  .col-lg-5.my-3.order-lg-2
                    img.img-a.img-t(src='@/assets/curso/temas/41.png', alt='')        
                .row.justify-content-center.mt-3
                  .col-lg-7.mb-4.mb-md-0.my-3.order-1
                    .bg12.px-4.brad
                      .row.justify-content-center
                        .col-auto.my-3
                          .bg13.j.p-2 
                            h3.mb-0.px-1 4                                      
                        .col-lg-10.my-3
                          p(data-aos="fade-down").mb-0 Por orden de autoridad judicial. 
                  .col-lg-5.my-3.order-lg-2
                    img.img-a.img-t(src='@/assets/curso/temas/42.png', alt='')  
                .row.justify-content-center.mt-3
                  .col-lg-7.mb-4.mb-md-0.my-3.order-1
                    .bg12.px-4.brad
                      .row.justify-content-center
                        .col-auto.my-3
                          .bg13.j.p-2 
                            h3.mb-0.px-1 
                            h3.mb-0 5                                     
                        .col-lg-10.my-3
                          p(data-aos="fade-down").mb-0 Cuando se compruebe que el equipo no reúne las condiciones técnico-mecánicas requeridas para su operación, o preste un servicio no autorizado. En este último caso, el vehículo será inmovilizado por hasta de tres meses y, si reincide, adicionalmente multa de cinco a veinte salarios mínimos mensuales vigentes. 
                  .col-lg-5.my-3.order-lg-2
                    img.img-a.img-t(src='@/assets/curso/temas/43.png', alt='')        
                .row.justify-content-center.mt-3
                  .col-lg-7.mb-4.mb-md-0.my-3.order-1
                    .bg12.px-4.brad
                      .row.justify-content-center
                        .col-auto.my-3
                          .bg13.j.p-2 
                            h3.mb-0.px-1 
                            h3.mb-0 6                                     
                        .col-lg-10.my-3
                          p(data-aos="fade-down").mb-0 Cuando se compruebe que el equipo excede los límites permitidos sobre dimensiones, peso o carga. 
                  .col-lg-5.my-3.order-lg-2
                    img.img-a.img-t(src='@/assets/curso/temas/44.png', alt='')  
                .row.justify-content-center.mt-3
                  .col-lg-7.mb-4.mb-md-0.my-3.order-1
                    .bg12.px-4.brad
                      .row.justify-content-center
                        .col-auto.my-3
                          .bg13.j.p-2 
                            h3.mb-0.px-1 
                            h3.mb-0 7                                     
                        .col-lg-10.my-3
                          p(data-aos="fade-down").mb-0 Cuando se detecte que el equipo es utilizado para el transporte de mercancías presuntamente de contrabando. En estos eventos, surtida la inmovilización, se deberá dejar el equipo a disposición de la administración aduanera para que adelante los procedimientos de su competencia. 
                  .col-lg-5.my-3.order-lg-2
                    img.img-a.img-t(src='@/assets/curso/temas/45.png', alt='')        
                .row.justify-content-center.mt-3
                  .col-lg-7.mb-4.mb-md-0.my-3.order-1
                    .bg12.px-4.brad
                      .row.justify-content-center
                        .col-auto.my-3
                          .bg13.j.p-2 
                            h3.mb-0.px-1 8                                      
                        .col-lg-10.my-3
                          p(data-aos="fade-down").mb-0 Cuando se detecte que el equipo es utilizado para el transporte irregular de narcóticos o de sus componentes, caso en el cual deberá ponerse a disposición de la autoridad judicial competente en forma inmediata que decidirá sobre su devolución. 
                  .col-lg-5.my-3.order-lg-2
                    img.img-a.img-t(src='@/assets/curso/temas/46.png', alt='')

    Separador 
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 4.2 Procedimiento de inmovilización                      
    .row.justify-content-center.align-items-center
      .col-lg-9.my-3
        .bg8.p-4.mb-4.j
          p(data-aos="fade-down").mb-0 El procedimiento de inmovilización aplica bien sea para infracciones de tránsito o de transporte que den lugar a la inmovilización del automotor. Jurídicamente hablando la inmovilización del vehículo está descrita en la Ley 769 de 2002, que en el artículo 2° la define como la suspensión temporal de la circulación de un vehículo, que será trasladado a patios oficiales o parqueaderos autorizados, o sea, los aprobados por el organismo de tránsito correspondiente mediante acto administrativo.
        .row.justify-content-center
          .col-lg-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/47.svg', alt='')                 
          .col.my-3.j
            p(data-aos="fade-down").mb-0 El traslado del vehículo deberá realizarse en un medio idóneo y seguro que garantice que no se seguirá cometiendo la infracción que dio lugar a la inmovilización, para esto se llamará un servicio de grúa autorizada por la autoridad de tránsito de la jurisdicción quienes levantarán el vehículo del lugar de los hechos y lo llevarán al patio autorizado.                                
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')                              
</template>

<script>
export default {
  name: 'Tema4',
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
