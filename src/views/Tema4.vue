<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Probabilidades

    .row.justify-content-center
      .col-lg-4.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/template/images/cf3/77.png')
      .col-lg-5.my-lg-0.my-3
        .bg21.p-3.brad.j1.h-100
          p.mb-0
            | La 
            b probabilidad
            |  es una rama de la matem&aacute;tica que estudia la posibilidad de que ocurra un evento o fen&oacute;meno aleatorio. En estad&iacute;stica, la probabilidad permite cuantificar la incertidumbre asociada con los resultados de un experimento o evento, proporcionando una medida num&eacute;rica entre 0 y 1, donde 0 indica que el evento no ocurrir&aacute; y 1 indica que el evento es seguro.
      .col-lg-3.my-lg-0.my-3.j1
        img.img-t.img-a(src='@/assets/template/images/cf3/78.png')
    .separador-container
      .separador
    section
      #t_4_1.titulo-segundo.color-acento-botones
        h2 4.1&#x9;C&aacute;lculo de probabilidades
      p
        | La 
        b probabilidad
        |  de que ocurra un evento AAA se define como la proporci&oacute;n de casos favorables entre el n&uacute;mero total de casos posibles. La f&oacute;rmula b&aacute;sica es:
      .row.justify-content-center
        .col-lg-7.my-3
          .bg21.brad.p-3.h-100
            p.mb-4
              b F&oacute;rmula:
            img.img-t.mb-4(src='@/assets/template/images/cf3/80.svg')
            p.mb-4
              b Donde:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  | P(A) es la probabilidad del evento A.
              li.mb-3
                i.fas.fa-check.v1
                span
                  | El 
                  b n&uacute;mero de casos favorables
                  |  son las situaciones que cumplen la condici&oacute;n del evento.
              li.mb-3
                i.fas.fa-check.v1
                span
                  | El 
                  b n&uacute;mero total de casos posibles
                  |  incluye las situaciones que podr&iacute;an ocurrir.
        .col-lg-5.my-3
          .bgw.brad.p-4.h-100.j1
            img.img-t.img-a(src='@/assets/template/images/cf3/79.png')
    .separador-container
      .separador
    section
      #t_4_2.titulo-segundo.color-acento-botones
        h2 4.2&#x9;Probabilidades marginales
      .row.justify-content-center
        .col-lg-7.my-3
          p
            | Las 
            b probabilidades
            |  marginales se refieren a la probabilidad de que ocurra un solo evento sin considerar ning&uacute;n otro evento. Es la probabilidad simple de un evento particular.
          .bg7.brad.p-4
            ul.lista-ul--color.fa-ul.mb-4
              li
                i.fas.fa-check.v1
                span.text-white
                  b Ejemplo:
                  |  En un lanzamiento de un dado de 6 caras, la probabilidad marginal de obtener un n&uacute;mero par (eventos favorables: 2, 4, 6) es:
            img.img-t.img-a(src='@/assets/template/images/cf3/81.png')
        .col-lg-5.my-3
          .bgw.brad.p-4.h-100.j1
            img.img-t.img-a(src='@/assets/template/images/cf3/82.png')
    .separador-container
      .separador
    section
      #t_4_3.titulo-segundo.color-acento-botones
        h2 4.3&#x9;Regla de la adici&oacute;n
      p.mb-4
        | La 
        b regla de la adici&oacute;n
        |  se utiliza para calcular la probabilidad de que ocurra uno de varios eventos. Existen dos casos:
      .row.justify-content-center
        .col-lg-4.my-lg-0.my-3.j1
          img.img-t.img-a(src='@/assets/template/images/cf3/84.png')
        .col-lg-4.my-lg-0.my-3
          .bg23.text-white.p-4.brad.h-100
            .row.justify-content-start.mb-4
              p.col-lg-auto.mb-4.bg11.text-white.px-3
                b Eventos mutuamente excluyentes
            p
              | Son aquellos eventos que no pueden ocurrir al mismo tiempo. La probabilidad de que ocurra AAA o BBB es la suma de las probabilidades de cada evento:
            img.img-t.img-a(src='@/assets/template/images/cf3/82.svg')
        .col-lg-4.my-lg-0.my-3.j1
          .bg24.text-white.p-4.brad.h-100
            .row.justify-content-start.mb-4
              p.col-lg-auto.mb-4.bg11.text-white.px-3
                b Eventos no mutuamente excluyentes
            p
              | Son eventos que pueden ocurrir juntos. En este caso, es necesario restar la intersecci&oacute;n de ambos eventos:
            img.img-t.img-a(src='@/assets/template/images/cf3/83.svg')
    .separador-container
      .separador
    section
      #t_4_4.titulo-segundo.color-acento-botones
        h2 4.4&#x9;Regla de la multiplicaci&oacute;n
      p
        | La 
        b regla de la multiplicaci&oacute;n 
        |  se utiliza para calcular la probabilidad de que ocurran dos o m&aacute;s eventos de manera conjunta (intersecci&oacute;n de eventos). Existen dos casos:
      .row.justify-content-center
        .col-lg-4.my-lg-0.my-3
          .bg17.p-4.brad.h-100
            .row.justify-content-start.mb-4
              p.col-lg-auto.mb-2.bg11.text-white.px-3
                b
                  | Eventos independientes
            p
              | Si los eventos no afectan la probabilidad del otro, la probabilidad conjunta de que ocurra AAA y BBB es:
            img.img-t.img-a(src='@/assets/template/images/cf3/85.svg')
        .col-lg-4.my-lg-0.my-3
          .bg7.text-white.p-4.brad.h-100
            .row.justify-content-start.mb-4
              p.col-lg-auto.mb-2.bg11.text-white.px-3
                b Eventos dependientes
            p Si los eventos est&aacute;n relacionados, la probabilidad conjunta se calcula: 
            img.img-t.img-a.mb-4(src='@/assets/template/images/cf3/86.svg')
            p Donde P(B|A) es la probabilidad de que ocurra B dado que ya ocurri&oacute; A.
        .col-lg-4.my-lg-0.my-3.j1
          img.img-t.img-a(src='@/assets/template/images/cf3/87.png')
    .separador-container
      .separador
    section
      #t_4_5.titulo-segundo.color-acento-botones
        h2 4.5&#x9;Teorema de Bayes
      p
        | El 
        b teorema de Bayes
        |  es una f&oacute;rmula que describe la probabilidad de que ocurra un evento AAA, dado que ya ha ocurrido otro evento BBB. Este teorema es &uacute;til cuando se tiene informaci&oacute;n condicional sobre la probabilidad de un evento y se desea actualizar esa probabilidad a la luz de nueva informaci&oacute;n.
      .row.justify-content-center.mb-4
        .col-lg-3.my-lg-0.my-3.j1
          img.img-t.img-a(src='@/assets/template/images/cf3/88.png')
        .col-lg-7.my-lg-0.my-3
          .bg25.brad.p-3.h-100
            p.mb-4
              b F&oacute;rmula:
            img.img-t.mb-4(src='@/assets/template/images/cf3/89.svg')
            p.mb-4
              b Donde:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  | P(B|A) es la probabilidad de A dado B.
              li.mb-3
                i.fas.fa-check.v1
                span
                  | P(A|B) es la probabilidad de B dado A.
              li.mb-3
                i.fas.fa-check.v1
                span
                  | P(A) y P(B) es la probabilidades marginales de A y B, respectivamente.
      .row.justify-content-start.mb-5
        .col-auto
          .list
            .list__item
              .list__item__icon
                img(src='@/assets/template/images/cf3/icon.svg' alt='')
            .list__txt.bgicon.brad.p-0.px-4.text-white
              h4.mb-0 Distribuci&oacute;n de probabilidades 
      p.mb-4
        | Una 
        b distribuci&oacute;n de probabilidades
        |  describe c&oacute;mo se distribuyen las probabilidades entre los diferentes resultados de un experimento aleatorio. Hay diferentes tipos de distribuciones de probabilidad, seg&uacute;n el tipo de variable (discreta o continua) y el contexto del problema.
      .row.justify-content-center
        .col-lg-4.my-lg-0.my-3
          .bg15.p-4.brad.h-100
            img.img-t.img-a.mb-4(src='@/assets/template/images/cf3/90.png')
            .row.justify-content-center.mb-4
              p.col-lg-auto.mb-2.bg26.px-3
                b
                  | Distribuci&oacute;n de probabilidad discreta
            p
              | Describe la probabilidad de que una variable aleatoria discreta tome ciertos valores. Ejemplos incluyen la distribuci&oacute;n binomial o la distribuci&oacute;n de Poisson.
        .col-lg-4.my-lg-0.my-3
          .bg15.p-4.brad.h-100
            img.img-t.img-a.mb-4(src='@/assets/template/images/cf3/91.png')
            .row.justify-content-center.mb-4
              p.col-lg-auto.mb-2.bg26.px-3
                b Distribuci&oacute;n de probabilidad discreta
            p
              | Describe la probabilidad de que una variable aleatoria continua caiga dentro de un rango de valores. Ejemplos incluyen la distribuci&oacute;n normal y la distribuci&oacute;n uniforme.
        .col-lg-4.my-lg-0.my-3.j1
          img.img-t.img-a(src='@/assets/template/images/cf3/92.png')
    .separador-container
      .separador
    section
      #t_4_6.titulo-segundo.color-acento-botones
        h2 4.6&#x9;Distribuci&oacute;n normal
      p.mb-5
        | La 
        b distribuci&oacute;n normal
        | , tambi&eacute;n conocida como campana de Gauss, es una de las distribuciones de probabilidad m&aacute;s importantes en estad&iacute;stica. Muchos fen&oacute;menos naturales y sociales siguen una distribuci&oacute;n normal. Est&aacute; completamente definida por dos par&aacute;metros: la media (&mu;\mu&mu;) y la desviaci&oacute;n est&aacute;ndar (&sigma;\sigma&sigma;).
      .row.justify-content-center
        .col-lg-8.my-lg-0.my-3
          .bg19.br-d.brad.p-3.h-100
            .row.justify-content-center
              .col-lg-3.my-lg-0.my-3.j1
                img.img-t.img-a(src='@/assets/template/images/cf3/93.png')
              .col-lg-9.my-lg-0.my-3
                div
                  p
                    b Caracter&iacute;sticas:
                  ul.lista-ul--color.fa-ul
                    li.mb-3
                      i.fas.fa-check.v1
                      span
                        | Es sim&eacute;trica respecto a la media.
                    li.mb-3
                      i.fas.fa-check.v1
                      span
                        | La media, la mediana y la moda son iguales.
                    li.mb-3
                      i.fas.fa-check.v1
                      span
                        | Aproximadamente el 68% de los datos se encuentra dentro de una desviaci&oacute;n est&aacute;ndar de la media, el 95% dentro de dos desviaciones est&aacute;ndar, y el 99.7% dentro de tres desviaciones est&aacute;ndar (regla emp&iacute;rica).
        .col-lg-2.my-lg-0.my-3.j1
          img.img-t.img-a(src='@/assets/template/images/cf3/94.png')
    .separador-container
      .separador
    section
      #t_4_7.titulo-segundo.color-acento-botones
        h2 4.7&#x9;Distribuci&oacute;n t-student
      .row.justify-content-center
        .col-lg-3.my-lg-0.my-3.j1
          img.img-t.img-a(src='@/assets/template/images/cf3/95.png')
        .col-lg-9.my-lg-0.my-3
          p
            | La 
            b distribuci&oacute;n t-student
            |  se utiliza cuando el tama&ntilde;o de la muestra es peque&ntilde;o y la desviaci&oacute;n est&aacute;ndar de la poblaci&oacute;n es desconocida. Es similar a la distribuci&oacute;n normal, pero con colas m&aacute;s gruesas, lo que refleja una mayor probabilidad de valores extremos.
          .bg17.br-d.brad.p-4
            p.mb-4
              b Aplicaciones:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                span
                  | La distribuci&oacute;n t se utiliza principalmente en pruebas de hip&oacute;tesis, como la prueba t, cuando se trabaja con muestras peque&ntilde;as (generalmente n<30n < 30n<30).
    .separador-container
      .separador
    section
      #t_4_8.titulo-segundo.color-acento-botones
        h2 4.8&#x9;Prueba de valor z
      p
        | La 
        b prueba de valor z
        |  es una t&eacute;cnica estad&iacute;stica que permite calcular la probabilidad de que una observaci&oacute;n en particular est&eacute; alejada de la media de un conjunto de datos, medida en unidades de desviaci&oacute;n est&aacute;ndar.
      .row.justify-content-center.mb-4
        .col-lg-4.my-lg-0.my-3
          .bg27.brad.p-3.h-100.j1
            img.img-t.img-a(src='@/assets/template/images/cf3/97.png')
        .col-lg-4.my-lg-0.my-3
          .bg25.brad.p-3.h-100
            p.mb-4
              b F&oacute;rmula:
            img.img-t.mb-4(src='@/assets/template/images/cf3/96.svg')
            p.mb-4
              b Donde:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                p
                  | x es el valor de la observaci&oacute;n.
              li.mb-3
                i.fas.fa-check.v1
                p
                  | &mu; es la media de la poblaci&oacute;n.
              li.mb-3
                i.fas.fa-check.v1
                p
                  | &sigma; es la desviaci&oacute;n est&aacute;ndar de la poblaci&oacute;n.
        .col-lg-4.my-lg-0.my-3
          .bg21.brad.p-3.h-100
            p.mb-4
              b Interpretaci&oacute;n:
            ul.lista-ul--color.fa-ul
              li.mb-3
                i.fas.fa-check.v1
                p
                  | Un valor z positivo indica que el valor est&aacute; por encima de la media.
              li.mb-3
                i.fas.fa-check.v1
                p
                  | Un valor z negativo indica que el valor est&aacute; por debajo de la media.
    .separador-container
      .separador
    section
      #t_4_9.titulo-segundo.color-acento-botones
        h2 4.9&#x9;Aplicaciones de la probabilidad en el an&aacute;lisis estad&iacute;stico
      p.mb-4
        | La probabilidad se utiliza en una amplia variedad de aplicaciones en el an&aacute;lisis estad&iacute;stico, desde la estimaci&oacute;n de probabilidades de eventos simples hasta la toma de decisiones basada en informaci&oacute;n incompleta o incierta. Algunos ejemplos de uso incluyen:
      .row.justify-content-center
        .col-lg-4.my-lg-0.my-3
          .bg15.p-4.brad.h-100
            img.img-t.img-a.mb-4(src='@/assets/template/images/cf3/98.png')
            .row.justify-content-center.mb-4
              p.col-lg-auto.mb-2.bg26.px-3
                b
                  | Pruebas de hip&oacute;tesis
            p
              | Se utilizan probabilidades para evaluar si una hip&oacute;tesis es v&aacute;lida o no, con base en la evidencia de los datos muestrales.
        .col-lg-4.my-lg-0.my-3
          .bg15.p-4.brad.h-100
            img.img-t.img-a.mb-4(src='@/assets/template/images/cf3/99.png')
            .row.justify-content-center.mb-4
              p.col-lg-auto.mb-2.bg26.px-3
                b Modelos predictivos
            p
              | La probabilidad es fundamental en modelos predictivos, como el an&aacute;lisis de regresi&oacute;n y las redes bayesianas, donde se calcula la probabilidad de resultados futuros con base en datos hist&oacute;ricos.
        .col-lg-4.my-lg-0.my-3
          .bg15.p-4.brad.h-100
            img.img-t.img-a.mb-4(src='@/assets/template/images/cf3/100.png')
            .row.justify-content-center.mb-4
              p.col-lg-auto.mb-2.bg26.px-3
                b
                  | Toma de decisiones
            p
              | En la teor&iacute;a de la decisi&oacute;n, se usan probabilidades para evaluar el riesgo y la incertidumbre en situaciones donde se deben tomar decisiones, como en inversiones o an&aacute;lisis de riesgos.


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
