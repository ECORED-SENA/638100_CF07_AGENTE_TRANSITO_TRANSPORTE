<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Instalación de puestos de control

    .bg4
      .row.justify-content-center.align-items-center.mb-4 
        .col-lg-3.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')                 
        .col-lg-9.my-3.j
          .cajon.color-primario.p-4.mb-4.j
            p(data-aos="fade-down").mb-0 Las autoridades de tránsito de Colombia realizan controles operativos en cada una de las jurisdicciones donde sean nombrados mediante acto administrativo o jurisdicción que le permita la ley, desarrollando procedimientos tipificados a la luz de la norma para exigir el cumplimiento de la normatividad de tránsito, transporte y policía judicial en eventos de accidentes de tránsito. 
          .row.justify-content-center
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.svg', alt='')                 
            .col.my-3
              p(data-aos="fade-down").mb-0 Los controles que pueden realizarse en vía pública deben tener como finalidad realizar actividades de prevención o de aplicación de la norma, para lo cual se pueden usar los parámetros establecidos en el Código Nacional de Tránsito, el Manual de Infracciones o el Estatuto Único del Sector Transporte, realizando procedimientos como instalación de puestos de control, planes de prevención y seguridad, controles de embriaguez o drogas, o control de exceso de velocidad.    
          p(data-aos="fade-down").mb-0 #[mark.t1 Uno de los controles operativos más utilizados por las autoridades es el “retén”, definido como puesto de control instalado técnicamente por cualquiera de las autoridades legítimamente constituidas de la nación. Sin embargo, el término retén ha dejado de utilizarse y en su reemplazo, la palabra técnica utilizada para identificar un control operativo del tránsito es la de “puesto de control”, que se clasifica según la finalidad del servicio.] 

    Separador 
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.1 Conceptos, elementos, características y tipos             
    p(data-aos="fade-down").mb-5 El #[b.tg Manual de señalización vial] en el capítulo 8 establece la señalización de calles y carreteras afectadas por eventos especiales de tránsito diferentes a obras en la vía, los cuales se clasifican como se muestra en la tabla a continuación:  
    .row.justify-content-center.mb-5     
      .col-lg-10(data-aos="fade-down") 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Clasificación de obras en la vía
        .tabla-a.color-acento-contenido(data-aos="fade-left") 
          table
            tbody.bgt1      
              tr
                td.w-300.text-bold Eventos Especiales No Programables (EENP)
                td
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Accidentes de tránsito.
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Incendios.
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Desastres naturales.                  
              tr
                td.w-300.text-bold Eventos Especiales Programables (EEP)
                td
                  span.text-bold Eventos debidamente autorizados por la autoridad competente como:
                  br
                  br
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Desplazamiento de personajes de la vida nacional (autoridades, dirigentes, etc.).
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Operativos de control de tránsito.
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Marchas, caminatas, cabalgatas.
                  span.text-bold Eventos que ameritan medidas de seguridad especiales que requieren cierre de vías, como:
                  br
                  br 
                  ul.lista-ul.fa-ul
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Cumbres o convenciones.
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Paradas militares.
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Eventos deportivos.
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Ciclovías dominicales o nocturnas.
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Eventos religiosos, culturales o de expresión social.
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Retenes de la Policía Nacional o del Ejército Nacional.
                    li 
                      i.fas.fa-angle-right.c1
                      p.mb-0 Para la señalización.   

    p(data-aos="fade-down").mb-5 El manual sugiere la utilización de señales preventivas para eventos especiales y da unas recomendaciones sobre cómo realizar operativos de control de tránsito y seguridad ciudadana.
    .bg7   
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-9.bg5.px-4.my-3
          .row.justify-content-center
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.svg', alt='')                 
            .col.my-3.j
              p(data-aos="fade-down").mb-0 Para ampliar información, consulte el Manual de señalización vial, capítulo 8, numeral 8.6. señalización por tipo de evento especial. 
        .col-lg-3.my-3
            a.anexo.mb-4(:href="obtenerLink('/downloads/Manual_de_Senalizacion_Vial.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/curso/temas/pdf.svg")
              .anexo__texto
                p #[b Anexo.] Manual de señalización vial

      p(data-aos="fade-down") Por otra parte, es necesario considerar una instrucción interna al personal de la Dirección de Tránsito y Transporte, el instructivo 006 de 2019, que unifica criterios y formas de actuación para desarrollar actividades operativas, preventivas y disuasivas para prevención de la accidentalidad vial, y establece los siguientes servicios de control y fiscalización: 
      .row.justify-content-center
        .col-lg-4.p-3.bg6.j.bradr
          ul.lista-ul.fa-ul.text-white.mb-0
            li 
              i.fas.fa-angle-right.c1
              p.mb-0 Instalar y ejecutar puestos de control.
            li 
              i.fas.fa-angle-right.c1
              p.mb-0 Áreas de prevención.
            li 
              i.fas.fa-angle-right.c1
              p.mb-0 Control de velocidad.
            li 
              i.fas.fa-angle-right.c1
              p.mb-0 Punto de regulación.
            li 
              i.fas.fa-angle-right.c1
              p.mb-0 Patrullas recorredoras.
            li 
              i.fas.fa-angle-right.c1
              p.mb-0 Control en terminales.
            li.mb-0 
              i.fas.fa-angle-right.c1
              p.mb-0 Área de fiscalización.              
        .col-lg-3.p-0.bg6.bradl
          img.img-mov.bradl.img-med(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='') 

    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.2 Procedimiento para la instalación 
    .bg4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-9.my-3
          .bg8.p-4.mb-4.j
            p(data-aos="fade-down").mb-0 Para realizar la instalación de un puesto de control operativo de tránsito en un determinado punto del territorio nacional es necesario el desarrollo de una planeación previa y autorización con la central de emergencias, cuya finalidad es la ejecución de tareas de control a vehículos automotores y personas para la prevención de comportamientos contrarios a las normas de tránsito y demás normas.
          .row.justify-content-center
            .col-lg-auto.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.svg', alt='')                 
            .col.my-3.j
              p(data-aos="fade-down").mb-0 El procedimiento para la realización de un puesto de control se define según la entidad a realizarlo, sin embargo, se describe de manera general el establecido al interior de la dirección de tránsito y transporte como una guía para su realización, en los siguientes puntos:                                  
        .col-lg-3.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='') 

    .tarjeta.tarjeta--gris.p-4.pb-0.mb-5
      LineaTiempoC.color-acento-botones
        .row.justify-content-center.align-items-center(titulo="Paso1")
          .col-lg-7.col-md-12.my-3.order-1
            .bgw.p-4.box-radius
              h4 Notificar e instruir sobre la actividad a desarrollar 
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Instrucción al personal: medidas de seguridad, contexto, objetivo, descripción del sector a intervenir, condiciones generales a partir de la memoria local y topográfica.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Instalación en sitios estratégicos, evitar calzadas, carriles o avenidas principales, en lo posible usar bahías de estacionamiento eludiendo congestión vehicular o accidentes de tránsito.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Responsable: Comandante del dispositivo.
          .col-lg-4.col-md-12.order-lg-2
            img(src='@/assets/curso/temas/12.svg', alt='')   
        .row.justify-content-center.align-items-center(titulo="Paso2")
          .col-lg-7.col-md-12.my-3.order-1
            .bgw.p-4.box-radius
              h4 Instalar el puesto de prevención y control o punto de verificación 
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Mantener las medidas de seguridad. 
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Asignar un agente de tránsito para el manejo de la señal PARE o SIGA, y dos o más agentes para la verificación de documentos. 
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Instalar los elementos necesarios. 
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Disponer el tiempo de permanencia evitando prolongar más de dos horas en un mismo sitio. 
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Responsable: Comandante del dispositivo.
          .col-lg-4.col-md-12.order-lg-2
            img(src='@/assets/curso/temas/13.svg', alt='') 
        .row.justify-content-center.align-items-center(titulo="Paso3")
          .col-lg-7.col-md-12.my-3.order-1
            .bgw.p-4.box-radius
              h4 Seleccionar y ordenar el ingreso de vehículos al puesto de control 
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Ingreso de vehículos de forma selectiva empleando las paletas de señalización (PARE o SIGA) y teniendo en cuenta la cantidad de vehículos que se pueden atender.  
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Verificación de vehículos y personas: saludo, solicitud de documentos, verificación de antecedentes e imposición del comparendo de ser necesario.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Responsables: Integrantes puesto de control.
          .col-lg-4.col-md-12.order-lg-2
            img(src='@/assets/curso/temas/14.svg', alt='') 
        .row.justify-content-center.align-items-center(titulo="Paso4")
          .col-lg-7.col-md-12.my-3.order-1
            .bgw.p-4.box-radius
              h4 Registrar en planillas de control o en medios tecnológicos 
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Se debe dejar registro de las personas y vehículos identificados en el puesto de control, en las bases de datos o herramientas tecnológicas diligenciando los datos en el formato establecido por las secretarías de tránsito y reportar, una vez finalizado el servicio. 
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Responsable: Integrantes puesto de control.
          .col-lg-4.col-md-12.order-lg-2
            img(src='@/assets/curso/temas/15.svg', alt='') 
        .row.justify-content-center.align-items-center(titulo="Paso5")
          .col-lg-7.col-md-12.my-3.order-1
            .bgw.p-4.box-radius
              h4 Regresar documentos y permitir que el vehículo se retire del puesto de control 
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 En caso de infracción al tránsito y transporte se impone el comparendo correspondiente; si da motivo a inmovilización, se practica el procedimiento. Se entregan los documentos y se permite al vehículo continuar su recorrido.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Si no se evidencia infracción, se entregan los documentos y se autoriza avance.  
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Responsable: Integrantes puesto de control.
          .col-lg-4.col-md-12.order-lg-2
            img(src='@/assets/curso/temas/16.svg', alt='') 
        .row.justify-content-center.align-items-center(titulo="Paso6")
          .col-lg-7.col-md-12.my-3.order-1
            .bgw.p-4.box-radius
              h4 Disponer el retiro del puesto de control 
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Una vez culminado el servicio se procederá a constatar las posibles novedades de personal, logística y elementos que se emplearon para el servicio.
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Responsable: Comandante del dispositivo.
          .col-lg-4.col-md-12.order-lg-2
            img(src='@/assets/curso/temas/17.svg', alt='') 
        .row.justify-content-center.align-items-center(titulo="Paso7")
          .col-lg-7.col-md-12.my-3.order-1
            .bgw.p-4.box-radius
              h4 Informar resultados
              ul.lista-ul.fa-ul
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Al finalizar el procedimiento se debe informar al secretario y/o jefe directo, sobre los resultados.  
                li 
                  i.fas.fa-chevron-right
                  p.mb-0 Responsable: Comandante del dispositivo.
          .col-lg-4.col-md-12.order-lg-2
            img(src='@/assets/curso/temas/18.svg', alt='') 

    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 1.3 Elementos de protección y seguridad
    p(data-aos="fade-down") La instalación del puesto de control trae consigo la utilización de algunos elementos de protección y seguridad de acuerdo a las siguientes especificaciones:
    .row.bg9.align-items-center.pt-3.mb-4
      .col-lg-12.col-12.px-lg-5.px-4.up
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.up(data-aos="fade-right")
            img(src='@/assets/curso/temas/20.png', alt='')
          .col-md-11.col-lg-8.mb-4.mb-md-0.up(data-aos="fade-left")
            SlyderF.text-center.pb-4(columnas="col-lg-6")(data-aos="fade-right")
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='') 
                h4 Paleta reflectiva Pare-Siga 
                p.mb-0 Sirve para controlar el tráfico de vehículos y permitir el paso de peatones en zonas donde se están ejecutando obras públicas o hay algún evento masivo con exceso de personas y autos.       
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='') 
                h4 Valla de señal reglamentaria (SR26) Prohibido Adelantar 
                p.mb-0 Se emplea para notificar a los conductores que está prohibido realizar cualquier maniobra con el objetivo de adelantar a uno o varios vehículos traspasando el eje central de la calzada.  
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='') 
                h4 Valla reflectiva reglamentaria (SR30) Velocidad Máxima 
                p.mb-0 Es usada para informar a los conductores la velocidad máxima permitida en la que pueden transitar, a partir del lugar en donde la señal esté instalada.     
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='') 
                h4 Reductores de velocidad 
                p.mb-0 Los reductores de velocidad vial son elementos que se encuentran en la superficie de la vía y tienen como objetivo hacer que los conductores vayan más lento en ciertos tramos y puntos críticos, especialmente cuando otra señalización usada ha sido insuficiente.  
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='') 
                h4 Conos reflectivos viales (mínimo seis) 
                p.mb-0 El cono vial es un dispositivo vial temporal, fabricado para alertar al conductor a una distancia considerable de alguna intervención en la vía, reten, o delimitación de carril temporal.     
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='') 
                h4 Chalecos o chaquetas reflectivas 
                p.mb-0 Favorecen la identificación del personal que opera oficialmente y permiten su visualización en los espacios de acción.  
              .tarjeta.bgcard.ts.h-100.p-4
                img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='') 
                h4 Linternas o señales luminosas para servicio nocturno 
                p.mb-0 Dispositivos de señalización visual ideales para operaciones en puestos de control vial, retenes, desviaciones en vías, parqueaderos y aeropuertos, debido a su función bicolor (luz roja- verde) de manera fija e intermitente, adicional de los bastones luminosos unicolor (rojo, verde, amarillo, azul, entre otros).
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
