<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Medidas de tendencia central
      
    p Las medidas de tendencia central son valores que resumen un conjunto de datos, indicando el punto central o típico alrededor del cual los datos tienden a agruparse. Estas medidas proporcionan información sobre la distribución de los datos y permiten describir el comportamiento general de la muestra o población. 
    .row.justify-content-center.align-items-center
      .col-lg-5.my-3
        .titulo-sexto.color-acento-contenido.aos-init
          h5 Figura 1.
          span Medidas de tendencia central
        img.contions.mx-auto.aos-init.img-t.bg-img(src='@/assets/template/images/cf3/figura1.svg' alt='La Figura 1 se denomina «Medidas de tendencia central», y muestra las diferentes medidas que proporcionan información sobre la distribución de los datos y permiten describir el comportamiento general de la muestra o población.')
        figcaption.border.border-secundary.border-start-0.border-end-0.border-2.mt-2
          p.text-center.text-dark.mb-0 Fuente: OIT, 2024.
      .col-lg-5.my-3
        img.img-a.img-t(src='@/assets/template/images/cf3/4.png')

    Separador 
    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1	Media aritmética

    p.mb-5
      | La 
      b media aritm&eacute;tica
      | , tambi&eacute;n conocida simplemente como media, es la medida de tendencia central m&aacute;s utilizada. Se calcula sumando todos los valores de los datos y dividiendo el resultado entre el n&uacute;mero total de observaciones. La media es especialmente &uacute;til cuando los datos est&aacute;n distribuidos de manera sim&eacute;trica, ya que refleja el valor promedio del conjunto.
    .row.justify-content-center.align-items-center
      .col-lg-3.my-3
        img.img-t.img-a(src='@/assets/template/images/cf3/5.png')
      .col-lg-7.my-3
        h5  Formula: 
        img.img-t.mb-4(src='@/assets/template/images/cf3/f-1.png')
        .brad.p-3.h-100
          p.mb-3
            b Donde:
            ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1            
                  .row.justify-content-center.align-items-center
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/6.png' alt='')
                    .col
                      p.mb-0 es la medida aritm&eacute;tica.            
                li.mb-3
                  i.fas.fa-check.v1
                  .row.justify-content-center.align-items-center    
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/7.png' alt='')
                    .col
                      p.mb-0 representa cada uno de los valores del conjunto de datos.
                li.mb-3
                  i.fas.fa-check.v1
                  .row.justify-content-center.align-items-center    
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/8.png' alt='')
                    .col
                      p.mb-0 es el n&uacute;mero total de observaciones.
        .bg9.brad.p-3.h-100
          p.mb-3
            b Propiedades
          ul.lista-ul--color.fa-ul
            li.mb-3
              i.fas.fa-check.v1
              span
                | Es f&aacute;cil de calcular y comprender.
            li.mb-3
              i.fas.fa-check.v1
              span
                | Afectada por valores at&iacute;picos (outliers), lo que puede distorsionar la interpretaci&oacute;n.
    .separador-container
      .separador
    section
      #t_1_2.titulo-segundo.color-acento-botones
        h2 1.2&#x9;Mediana
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-auto
          img.img-a.img-t(src='@/assets/template/images/cf3/9.png' alt='')
        .col.pt-lg-0.pt-md-4
          p.mb-0
            | La 
            b mediana
            |  es el valor central de un conjunto de datos ordenado de menor a mayor. Divide el conjunto de datos en dos partes iguales, de tal manera que el 50% de las observaciones son menores o iguales a la mediana, y el 50% son mayores o iguales a ella. A diferencia de la media, la mediana no se ve afectada por valores at&iacute;picos, lo que la convierte en una medida m&aacute;s robusta en distribuciones asim&eacute;tricas.
          p
      p.mb-5
        .row.justify-content-center
          .col-lg-4.my-3
            .bg10.brad.p-4.h-100
              img.img-t.img-a.mb-4(src='@/assets/template/images/cf3/10.png')
              .row.justify-content-center.mb-4
                p.col-lg-auto.mb-4.bg11.text-white.px-4.text-center
                  b C&aacute;lculo:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Si el n&uacute;mero de observaciones es impar, la mediana es el valor que ocupa la posici&oacute;n central.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Si el n&uacute;mero de observaciones es par, la mediana es el promedio de los dos valores centrales.
          .col-lg-4.my-3
            .bg10.brad.p-4.h-100
              img.img-t.img-a.mb-4(src='@/assets/template/images/cf3/11.png')
              .row.justify-content-center.mb-4
                p.col-lg-auto.mb-4.bg11.text-white.px-4(class='<p class=' mb-4='' bg4='')
                  b Propiedades:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | No est&aacute; afectada por valores extremos.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Es &uacute;til para distribuciones sesgadas, ya que ofrece una representaci&oacute;n m&aacute;s precisa del valor central.
          .col-lg-4.my-3
            .bg13.brad.p-4.h-100
              img.img-t.img-a(src='@/assets/template/images/cf3/12.svg')
    .separador-container
      .separador
    section
      #t_1_3.titulo-segundo.color-acento-botones
        h2 1.3&#x9;Moda
      .row.justify-content-center
        .col-lg-8.my-3.order-1
          p
            | La 
            b moda
            |  es el valor o los valores que m&aacute;s se repiten en un conjunto de datos. Es &uacute;til cuando se desea identificar el valor m&aacute;s frecuente en la distribuci&oacute;n. Puede haber distribuciones 
            b unimodales
            |  (con una moda), 
            b bimodales
            |  (con dos modas) o 
            b multimodales
            |  (con m&aacute;s de dos modas).
          .bg7.brad.p-4
            p.mb-4.text-white
              b Propiedades:
            .bgw.p-3.brad.mb-3
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span.mb-0
                    | Es la &uacute;nica medida de tendencia central que puede aplicarse a variables cualitativas.
            .bgw.p-3.brad
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span.mb-0
                    | Puede no ser representativa del conjunto si los datos no tienen una moda clara o si hay varias modas.
        .col-lg-4.my-3.order-lg-2
          .bg14.brad.p-4.h-100
            img.img-a.img-t(src='@/assets/template/images/cf3/13.svg' alt='')
    .separador-container
      .separador
    section
      #t_1_4.titulo-segundo.color-acento-botones
        h2 1.4&#x9;Media geom&eacute;trica
      p.mb-5
        | La 
        b media geom&eacute;trica
        |  es una medida de tendencia central que se utiliza principalmente para conjuntos de datos positivos que est&aacute;n relacionados multiplicativamente, como tasas de crecimiento o porcentajes de cambio. Se calcula multiplicando todos los valores y extrayendo la ra&iacute;z en&eacute;sima del producto, donde nnn es el n&uacute;mero total de observaciones.
      .row.justify-content-center
        .col-lg-4.my-3
          .bg16.brad.p-4.h-100
            img.img-a.img-t(src='@/assets/template/images/cf3/14.svg' alt='')
        .col-lg-8.my-3
          .bg15.brad.br-d.h-100.p-4
            h5  Formula: 
            img.img-t.mb-4(src='@/assets/template/images/cf3/15.png')
            div
              p.mb-3
                b Donde:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  .row.justify-content-center.align-items-center
                  
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/16.png' alt='')
                    .col
                      p.mb-0 es la media geom&eacute;trica.
                li.mb-3
                  i.fas.fa-check.v1
                  .row.justify-content-center.align-items-center
                  
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/17.png' alt='')
                    .col
                      p.mb-0  representa cada valor en el conjunto de datos.
                li.mb-3
                  i.fas.fa-check.v1
                  .row.justify-content-center.align-items-center
                  
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/18.png' alt='')
                    .col
                      p.mb-0 es el n&uacute;mero total de observaciones. 
            p.mb-4
              b Propiedades:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span.mb-0
                  | Es adecuada para datos que var&iacute;an en proporci&oacute;n, como en el crecimiento de una poblaci&oacute;n o el rendimiento de una inversi&oacute;n.
              li.mb-3
                i.fas.fa-check.v1
                span.mb-0
                  | Menos sensible a valores extremos que la media aritm&eacute;tica.
    .separador-container
      .separador
    section
      #t_1_5.titulo-segundo.color-acento-botones
        h2 1.5&#x9;Media ponderada
      p.mb-5
        | La 
        b media ponderada
        |  es una variante de la media aritm&eacute;tica en la que cada valor del conjunto de datos se multiplica por un peso espec&iacute;fico que refleja su importancia relativa. La media ponderada se usa cuando algunos valores tienen mayor relevancia o peso en el an&aacute;lisis que otros.
      .row.justify-content-center
        .col-lg-4.my-3
          .bg7.brad.h-100.p-4
            h5.text-white  Formula: 
            img.img-t.mb-4(src='@/assets/template/images/cf3/20.png')
            div
              p.mb-3
                b.text-white Donde:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  .row.justify-content-center.align-items-center
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/21.png' alt='')
                    .col
                      p.mb-0.text-white es la media ponderada.
                li
                  i.fas.fa-check.v1
                  .row.justify-content-center.align-items-center
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/22.png' alt='')
                    .col
                      p.mb-0.text-white  es el peso asignado al valor
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/23.png' alt='')
                li.mb-3
                  i
                li
                  i.fas.fa-check.v1
                  .row.justify-content-center.align-items-center
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/24.png' alt='')
                    .col
                      p.mb-0.text-white es el n&uacute;mero total de observaciones. 
        .col-lg-8.my-3
          img.img-a.img-t.mb-4(src='@/assets/template/images/cf3/19.png' alt='')
          div
            p.mb-4
              b Propiedades:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  | Permite dar m&aacute;s relevancia a ciertos valores seg&uacute;n su importancia o frecuencia.
              li.mb-3
                i.fas.fa-check.v1
                span
                  | Es especialmente &uacute;til cuando se necesita reflejar la influencia desigual de los datos.
    .separador-container
      .separador
    section
      #t_1_6.titulo-segundo.color-acento-botones
        h2 1.6&#x9;Media recortada
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-auto
          img.img-a.img-t(src='@/assets/template/images/cf3/25.png' alt='')
        .col.pt-lg-0.pt-md-4
          p.mb-0
            | La 
            b media recortada
            |  es una versi&oacute;n modificada de la media aritm&eacute;tica, en la que se eliminan los valores m&aacute;s extremos (los mayores y menores) antes de calcular la media. Esto permite reducir el efecto de los valores at&iacute;picos en el c&aacute;lculo.
      p.mb-5
        .row.justify-content-center
          .col-lg-4.my-3
            .bg10.brad.p-4.h-100
              img.img-t.img-a.mb-4(src='@/assets/template/images/cf3/26.png')
              .row.justify-content-center.mb-4
                p.col-lg-auto.mb-4.bg11.text-white.px-4.text-center
                  b C&aacute;lculo:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Se eliminan un porcentaje predeterminado de los valores m&aacute;s altos y m&aacute;s bajos.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Se calcula la media aritm&eacute;tica de los valores restantes.
          .col-lg-4.my-3
            .bg10.brad.p-4.h-100
              img.img-t.img-a.mb-4(src='@/assets/template/images/cf3/27.png')
              .row.justify-content-center.mb-4
                p.col-lg-auto.mb-4.bg11.text-white.px-4(class='<p class=' mb-4='' bg4='')
                  b Propiedades:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Proporciona una medida de tendencia central menos sensible a valores at&iacute;picos.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Es &uacute;til en situaciones donde los datos contienen valores extremos que podr&iacute;an distorsionar la media.
          .col-lg-4.my-3
            div
              img.img-t.img-a(src='@/assets/template/images/cf3/28.png')
    .separador-container
      .separador
    section
      #t_1_7.titulo-segundo.color-acento-botones
        h2 1.7&#x9;Trimedia
      p.mb-5
        | La 
        b trimedia
        |  es una medida de tendencia central que toma en cuenta tanto la mediana como los cuartiles (primer y tercer cuartil) del conjunto de datos. Es una medida robusta que combina informaci&oacute;n de diferentes puntos de la distribuci&oacute;n para proporcionar un resumen m&aacute;s equilibrado de la tendencia central.
      .row.justify-content-center
        .col-lg-5.my-3
          div
            img.img-a.img-t(src='@/assets/template/images/cf3/29.png' alt='')
        .col-lg-7.my-3
          div
            h5  Formula: 
            img.img-t.mb-4(src='@/assets/template/images/cf3/30.png')
            div
              p.mb-3
                b Donde:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  .row.justify-content-center.align-items-center
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/31.png' alt='')
                    .col
                      p.mb-0
                        | es el primer cuartil (25% de los datos por debajo).
                li.mb-3
                  i.fas.fa-check.v1
                  .row.justify-content-center.align-items-center
                    .col-auto
                      img.img-a.img-t(src='@/assets/template/images/cf3/32.png' alt='')
                    .col
                      p.mb-0  es el tercer cuartil (75% de los datos por debajo).
                li.mb-3
                  i.fas.fa-check.v1
                  span.mb-0 La mediana divide el conjunto de datos en dos mitades. 
            .bgi.p-4.brad
              p.mb-4
                b Propiedades:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Proporciona una medida que tiene en cuenta tanto la dispersi&oacute;n como el centro de los datos.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Es menos sensible a los valores at&iacute;picos que la media aritm&eacute;tica.              

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
