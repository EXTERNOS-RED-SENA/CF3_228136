<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Gráficos estadísticos

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center.bg7.p-4.brad.text-white
          .col-lg-auto
            img.img-a.img-t(src='@/assets/template/images/cf3/101.png' alt='')
          .col.pt-lg-0.pt-md-4
            p.mb-0
              | Los gr&aacute;ficos estad&iacute;sticos son representaciones visuales de datos que permiten observar tendencias, patrones y relaciones dentro de un conjunto de datos. Son herramientas poderosas para simplificar y comunicar resultados complejos de manera clara y concisa.
    .separador-container
      .separador
    section
      #t_5_1.titulo-segundo.color-acento-botones
        h2 5.1&#x9;Tipos de gr&aacute;ficos
      p
        | Existen varios tipos de gr&aacute;ficos que se pueden utilizar seg&uacute;n el tipo de datos y el objetivo del an&aacute;lisis.
      .titulo-sexto.color-acento-contenido.aos-init.mt-5
        h5 Tabla 1. 
        span Tipos de gr&aacute;ficos
      table.table
        thead
          tr.text-center
            th.bg-head.py-3 Gr&aacute;fico
            th.bg-head.py-3 Descripci&oacute;n
            th.bg-head.py-3 Caracter&iacute;sticas
            th.bg-head.py-3 Aplicaciones
        tbody
          tr
            th(rowspan='3') Histograma 
            td(rowspan='3')
              | Representaci&oacute;n gr&aacute;fica de la distribuci&oacute;n de una variable cuantitativa, donde la altura de cada barra representa la frecuencia en intervalos o clases.
            td  - Para variables cuantitativas (discretas o continuas).
            td - Distribuci&oacute;n de edades en una poblaci&oacute;n. 
          tr
            td  - Muestra la forma de la distribuci&oacute;n (sim&eacute;trica, sesgada, multimodal).
            td - Distribuci&oacute;n de ingresos en una empresa. 
          tr
            td - Permite visualizar la concentraci&oacute;n de datos en ciertos rangos.
            td
          tr
            th(rowspan='3') Gr&aacute;fico de barras 
            td(rowspan='3')
              | Representa datos cualitativos o categ&oacute;ricos mediante barras donde la altura indica la frecuencia o porcentaje de cada categor&iacute;a.
            td  - Para variables cualitativas (nominales u ordinales).
            td  - Preferencias de consumidores para marcas.
          tr
            td  - Las barras no se tocan entre s&iacute;.
            td  - Cantidad de personas en diferentes grupos demogr&aacute;ficos.
          tr
            td  - Ideal para comparar varias categor&iacute;as.
            td
          tr
            td Diagrama de tallos y hojas
            td
              | El diagrama de tallos y hojas es una representaci&oacute;n gr&aacute;fica de datos num&eacute;ricos que muestra la distribuci&oacute;n y la forma de los datos, dividi&eacute;ndolos en &quot;tallos&quot; (d&iacute;gitos principales) y &quot;hojas&quot; (d&iacute;gitos restantes). Esto permite ver cada valor individual al tiempo que se muestra la estructura general de la distribuci&oacute;n.
            td
              | - Se utiliza principalmente para datos num&eacute;ricos, especialmente con valores de dos o m&aacute;s d&iacute;gitos.
              br
              |                             - Cada &quot;tallo&quot; representa una categor&iacute;a o rango de valores principales.
              br
              |                             - Cada &quot;hoja&quot; representa la parte final de cada dato, permitiendo visualizar valores individuales.
              br
              |                             - Es una herramienta &uacute;til para ver la dispersi&oacute;n y concentraci&oacute;n de datos, similar a un histograma pero sin perder el detalle de cada valor.
            td
              | - An&aacute;lisis exploratorio de datos en peque&ntilde;as muestras.
              br
              |                             - Visualizaci&oacute;n de distribuciones en contextos educativos y estad&iacute;sticos b&aacute;sicos.
              br
              |                             - Comparaci&oacute;n r&aacute;pida de dos conjuntos de datos en un mismo diagrama (usando dos columnas de hojas en cada lado de un tallo com&uacute;n).
              br
              |                             - &Uacute;til para detectar patrones, tendencias y valores at&iacute;picos en datos num&eacute;ricos.
          tr
            th(rowspan='3') Gr&aacute;fico circular 
            td(rowspan='3')
              | Tambi&eacute;n llamado gr&aacute;fico de pastel muestra la proporci&oacute;n o porcentaje de cada categor&iacute;a respecto al total mediante sectores proporcionales.
            td  - Para datos cualitativos nominales.
            td  - Participaci&oacute;n de mercado de empresas.
          tr
            td  - Ideal para proporciones o porcentajes.
            td  - Distribuci&oacute;n de votos en una elecci&oacute;n.
          tr
            td  - No adecuado para categor&iacute;as con peque&ntilde;as diferencias en proporciones.
            td
          tr
            th(rowspan='3') Pol&iacute;gono de frecuencias
            td(rowspan='3')
              | Gr&aacute;fico de l&iacute;neas que conecta los puntos medios de los intervalos de un histograma, &uacute;til para observar la forma de la distribuci&oacute;n de los datos de manera continua y comparar diferentes conjuntos de datos.
            td  - Para variables cuantitativas continuas.
            td  - Comparar puntuaciones en ex&aacute;menes.
          tr
            td  - Conecta puntos medios de intervalos de clase.
            td  - Evoluci&oacute;n de la temperatura en diferentes horas del d&iacute;a.
          tr
            td  - Puede superponerse con otros pol&iacute;gonos para comparar distribuciones.
            td
          tr
            th(rowspan='3') Ojiva 
            td(rowspan='3')
              | Representaci&oacute;n gr&aacute;fica de la frecuencia acumulada o relativa acumulada de los datos, mostrando c&oacute;mo se acumulan las frecuencias al aumentar los valores de la variable.
            td  - Para variables cuantitativas.
            td  - Proporci&oacute;n acumulada de empleados con ciertos ingresos.
          tr
            td  - Los puntos representan frecuencias acumuladas conectadas por l&iacute;neas.
            td  - Estudiantes con calificaciones bajo cierto valor.
          tr
            td  - Permite calcular percentiles y cuartiles visualmente.
            td
          tr
            th(rowspan='3') Diagrama de dispersi&oacute;n
            td(rowspan='3')
              | Muestra la relaci&oacute;n entre dos variables cuantitativas mediante puntos (x, y), &uacute;til para observar correlaciones o tendencias entre las variables.
            td  - Para relaciones entre dos variables cuantitativas.
            td  - Relaci&oacute;n entre peso y altura.
          tr
            td  - Permite identificar tendencias lineales o no lineales.
            td  - Relaci&oacute;n entre tiempo de estudio y rendimiento acad&eacute;mico.
          tr
            td  - &Uacute;til para detectar relaciones directas, inversas o la ausencia de relaci&oacute;n.
            td
          tr
            th(rowspan='3') Boxplot (Diagrama de caja y bigotes) 
            td(rowspan='3')
              | Gr&aacute;fico que representa la dispersi&oacute;n de un conjunto de datos, mostrando el rango intercuart&iacute;lico, la mediana y los valores at&iacute;picos mediante una caja y &quot;bigotes&quot;.
            td  - Resume la distribuci&oacute;n de datos y muestra valores at&iacute;picos.
            td  - Comparar ingresos entre departamentos.
          tr
            td  - Muestra cuartiles y mediana, indicando simetr&iacute;a o asimetr&iacute;a.
            td  - Evaluar la dispersi&oacute;n de puntuaciones en un examen.
          tr
            td  - Permite comparar distribuciones entre grupos.
            td
      figcaption.border.border-secundary.border-start-0.border-end-0.border-2.mt-2
        p.text-center.text-dark.mb-0 Fuente: OIT, 2024.
    .separador-container
      .separador
    section
      #t_5_2.titulo-segundo.color-acento-botones
        h2 5.2&#x9;Elecci&oacute;n del gr&aacute;fico adecuado seg&uacute;n el tipo de datos
      p
        | La elecci&oacute;n del gr&aacute;fico adecuado depende del tipo de datos y del objetivo del an&aacute;lisis. Algunas pautas generales para seleccionar el gr&aacute;fico correcto son:
      .row.justify-content-center
        .col-lg-8.my-3
          .bg15.brad.br-d.h-100.p-4
            .row.justify-content-center
              .col-lg-3.my-lg-0.my-3.j1
                img.img-t.img-a(src='@/assets/template/images/cf3/102.png')
              .col-lg-9.my-lg-0.my-3.j1
                div
                  ul.lista-ul--color.fa-ul
                    li.mb-3
                      i.fas.fa-check.v1
                      span.mb-0
                        b Datos cualitativos:
                        |  Gr&aacute;fico de barras o gr&aacute;fico circular.
                    li.mb-3
                      i.fas.fa-check.v1
                      span.mb-0
                        b Datos cuantitativos continuos:
                        |  Histograma, pol&iacute;gono de frecuencias, ojiva.
                    li.mb-3
                      i.fas.fa-check.v1
                      span.mb-0
                        b Comparaci&oacute;n de distribuciones:
                        |  Boxplot, histograma.
                    li.mb-3
                      i.fas.fa-check.v1
                      span.mb-0
                        b Relaci&oacute;n entre dos variables:
                        |  Diagrama de dispersi&oacute;n.
        .col-lg-4.my-3.j1
          div
            img.img-a.img-t(src='@/assets/template/images/cf3/103.png' alt='')
    .separador-container
      .separador
    section
      #t_5_3.titulo-segundo.color-acento-botones
        h2 5.3&#x9;Interpretaci&oacute;n de gr&aacute;ficos estad&iacute;sticos
      p.mb-5
        | La correcta 
        b interpretaci&oacute;n
        |  de los gr&aacute;ficos estad&iacute;sticos sirve para extraer conclusiones v&aacute;lidas de los datos. Al interpretar gr&aacute;ficos, es importante prestar atenci&oacute;n a:
      .row.justify-content-center
        .col-lg-4.my-lg-0.my-3.j1
          div
            img.img-a.img-t(src='@/assets/template/images/cf3/104.png' alt='')
        .col-lg-8.my-lg-0.my-3
          .bg7.brad.p-4
            .bgw.p-3.brad.mb-3
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span.mb-0
                    b Distribuci&oacute;n:
                    |  Observar si los datos son sim&eacute;tricos, sesgados o multimodales.
            .bgw.p-3.brad.mb-3
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span.mb-0
                    b Tendencias:
                    |  Identificar patrones ascendentes, descendentes o c&iacute;clicos en los datos.
            .bgw.p-3.brad.mb-3
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span.mb-0
                    b Relaciones:
                    |  En diagramas de dispersi&oacute;n, buscar correlaciones o asociaciones entre las variables.
            .bgw.p-3.brad
              ul.lista-ul--color.fa-ul
                li.mb-3
                  i.fas.fa-check.v1
                  span.mb-0
                    b Valores at&iacute;picos:
                    |  Detectar puntos que se alejan significativamente del resto del conjunto de datos (particularmente en boxplots).



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
