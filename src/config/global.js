export default {
  global: {
    componenteFormativo:
      'Análisis estadístico de datos y generación de gráficos',
    descripcionCurso:
      'Este componente, explora los conceptos fundamentales y las herramientas necesarias para el análisis estadístico, cubriendo desde las medidas de tendencia central y dispersión hasta las probabilidades y gráficos estadísticos. Abarca técnicas precisas para calcular medias, varianza y coeficientes, y profundiza en la interpretación de gráficos y la redacción de informes estadísticos efectivos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Medidas de tendencia central',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Media aritmética',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Mediana',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Moda',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Media geométrica',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Media ponderada',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Media recortada',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Trimedia',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Medidas de dispersión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Rango',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Desviación media',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Varianza	11',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Desviación estándar',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Coeficiente de variación',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Rango intercuartílico',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Amplitud de variación',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Coeficiente de variación',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Medidas de posición',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Cuartiles',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Deciles',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Percentiles',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Rango intercuartílico',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Probabilidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Cálculo de probabilidades',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Probabilidades marginales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Regla de la adición',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Regla de la multiplicación',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Teorema de Bayes',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Distribución normal',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Distribución t-student',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Prueba de valor z',
            hash: 't_4_8',
          },
          {
            numero: '4.9',
            titulo:
              'Aplicaciones de la probabilidad en el análisis estadístico',
            hash: 't_4_9',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Gráficos estadísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos de gráficos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Elección del gráfico adecuado según el tipo de datos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Interpretación de gráficos estadísticos',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Informes estadísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Estructura de un informe estadístico',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Presentación de datos en un informe',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Lenguaje claro y conciso',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Tipos de informes estadísticos',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Elaboración de conclusiones y recomendaciones',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Errores comunes en los informes estadísticos',
            hash: 't_6_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Introducción a la estadística',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023c, septiembre 20). <i>Introducción a la estadística.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wMCDkknpUVw ',
    },
    {
      tema: 'Introducción a la probabilidad',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023a, marzo 24). <i>Introducción a la probabilidad.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rmx4jxS81vY',
    },
    {
      tema: 'Muestreo, distribución de medias muestrales',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022, 11 mayo). <i>Muestreo, distribución de medias muestrales.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5VK7hvyj760',
    },
    {
      tema: 'Principales elementos de la estadística',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022b, octubre 26). <i>Principales elementos de la estadística.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ad5gxB9PhKQ',
    },
    {
      tema: 'Principios básicos en el análisis de datos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023b, marzo 24). <i>Principios básicos en el análisis de datos.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=bprDNbxNyo4',
    },
    {
      tema: 'Teoría de probabilidades',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2024, 18 junio). <i>Teoría de probabilidades.</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=m-UUs_SwA9k',
    },
  ],
  glosario: [
    {
      termino: 'Amplitud de variación',
      significado:
        'Diferencia entre el valor máximo y mínimo de un conjunto de datos, utilizada como medida básica de dispersión.',
    },
    {
      termino: 'Coeficiente de variación',
      significado:
        'Medida de dispersión relativa que permite comparar la variabilidad de dos o más conjuntos de datos con unidades diferentes.',
    },
    {
      termino: 'Cuartiles',
      significado:
        'Valores que dividen un conjunto de datos ordenado en cuatro partes iguales, cada una representando el 25% de la distribución.',
    },
    {
      termino: 'Cálculo de probabilidades',
      significado:
        'Métodos y fórmulas utilizados para determinar la probabilidad de ocurrencia de un evento en un espacio muestral.',
    },
    {
      termino: 'Deciles',
      significado:
        'Valores que dividen un conjunto de datos en diez partes iguales, cada una representando el 10% de la distribución.',
    },
    {
      termino: 'Desviación estándar',
      significado:
        'Medida de dispersión que indica cuánto se alejan los datos en promedio de la media; calcula la variabilidad en una distribución.',
    },
    {
      termino: 'Desviación media',
      significado:
        'Promedio de las diferencias absolutas de cada valor con respecto a la media, utilizada para medir la dispersión de los datos.',
    },
    {
      termino: 'Distribución de probabilidades',
      significado:
        'Distribución que describe cómo se asignan las probabilidades a los diferentes valores de una variable aleatoria.',
    },
    {
      termino: 'Distribución normal',
      significado:
        'Distribución de probabilidad simétrica en forma de campana que describe cómo se distribuyen los datos alrededor de la media.',
    },
    {
      termino: 'Distribución t-student',
      significado:
        'Distribución de probabilidad utilizada en inferencia estadística, especialmente cuando el tamaño de la muestra es pequeño.',
    },
    {
      termino: 'Elección del gráfico adecuado',
      significado:
        'Proceso de seleccionar el tipo de gráfico más apropiado según el tipo de datos y el objetivo del análisis.',
    },
    {
      termino: 'Informe estadístico',
      significado:
        'Documento que presenta los resultados de un análisis estadístico de forma organizada, con conclusiones y recomendaciones.',
    },
    {
      termino: 'Interpretación de gráficos',
      significado:
        'Proceso de analizar gráficos estadísticos para extraer información y comprender patrones o tendencias en los datos.',
    },
    {
      termino: 'Media aritmética',
      significado:
        'Promedio de un conjunto de datos, calculado sumando todos los valores y dividiendo entre la cantidad de observaciones.',
    },
    {
      termino: 'Media geométrica',
      significado:
        'Media calculada multiplicando todos los valores y extrayendo la raíz enésima (según el número de valores), utilizada en datos con crecimiento proporcional.',
    },
    {
      termino: 'Media ponderada',
      significado:
        'Promedio que considera la importancia o peso de cada valor en el conjunto de datos, otorgando mayor relevancia a ciertos valores.',
    },
    {
      termino: 'Media recortada',
      significado:
        'Media calculada excluyendo los valores extremos (superiores e inferiores) de un conjunto de datos para reducir el impacto de los valores atípicos.',
    },
    {
      termino: 'Mediana',
      significado:
        'Valor central de un conjunto de datos ordenado; divide la distribución en dos partes iguales.',
    },
    {
      termino: 'Moda',
      significado:
        'Valor o categoría que aparece con mayor frecuencia en un conjunto de datos; útil en datos cualitativos y cuantitativos.',
    },
    {
      termino: 'Percentiles',
      significado:
        'Valores que dividen un conjunto de datos en 100 partes iguales; indican el porcentaje de datos que se encuentra por debajo de un valor específico.',
    },
    {
      termino: 'Probabilidades marginales',
      significado:
        'Probabilidades de ocurrencia de un solo evento en un espacio muestral, sin considerar la ocurrencia de otros eventos.',
    },
    {
      termino: 'Prueba de valor z',
      significado:
        'Prueba estadística para evaluar si una muestra pertenece a una población conocida o para comparar dos medias de poblaciones cuando se conoce la desviación estándar.',
    },
    {
      termino: 'Rango',
      significado:
        'Diferencia entre el valor máximo y mínimo en un conjunto de datos; medida sencilla de dispersión.',
    },
    {
      termino: 'Rango intercuartílico',
      significado:
        'Diferencia entre el tercer y el primer cuartil de un conjunto de datos; mide la dispersión en la parte central de la distribución.',
    },
    {
      termino: 'Regla de la adición',
      significado:
        'Regla de probabilidad que permite calcular la probabilidad de que ocurra al menos uno de varios eventos mutuamente excluyentes.',
    },
    {
      termino: 'Regla de la multiplicación',
      significado:
        'Regla de probabilidad que permite calcular la probabilidad conjunta de que ocurran dos o más eventos independientes.',
    },
    {
      termino: 'Teorema de Bayes',
      significado:
        'Teorema que permite actualizar la probabilidad de un evento con base en nueva evidencia o información; utilizado en inferencia estadística.',
    },
    {
      termino: 'Trimedia',
      significado:
        'Medida de tendencia central calculada a partir de los cuartiles, que combina la mediana con otros valores para una representación robusta de los datos.',
    },
    {
      termino: 'Tipos de gráficos',
      significado:
        'Diferentes formas de representación visual de datos, como histogramas, gráficos de barras y gráficos circulares, cada uno adecuado para tipos específicos de datos.',
    },
    {
      termino: 'Varianza',
      significado:
        'Medida de dispersión que indica la variabilidad de los datos respecto a la media; es el cuadrado de la desviación estándar.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'Representación gráfica de los datos para facilitar la interpretación de patrones y tendencias en los análisis estadísticos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Batanero, C. (2001). Didáctica de la estadística. Granada: Universidad de Granada.',
    },
    {
      referencia:
        'Cochran, W. G. (1980). Técnicas de muestreo (3.ª ed.). México: CECSA.',
    },
    {
      referencia:
        'Escobar Mercado, M., Fernández Macías, E., & Bernardi, F. (2012). Análisis de datos con Stata (2ª ed.). Centro de Investigaciones Sociológicas. Recuperado de Academia.',
    },
    {
      referencia:
        'Hernández Martín, Z. (2018). Métodos de análisis de datos: apuntes. Universidad de La Rioja. Recuperado de Universidad de la Rioja.',
    },
    {
      referencia:
        'Hernández Sampieri, R., Fernández Collado, C., & Baptista Lucio, P. (2014). Metodología de la investigación (6.ª ed.). México: McGraw-Hill.',
    },
    {
      referencia:
        'Martínez, J. (2004). Muestreo estadístico. Madrid: Alianza Editorial.',
    },
    {
      referencia:
        'Montgomery, D. C., & Runger, G. C. (2015). Probabilidad y estadística aplicada a la ingeniería (5.ª ed.). México: McGraw-Hill.',
    },
    {
      referencia:
        'Obando-Bastidas, J. A., & Castellanos Sánchez, M. T. (2021). Gráficos estadísticos: guía práctica para estadística descriptiva. Universidad Cooperativa de Colombia. Recuperado de Repositorio UCC.',
    },
    {
      referencia:
        'Panteleeva, O. V. (2005). Fundamentos de Probabilidad y Estadística. UAEM.',
    },
    {
      referencia:
        'Ramos Calcina, A., Villasante Saravia, F. H., & Álvarez Rozas, T. P. (2023). Estadística descriptiva con R (2ª ed.). Universidad Nacional del Altiplano. Recuperado de Repositorio UNAP.',
    },
    {
      referencia:
        'Scheaffer, R. L., Mendenhall, W., & Ott, R. L. (2007). Elementos de muestreo (6.ª ed.). México: Thomson.',
    },
    {
      referencia:
        'Triola, M. F. (2018). Estadística (12.ª ed.). México: Pearson Educación.',
    },
    {
      referencia:
        'Walpole, R. E., Myers, R. H., Myers, S. L., & Ye, K. (2012). Probabilidad y estadística para ingenieros (9.ª ed.). México: Pearson Educación.',
    },
  ],
}
