<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4           
      .col-lg-auto.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg', alt='')
      .col.my-3
        p(data-aos="fade-down") El presente componente formativo aborda los aspectos generales de los procedimientos operativos de tránsito y transporte como la instalación de puestos de control, aplicación de la norma a través de órdenes de comparendo y las infracciones de tránsito y transporte descritas en el #[b Manual de infracciones] y reglamentadas en el Decreto 1079 de 2015 y la Ley 336 de 1996 las cuales se registran en el informe único de infracción de transporte IUIT. También se detalla el procedimiento de inmovilización por infracciones de tránsito o transporte y se hacen algunas consideraciones frente al uso de equipos o plataformas tecnológicas para el control.
        p(data-aos="fade-down") Revise el siguiente diagrama que, a manera de resumen, conecta los principales temas y conceptos desarrollados en el componente formativo.
    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Esquema general de este componente formativo, que encierra las temáticas desarrolladas en el mismo y destaca aspectos clave estudiados. Tema central: Procedimientos operativos de tránsito y transporte. Temas integradores: 1 Tránsito, que habla sobre infracciones, puestos de control y equipos tecnológicos. 2 Transporte, que trata sobre infracciones, Informe IUIT, inmovilización de vehículos. 3 Protocolo de aplicación de órdenes de comparendo y Manual de infracciones de tránsito.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
