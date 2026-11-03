export default {
  global: {
    Name: 'Perfilamiento estratégico',
    Description:
      'Este componente desarrolla los fundamentos para analizar prospectos y construir perfiles de clientes potenciales mediante herramientas y metodologías que apoyan la prospectación comercial. Aborda la calificación de prospectos, el <em>lead scoring</em>, el embudo de conversión, el <em>buyer persona</em> y las variables de perfil, favoreciendo la toma de decisiones comerciales sustentadas en información objetiva.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        titulo: 'Calificación de prospectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Criterios de priorización',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Valoración de prospectos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Potencial de conversión',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: '<em>Lead scoring</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación de prospectos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Criterios y variables de valoración',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Priorización comercial',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Embudo de conversión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Etapas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Relación entre prospectación y conversión comercial',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Técnicas de prospectación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Identificación de oportunidades',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Seguimiento comercial',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estrategias de contacto y relacionamiento',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Toma de decisiones comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Análisis de prospectos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Criterios de selección',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Priorización estratégica de clientes potenciales',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: '<em>Buyer persona</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Características',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Importancia estratégica',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Motivaciones',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Frustraciones',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Objetivos del cliente',
            hash: 't_6_6',
          },
          {
            numero: '6.7',
            titulo: 'Diferencias entre cliente ideal y público objetivo',
            hash: 't_6_7',
          },
          {
            numero: '6.8',
            titulo: 'Herramientas digitales de perfilamiento de clientes',
            hash: 't_6_8',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Metodologías de <em>buyer persona</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Estructura',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Componentes',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Variables de análisis',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Construcción de perfiles',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Representación de arquetipos',
            hash: 't_7_5',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Variables del perfil del cliente',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Demográficas',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Motivacionales',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Conductuales y psicográficas',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: '<em>Pain points</em>',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Intereses',
            hash: 't_8_5',
          },
          {
            numero: '8.6',
            titulo: 'Expectativas',
            hash: 't_8_6',
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: '<em>Buyer persona</em>',
      significado:
        'Representación del cliente ideal construida mediante el análisis de información sobre características, necesidades, comportamientos y objetivos.',
    },
    {
      termino: 'Embudo de conversión',
      significado:
        'Modelo que representa el recorrido del prospecto desde el primer contacto hasta la conversión en cliente.',
    },
    {
      termino: '<em>Lead scoring</em>',
      significado:
        'Metodología que asigna puntuaciones a los prospectos para establecer prioridades comerciales según criterios definidos.',
    },
    {
      termino: '<em>Pain points</em>',
      significado:
        'Problemas, necesidades o dificultades que motivan al cliente potencial a buscar una solución.',
    },
    {
      termino: 'Perfil del cliente',
      significado:
        'Conjunto de características que describen a un cliente potencial y apoyan la toma de decisiones comerciales.',
    },
    {
      termino: 'Priorización comercial',
      significado:
        'Proceso de ordenar prospectos según su potencial para optimizar la gestión de oportunidades comerciales.',
    },
    {
      termino: 'Prospectación comercial',
      significado:
        'Proceso de identificar, analizar y gestionar clientes potenciales para generar oportunidades de negocio.',
    },
    {
      termino: 'Prospecto',
      significado:
        'Persona o empresa que presenta características para convertirse en un posible cliente de la organización.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de clasificar clientes potenciales en grupos con características y necesidades similares.',
    },
    {
      termino: 'Variables de perfil',
      significado:
        'Aspectos demográficos, motivacionales, conductuales y psicográficos utilizados para caracterizar clientes potenciales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Amazon Ads. (s. f.). ¿Qué es el embudo de marketing? Cómo funciona, etapas y ejemplos.',
      link: 'https://advertising.amazon.com/es-co/library/guides/marketing-funnel',
    },
    {
      referencia:
        'HubSpot. (2023). <em>Data driven</em>: Qué es, importancia y cómo implementar este enfoque.',
      link: 'https://blog.hubspot.es/marketing/decisiones-data-driven',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje. (s. f.). Marketing digital. Ecosistema de Recursos Educativos Digitales SENA.',
      link: 'https://zajuna.sena.edu.co/Repositorio/Titulada/institution/SENA/Ventas/632201/Contenido/OVA/CF5/index.html',
    },
    {
      referencia:
        'Universidad de Cundinamarca. (2025). Plantilla y guía: Cómo hacer un <em>buyer persona</em> paso a paso.',
      link: 'https://repositorio.ucundinamarca.edu.co/bitstreams/cdaf0031-36bd-4300-a8ba-fe85eb4590a1/download',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
