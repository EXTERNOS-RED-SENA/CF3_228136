<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4
      .col-lg-8.my-3.order-1
        .brad.p-3.mb-4
          p.mb-0
            | En el &aacute;mbito de la estad&iacute;stica aplicada, la comprensi&oacute;n y el uso de medidas estad&iacute;sticas permiten describir, analizar y entender patrones dentro de los datos. Las medidas de tendencia central, dispersi&oacute;n y posici&oacute;n, junto con el c&aacute;lculo de probabilidades, son fundamentales para interpretar correctamente la informaci&oacute;n y realizar inferencias v&aacute;lidas sobre poblaciones a partir de muestras.
        .row.justify-content-center.align-items-center.bg8.mb-4
          .col-lg-4.h-100
            img.img-fluid(src='@/assets/template/images/cf3/2.png' alt='')
          .col-lg-8.bgi
            .p-4
              p.mb-0
                | &iquest;C&oacute;mo se aplican estas herramientas para obtener resultados precisos y representativos en el an&aacute;lisis estad&iacute;stico? Este componente formativo explora los principios y metodolog&iacute;as de las medidas estad&iacute;sticas clave, abarcando desde los conceptos de media y varianza hasta las distribuciones de probabilidad y su interpretaci&oacute;n en gr&aacute;ficos estad&iacute;sticos. Adem&aacute;s, se proporcionar&aacute;n enfoques pr&aacute;cticos para seleccionar y presentar datos de manera clara y efectiva en informes estad&iacute;sticos.
        p
          | A lo largo de este componente, el aprendiz desarrollar&aacute; habilidades para calcular y aplicar medidas estad&iacute;sticas, interpretar distribuciones y utilizar gr&aacute;ficos para comunicar hallazgos. Asimismo, se destacar&aacute;n las mejores pr&aacute;cticas para estructurar datos y elegir el tipo de gr&aacute;fico adecuado, optimizando la precisi&oacute;n y la claridad en la presentaci&oacute;n de resultados.
      .col-lg-4.my-3.order-lg-2
        img.img-a.img-t(src='@/assets/template/images/cf3/1.png' alt='')
    .row.justify-content-center
      .col-lg-10.my-3
        .row.justify-content-center.align-items-center.bg7.p-4.brad.text-white.mb-5
          .col-lg-auto
            img.img-a.img-t(src='@/assets/template/images/cf3/3.svg' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0
              | Las medidas estad&iacute;sticas y su interpretaci&oacute;n son pilares para cualquier an&aacute;lisis riguroso, ya que &ldquo;la precisi&oacute;n de las conclusiones depende de la correcta aplicaci&oacute;n de los principios estad&iacute;sticos&rdquo;.
    h4.mb-4
      | &iexcl;Bienvenido a este recorrido por el mundo de la estad&iacute;stica y la visualizaci&oacute;n efectiva de datos para el an&aacute;lisis!
    .row.justify-content-center.align-items-center        
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/HabJTdN042A?si=CpYeLeuXdmORLjl6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
