<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Medidas de posición

    .row.justify-content-center
      .col-lg-4.my-3.h-100.j1
        img.img-t.img-a(src='@/assets/template/images/cf3/69.png')
      .col-lg-5.my-3
        .bg17.p-3.brad
          p.mb-0
            | Las 
            b medidas de posici&oacute;n
            |  son herramientas estad&iacute;sticas que permiten dividir un conjunto de datos en partes iguales para identificar la ubicaci&oacute;n de un valor en relaci&oacute;n con el resto del conjunto. Estas medidas son fundamentales para describir la posici&oacute;n relativa de una observaci&oacute;n dentro de una distribuci&oacute;n. Las principales medidas de posici&oacute;n son los 
            b cuartiles, deciles y percentiles
            | , que permiten dividir los datos en diferentes porcentajes, y tambi&eacute;n se utilizan para identificar valores at&iacute;picos.
      .col-lg-3.my-3
        img.img-t.img-a(src='@/assets/template/images/cf3/70.png')
    .separador-container
      .separador
    section
      #t_3_1.titulo-segundo.color-acento-botones
        h2 3.1&#x9;Cuartiles
      p
        | Los 
        b cuartiles
        |  dividen un conjunto de datos ordenados en cuatro partes iguales, de modo que cada cuartil contiene el 25% de los datos. Los cuartiles son particularmente &uacute;tiles para describir la dispersi&oacute;n de los datos y su distribuci&oacute;n en el rango intercuart&iacute;lico.
        .row.justify-content-center
          .col-lg-5.my-3
            .bg10.brad.p-4.h-100
              p.mb-4
                b F&oacute;rmula:
              .bgw.p-3.brad
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1
                    span.mb-0
                      b Primer cuartil
                      |  (Q1): Valor que deja por debajo al 25% de los datos.
              .bgw.p-3.brad.my-3
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1
                    span.mb-0
                      b Segundo cuartil
                      |  (Q2): Valor que deja por debajo al 50% de los datos (es equivalente a la mediana).
              .bgw.p-3.brad
                ul.lista-ul--color.fa-ul
                  li.mb-3
                    i.fas.fa-check.v1
                    span.mb-0
                      b Tercer cuartil
                      |  (Q3): Valor que deja por debajo al 75% de los datos.
          .col-lg-4.my-3
            .bg21.brad.p-4.h-100
              p.mb-4
                b Interpretaci&oacute;n:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Q1 divide el conjunto en un 25% de valores por debajo y un 75% por encima.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Q2, o mediana, divide el conjunto en dos partes iguales.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    | Q3 divide el conjunto en un 75% de valores por debajo y un 25% por encima.
          .col-lg-3.my-3
            .bg14.brad.p-4.h-100.j1
              img.img-t.img-a(src='@/assets/template/images/cf3/71.svg')
    .separador-container
      .separador
    section
      #t_3_2.titulo-segundo.color-acento-botones
        h2 3.2&#x9;Deciles
      .row.justify-content-center.align-items-center
        .col-lg-8.my-3
          p
            | Los 
            b deciles
            |  dividen el conjunto de datos en diez partes iguales, de modo que cada decil contiene el 10% de las observaciones. Son &uacute;tiles para observar la posici&oacute;n de un valor dentro de una divisi&oacute;n m&aacute;s detallada del conjunto de datos que los cuartiles.
          .row.justify-content-center.align-items-center
            .col-lg-auto.my-3
              img.img-t.img-a(src='@/assets/template/images/cf3/72.png')
            .col.my-3
              p.mb-4
                b F&oacute;rmula:
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    b Primer decil
                    |  (D1): Valor que deja por debajo al 10% de los datos.
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    b Segundo decil
                    |  (D2): Valor que deja por debajo al 20% de los datos.
                li.mb-3
                  i.fas.fa-check.v1
                  span  ... 
                li.mb-3
                  i.fas.fa-check.v1
                  span
                    b Noveno decil
                    |  (D9): Valor que deja por debajo al 90% de los datos.
          .bg22.brad.p-4.h-100
            p.mb-4
              b Interpretaci&oacute;n:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  | Cada decil indica la posici&oacute;n del conjunto de datos en fracciones del 10%, proporcionando una idea m&aacute;s granular de c&oacute;mo se distribuyen los valores.
        .col-lg-4.my-3
          img.img-t.img-a(src='@/assets/template/images/cf3/73.png')
    .separador-container
      .separador
    section
      #t_3_3.titulo-segundo.color-acento-botones
        h2 3.3&#x9;Percentiles
      p
        | Los 
        b percentiles
        |  dividen un conjunto de datos en cien partes iguales, de modo que cada percentil contiene el 1% de las observaciones. Los percentiles son ampliamente utilizados en muchos campos, como la educaci&oacute;n y la salud, para determinar la posici&oacute;n relativa de un individuo o una observaci&oacute;n dentro de una poblaci&oacute;n.
      .row.justify-content-center.align-items-center
        .col-lg-4.my-3
          img.img-t.img-a(src='@/assets/template/images/cf3/74.png')
        .col-lg-8.my-3
          p.mb-4
            b F&oacute;rmula:
          ul.lista-ul--color.fa-ul
            li.mb-3
              i.fas.fa-check.v1
              span
                b Primer percentil (P1)
                | : Valor que deja por debajo al 1% de los datos.
            li.mb-3
              i.fas.fa-check.v1
              p
                b D&eacute;cimo percentil (P10)
                | : Valor que deja por debajo al 10% de los datos.
            li.mb-3
              i.fas.fa-check.v1
              span
                b
                | Percentil 50 (P50): Es equivalente a la mediana, ya que deja por debajo al 50% de los datos.
            li.mb-3
              i.fas.fa-check.v1
              span
                | Percentil 90 (P90): Valor que deja por debajo al 90% de los datos.
          .bg7.brad.p-4.h-100
            p.mb-4
              b.text-white Interpretaci&oacute;n:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span.text-white
                  | El percentil proporciona informaci&oacute;n sobre la posici&oacute;n de un valor respecto a un grupo m&aacute;s amplio. Por ejemplo, si una persona se encuentra en el percentil 80 de un examen, significa que su puntuaci&oacute;n es superior a la del 80% de los participantes.
    .separador-container
      .separador
    section
      #t_3_4.titulo-segundo.color-acento-botones
        h2 3.4&#x9;Rango intercuart&iacute;lico
      p
        | El 
        b rango intercuart&iacute;lico (IQR)
        |  es una medida de dispersi&oacute;n que se basa en los cuartiles y representa la diferencia entre el tercer cuartil (Q3) y el primer cuartil (Q1). Es &uacute;til para medir la variabilidad de la parte central de los datos, eliminando el efecto de los valores extremos o at&iacute;picos.
      .row.justify-content-center
        .col-lg-9.my-3
          .bg17.brad.p-4.h-100
            p.mb-4
              b F&oacute;rmula:
            img.img-t.mb-4(src='@/assets/template/images/cf3/76.png')
            p.mb-4
              b Interpretaci&oacute;n:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  | El rango intercuart&iacute;lico mide la dispersi&oacute;n del 50% central de los datos, lo que proporciona una visi&oacute;n m&aacute;s clara de c&oacute;mo est&aacute;n distribuidos los valores centrales del conjunto.
              li.mb-3
                i.fas.fa-check.v1
                span
                  | Es menos sensible a los valores extremos que otras medidas de dispersi&oacute;n, como la desviaci&oacute;n est&aacute;ndar.
        .col-lg-3.my-3
          .bgw.brad.p-4.h-100.j1
            img.img-t.img-a(src='@/assets/template/images/cf3/75.png')


</template>

<script>
export default {
  name: 'Tema3',
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
