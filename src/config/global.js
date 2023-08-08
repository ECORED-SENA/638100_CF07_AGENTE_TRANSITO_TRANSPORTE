export default {
  global: {
    componenteFormativo: 'Procedimientos operativos de tránsito y transporte',
    descripcionCurso:
      'Se presenta la descripción de procedimientos tan importantes como la realización de puestos de control y la aplicación de la norma en tránsito y/o transporte a través de la generación de órdenes de comparendos o informes de infracciones de transporte, aclarando los protocolos establecidos y las causales de inmovilización, entre otras infracciones a controlar.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
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
        titulo: 'Instalación de puestos de control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos, elementos, características y tipos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procedimiento para la instalación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Elementos de protección y seguridad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Aplicación de la norma en tránsito y transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Requerir preventivamente presuntos implicados en sucesos de incumplimiento a las normas de tránsito',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Señales corporales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Procedimientos de registro en escenarios de tránsito',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Orden de comparendo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Infracciones al tránsito',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Infracciones al transporte',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos para la aplicación de órdenes de comparendo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Inmovilización de vehículos por infracciones al tránsito y al transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Causales de inmovilización en el transporte',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procedimiento de inmovilización',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Equipos y plataformas tecnológicas para el tránsito y transporte',
        desarrolloContenidos: true,
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
      tema: 'Aplicación de la norma en tránsito y transporte',
      referencia:
        'Congreso de Colombia. (1993). Ley 105 de 1993. Por la cual se dictan disposiciones básicas sobre el transporte, se redistribuyen competencias y recursos entre la Nación y las Entidades Territoriales, se reglamenta la planeación en el sector transporte y se dictan otras disposiciones. 30 de septiembre de 1993. D.O. No. 41158.',
      tipo: 'Ley',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0105_1993.html',
    },
    {
      tema: 'Infracciones al transporte',
      referencia:
        'Ministerio de Transporte. (2019). Resolución 4247 de 2019. Por la cual se adopta el formato para el Informe Único de Infracciones al Transporte. 12 de septiembre de 2019.',
      tipo: 'Resolución',
      link: 'https://www.runt.com.co/node/423896',
    },
    {
      tema: 'Aplicación de la norma en tránsito y transporte',
      referencia:
        'Ministerio de Transporte. (2012). Resolución 0011268 de 2012. Por la cual se adopta el nuevo Informe Policial de Accidentes de Tránsito (IPAT), su Manual de Diligenciamiento y se dictan otras disposiciones. 6 de diciembre de 2012.',
      tipo: 'Resolución',
      link: 'https://web.mintransporte.gov.co/jspui/handle/001/5348',
    },
  ],
  glosario: [
    {
      termino: 'Actividad transportadora',
      significado:
        'conjunto organizado de operaciones tendientes a ejecutar el traslado de personas o cosas, separada o conjuntamente, de un lugar a otro, utilizando uno o varios modos, de conformidad con las autorizaciones expedidas por las autoridades competentes.',
    },
    {
      termino: 'Comparendo',
      significado:
        'orden formal de notificación para que el presunto contraventor o implicado se presente ante la autoridad de tránsito por la comisión de una infracción.',
    },
    {
      termino: 'EPP',
      significado: 'Elementos de Protección Personal.',
    },
    {
      termino: 'Infracción',
      significado:
        'transgresión o violación de una norma de tránsito. Habrá dos tipos de infracciones: simple y compleja. Será simple cuando se trate de violación a la mera norma. Será compleja si se produce un daño material.',
    },
    {
      termino: 'Inmovilización',
      significado: 'suspensión temporal de la circulación de un vehículo.',
    },
    {
      termino: 'Transporte privado',
      significado:
        'es aquel que tiende a satisfacer necesidades de movilización de personas o cosas dentro del ámbito de las actividades exclusivas de las personas naturales o jurídicas.',
    },
    {
      termino: 'Transporte público',
      significado:
        'industria encaminada a garantizar la movilización de personas o cosas, por medio de vehículos apropiados, en condiciones de libertad de acceso, calidad y seguridad de los usuarios, sujeto a una contraprestación económica.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1996). Ley 336 de 1996. Por la cual se adopta el estatuto nacional de transporte. 20 de septiembre de 1996. D.O. No. 42948.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=346',
    },
    {
      referencia:
        'Congreso de Colombia. (2002). Ley 769 de 2002. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones.  6 de julio de 2002. D.O. No. 52204.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      referencia:
        'Ministerio de Transporte (2015). Manual de señalización vial. Dispositivos uniformes para la regulación del tránsito en calles, carreteras y ciclorrutas de Colombia.',
      link:
        'https://www.mintransporte.gov.co/documentos/29/manuales-de-senalizacion-vial/',
    },
    {
      referencia:
        'Ministerio de Transporte. (2010). Resolución 3027 de 2010. Por la cual se actualiza la codificación de las infracciones de tránsito, de conformidad con lo establecido en la Ley 1383 de 2010, se adopta el Manual de Infracciones y se dictan otras disposiciones. 26 de julio de 2010.',
      link:
        'https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Resolucion/30038669',
    },
    {
      referencia:
        'Ministerio de Transporte. (2020) Resolución 20203040003785 de 2020. Por la cual se adecúa la reglamentación para la adopción del Informe Único de Infracciones al Transporte “IUIT” y se dictan otras disposiciones”. 26 de mayo de 2020.',
      link:
        'http://www.nuevalegislacion.com/files/susc/cdj/conc/r_mt_3785_20.pdf',
    },
    {
      referencia:
        'Presidencia de Colombia. (2015). Decreto 1079 de 2015. Por medio del cual se expide el Decreto único reglamentario del sector transporte. 26 de mayo de 2015.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889#:~:text=Tiene%20por%20objeto%20la%20ejecuci%C3%B3n,por%20el%20Ministerio%20de%20Transporte',
    },
    {
      referencia:
        'Ramos Enríquez, H., & Quiroga Amaya, L. (2017). Investigación de Accidentes de Tránsito en Colombia. Imprenta Nacional.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lino Andrés Quiroga Amaya',
          cargo: 'Experto temático',
          centro:
            'Sena - Regional Distrito CapitaL Grupo Administrativo Intercentros CEET - Centro de Tecnologías del Transporte',
        },
        {
          nombre: 'Maribel Avellaneda Nieves',
          cargo: 'Diseñadora instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesora metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
