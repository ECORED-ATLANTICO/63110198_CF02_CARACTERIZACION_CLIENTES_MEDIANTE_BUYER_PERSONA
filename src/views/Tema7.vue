<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Metodologías de #[em buyer persona]
    
    img(data-aos="fade-up", src="@/assets/curso/tema7/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 Las metodologías de #[em buyer persona] reúnen los procedimientos utilizados para construir perfiles representativos de clientes potenciales a partir del análisis sistemático de información.  
    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema7/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estas metodologías permiten organizar los datos recopilados, identificar patrones de comportamiento y representar las características más relevantes del cliente ideal. Su aplicación favorece la elaboración de perfiles consistentes que apoyan la toma de decisiones en marketing, comunicación y ventas. 

    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Estructura

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p La estructura de una metodología de buyer persona corresponde a la organización de los elementos que conforman el perfil del cliente potencial. Aunque cada organización puede adaptar esta estructura a sus necesidades, generalmente incluye información relacionada con la identificación del perfil, las características generales del cliente, sus motivaciones, objetivos, necesidades, dificultades y comportamientos durante el proceso de compra.  
        .bg-primario-p5.p-4.rounded-4.py-3
          p.mb-0 Una estructura organizada facilita el análisis de la información y permite que diferentes áreas de la organización utilicen el mismo referente para diseñar estrategias comerciales y de comunicación,  asimismo, favorece la actualización del perfil cuando cambian las condiciones del mercado o evolucionan las necesidades de los clientes. En el ejemplo del acápite “7.5 Representación de arquetipos” podrá ver también, como la estructura definida conduce a la presentación de la información de dicho ejemplo. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema7/3.png", alt="")

    .row.justify-content-center.z-2
      .col-xl-10.bg-terciario-t5.rounded-4.p-4.py-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 Una estructura organizada facilita la construcción de perfiles consistentes y útiles para la toma de decisiones comerciales. 
    
    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Componentes

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Los componentes del buyer persona corresponden a los elementos específicos que describen al cliente potencial, cada componente aporta información que permite comprender diferentes dimensiones del perfil y facilita la elaboración de estrategias comerciales centradas en las necesidades del cliente.  
        .bg-terciario-t5.p-4.rounded-4.py-3
          p.mb-0 Entre los componentes más utilizados se encuentran los datos generales, las características demográficas, la actividad laboral, las motivaciones, los objetivos, las frustraciones, los hábitos de consumo, los canales de comunicación preferidos y los criterios que influyen en la decisión de compra. La integración de estos elementos proporciona una visión amplia y coherente del cliente ideal. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Componentes del #[em buyer persona]

    p.mb-5 La construcción de un #[em buyer persona] integra diferentes tipos de información que permiten comprender las características, necesidades y comportamiento del cliente representativo. Explore sus principales componentes. 

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.z-2
      .col-lg-8
        .bg-slider-2.p-4
          SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
            div
              h5.mb-4 Datos generales 
              p Información básica que permite identificar y contextualizar al cliente representativo, como edad, ubicación, estado civil u otros datos relevantes. 
              p.mb-0 #[strong Utilidad]: facilita la construcción inicial del perfil y permite establecer características generales del cliente. 
            div
              h5.mb-4 Actividad u ocupación 
              p Describe el rol, profesión, cargo o actividad que desempeña y el contexto en el que desarrolla sus actividades. 
              p.mb-0 #[strong Utilidad]: permite comprender su contexto profesional y relacionarlo con sus necesidades y decisiones de compra. 
            div
              h5.mb-4 Motivaciones 
              p Identifica los factores, intereses o razones que impulsan sus decisiones y orientan su comportamiento. 
              p.mb-0 #[strong Utilidad]: contribuye al diseño de propuestas de valor pertinentes y mensajes que conecten con sus intereses. 
            div
              h5.mb-4 Objetivos 
              p Define los resultados, necesidades o metas que espera alcanzar mediante la adquisición de un producto o servicio. 
              p.mb-0 #[strong Utilidad]: orienta la comunicación comercial y permite enfocar la oferta hacia resultados relevantes para el cliente. 
            div
              h5.mb-4 Frustraciones 
              p Reconoce los problemas, dificultades, obstáculos o situaciones que enfrenta en relación con sus necesidades. 
              p.mb-0 #[strong Utilidad]: permite anticipar necesidades y posibles objeciones, facilitando la presentación de soluciones más adecuadas. 
            div
              h5.mb-4 Comportamiento 
              p Describe cómo busca información, interactúa con las opciones disponibles, evalúa alternativas y toma decisiones. 
              p.mb-0 #[strong Utilidad]: facilita la selección de estrategias de contacto, comunicación y seguimiento acordes con su comportamiento. 
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema7/5.png", alt="" data-aos="zoom-in-down")

    separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.3 Variables de análisis

    .fullwidth-bg.fullwidth-bg--5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema7/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Las variables de análisis corresponden a los aspectos que se examinan para comprender el comportamiento y las características del cliente potencial durante la construcción del buyer persona, estas variables permiten recopilar información organizada y comparable, facilitando la elaboración de perfiles que reflejen las necesidades y expectativas del mercado objetivo.
        .bg-contenido-a10.p-4.rounded-4.py-3
          p.mb-0 Las organizaciones pueden definir diferentes variables según sus objetivos comerciales; sin embargo, es recomendable integrar información relacionada con aspectos demográficos, motivacionales, conductuales, psicográficos y comerciales; el análisis conjunto de estas variables proporciona una visión más completa del cliente potencial y contribuye a fundamentar las decisiones de marketing y ventas. 

    .row.justify-content-center.mb-4.z-2.align-items-stretch
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .bg-primario-p5.rounded-4.shadow-sm.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3
              figure
                img.mb-4.mb-lg-0.imgw-60(src="@/assets/curso/tema7/7.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 #[strong Demográficas.]	Edad, ubicación, nivel educativo, ocupación; sirven para determinar las características generales del cliente potencial. 
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .bg-primario-p5.rounded-4.shadow-sm.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3
              figure
                img.mb-4.mb-lg-0.imgw-60(src="@/assets/curso/tema7/7.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 #[strong Conductuales.]	Hábitos de compra, canales de información, frecuencia de interacción; sirven para determinar el comportamiento durante el proceso comercial.  
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .bg-primario-p5.rounded-4.shadow-sm.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3
              figure
                img.mb-4.mb-lg-0.imgw-60(src="@/assets/curso/tema7/7.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 #[strong Motivacionales.] Necesidades, intereses, expectativas y aspiraciones; sirven para determinar los factores que impulsan la decisión de compra.  
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .bg-primario-p5.rounded-4.shadow-sm.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3
              figure
                img.mb-4.mb-lg-0.imgw-60(src="@/assets/curso/tema7/7.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 #[strong Psicográficas.]	Valores, estilo de vida y preferencias; sirven para determinar la forma de pensar y actuar del cliente potencial.  
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .bg-primario-p5.rounded-4.shadow-sm.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3
              figure
                img.mb-4.mb-lg-0.imgw-60(src="@/assets/curso/tema7/7.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 #[strong Comerciales.] Capacidad de compra, nivel de interés y relación con la organización; sirven para determinar el potencial para establecer una relación comercial.    
 
    .row.justify-content-center.z-2
      .col-xl-10.bg-terciario-t5.rounded-4.p-4.py-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 Las variables de análisis permiten transformar información dispersa en un perfil organizado que facilita la comprensión del cliente potencial. 

    separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.4 Construcción de perfiles

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p La construcción de perfiles consiste en integrar la información obtenida mediante el análisis de las diferentes variables para representar de manera organizada a un cliente potencial. Este proceso requiere analizar los datos recopilados, identificar patrones comunes y consolidar las características más representativas del segmento de mercado estudiado. 
        .bg-terciario-t5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 El perfil construido debe ser coherente, comprensible y útil para orientar la toma de decisiones comerciales. Por esta razón, es recomendable fundamentar cada uno de sus componentes en información verificable, evitando basar el perfil en percepciones personales o supuestos que puedan afectar la precisión del análisis.
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema7/8.png", alt="")
    
    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        .bg-secundario-s20.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p #[strong NovaMarket S.A.S.] recopila información proveniente de entrevistas, formularios digitales, registros del CRM y analítica web. Posteriormente, el equipo de marketing identifica características comunes entre los clientes potenciales y construye perfiles que describen sus objetivos, motivaciones, necesidades y hábitos de compra, estos perfiles sirven como referencia para el diseño de campañas comerciales y contenidos especializados.

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Proceso para construir un buyer persona

    p.mb-5 La construcción de un buyer persona requiere organizar e interpretar información sobre el cliente hasta convertirla en un perfil representativo. Recorra cada etapa del proceso. 

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema7/12.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-slider-2.p-4
          SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
            div
              h5.mb-4 Recopilar información 
              p.mb-0 Obtener datos relevantes del cliente a partir de diferentes fuentes, considerando información demográfica, profesional, comercial y de comportamiento. 
            div
              h5.mb-4 Organizar los datos 
              p.mb-0 Clasificar y estructurar la información recopilada para facilitar su consulta, comparación y posterior análisis. 
            div
              h5.mb-4 Analizar variables 
              p.mb-0 Examinar los datos para reconocer relaciones entre características, necesidades, intereses y comportamientos del cliente. 
            div
              h5.mb-4 Identificar patrones 
              p.mb-0 Reconocer tendencias, coincidencias y comportamientos comunes entre los datos analizados que permitan comprender mejor al grupo de clientes. 
            div
              h5.mb-4 Construir el perfil 
              p.mb-0 Integrar la información relevante para definir las características, necesidades, motivaciones y comportamientos que representan al buyer persona. 

    .bg-contenido-a10.p-4.rounded-4.py-3
      p.mb-0 Este proceso permite transformar datos dispersos en un perfil estructurado que facilita la comprensión del cliente y orienta las decisiones comerciales. 

    separador
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.5 Representación de arquetipos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p La representación de arquetipos consiste en sintetizar la información obtenida durante el proceso de construcción del buyer persona para crear perfiles que representen a los principales grupos de clientes potenciales de una organización.  
        .bg-contenido-a5.p-4.rounded-4.py-3.mb-3
          p.mb-0 Cada arquetipo reúne las características, comportamientos, motivaciones y necesidades más representativas de un segmento específico, facilitando su comprensión y utilización en la planeación comercial. Los arquetipos no corresponden a personas reales, sino a modelos construidos a partir del análisis de información recopilada mediante diferentes fuentes.  
        p.mb-0 Su representación permite que las áreas de marketing, ventas y servicio al cliente compartan una visión común sobre los perfiles que atiende la organización, favoreciendo la coherencia de las estrategias comerciales y de comunicación. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema7/10.png", alt="")
    
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Conozca a María, un ejemplo de #[em buyer persona]

    p Un buyer persona integra información que permite representar de manera estructurada a un cliente potencial.  
    p.mb-5 Explore el perfil de María Gómez y reconozca cómo sus características, motivaciones, necesidades y comportamientos aportan información para orientar las decisiones comerciales.  

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema7/11.png", alt="" data-aos="zoom-in-down")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .bg-secundario-s5.p-4.rounded-4.py-5
          h5 Perfil de María Gómez 
          p.mb-0 #[strong Nombre] - María Gómez 
          p.mb-0 #[strong Edad] - 32 años 
          p.mb-0 #[strong Ocupación] - Diseñadora gráfica independiente 
          p.mb-0 #[strong Ubicación] - Medellín, Colombia 
          p.mb-0 #[strong Estado civil] - Soltera 
          p.mb-0 #[strong Nivel educativo] - Profesional 
      .col-lg-6
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Características generales")
            ul.checklist.ms-3
              li 
                p.mb-0 #[strong Profesión:] Diseñadora gráfica. 
              li 
                p.mb-0 #[strong Ingresos:] $2.500.000 - $3.500.000 COP. 
              li 
                p.mb-0 #[strong Educación:] Profesional. 
              li 
                p.mb-0 #[strong Estilo de vida:] Activa, organizada; le gusta aprender y trabajar desde casa o espacios flexibles. 
              li 
                p.mb-0 #[strong Tecnología:] Utiliza computador portátil, teléfono inteligente y herramientas digitales de diseño. 
            p.mb-0 #[strong Clave de análisis:] estos datos permiten comprender el contexto personal y profesional del perfil. 
          div(numero="2" titulo="Motivaciones y objetivos")
            h5 Motivaciones
            ul.checklist.ms-3
              li 
                p.mb-0 Tener flexibilidad de tiempo. 
              li 
                p.mb-0 Desarrollar proyectos creativos que generen impacto. 
              li 
                p.mb-0 Aprender constantemente nuevas herramientas. 
              li 
                p.mb-0 Alcanzar estabilidad financiera trabajando por cuenta propia. 
            h5 Objetivos
            ul.checklist.ms-3
              li 
                p.mb-0 Aumentar su cartera de clientes. 
              li 
                p.mb-0 Posicionar su marca personal en redes sociales. 
              li 
                p.mb-0 Generar ingresos constantes que le permitan crecer profesionalmente. 
              li 
                p.mb-0 Ofrecer servicios de diseño con mayor valor agregado. 
            p.mb-0 #[strong Clave de análisis:] conocer qué impulsa al cliente y qué espera alcanzar facilita la construcción de propuestas de valor pertinentes. 
          div(numero="3" titulo="Necesidades y dificultades")
            h5 Necesidades
            ul.checklist.ms-3
              li 
                p.mb-0 Herramientas digitales de diseño eficientes y actualizadas. 
              li 
                p.mb-0 Capacitación en tendencias de diseño y marketing digital. 
              li 
                p.mb-0 Información clara sobre herramientas y recursos para su trabajo. 
              li 
                p.mb-0 Soluciones que ahorren tiempo y faciliten su productividad. 
            h5 Dificultades
            ul.checklist.ms-3
              li 
                p.mb-0 Conseguir clientes de manera constante. 
              li 
                p.mb-0 Competencia alta y precios bajos en el mercado. 
              li 
                p.mb-0 Falta de tiempo para administrar todas sus tareas. 
              li 
                p.mb-0 Dificultad para diferenciarse de otros diseñadores.
            p.mb-0 #[strong Clave de análisis:] relacionar necesidades y dificultades permite reconocer oportunidades para ofrecer soluciones relevantes. 
          div(numero="4" titulo="Comportamiento de compra ")
            ul.checklist.ms-3
              li 
                p.mb-0 Investiga en internet antes de tomar decisiones. 
              li 
                p.mb-0 Compara precios, calidad y opiniones de otros usuarios. 
              li 
                p.mb-0 Prefiere recomendaciones de colegas y redes sociales. 
              li 
                p.mb-0 Valora la atención personalizada y la confianza en la marca. 
            p.mb-0 #[strong Clave de análisis:] comprender cómo toma decisiones facilita la selección de estrategias de contacto y comunicación. 
          div(numero="5" titulo="Canales de información")
            p.mb-1 María utiliza principalmente: 
            p.mb-1 Instagram · YouTube · LinkedIn · Comunidades en línea · Blogs de diseño 
            p.mb-0 #[strong Clave de análisis:] identificar los canales utilizados por el buyer persona ayuda a determinar dónde y cómo establecer la comunicación comercial. 
          div(numero="6" titulo="Aplicación comercial")
            h5 Mensaje clave para María 
            p.mb-1 “Te ayudamos a ahorrar tiempo y potenciar tu creatividad con herramientas y recursos diseñados para profesionales como tú”. 
            p.mb-1 #[strong Uso del perfil:] este buyer persona puede servir como referente para orientar estrategias de marketing, comunicación y desarrollo de productos relacionadas con sus características y necesidades. 
            p.mb-0 #[strong Actualización:] el perfil debe revisarse periódicamente o cuando se identifiquen cambios relevantes en sus necesidades o en el mercado. 

    .bg-contenido-a10.p-4.rounded-4.py-3.mb-5
      p.mb-0 Un #[em buyer persona] adquiere valor cuando la información recopilada se interpreta de manera integrada. Características, motivaciones, objetivos, necesidades, dificultades y comportamientos permiten comprender mejor al cliente potencial y fundamentar las decisiones comerciales. 

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-adicional.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/18.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo.  
              p.mb-0 Conocer al cliente no consiste en imaginar quién es, sino en comprenderlo a partir de la información que revela su realidad. Las metodologías de buyer persona permiten transformar datos en conocimiento útil para la toma de decisiones comerciales. Cuando los perfiles se construyen con información objetiva y representan adecuadamente a los clientes potenciales, las organizaciones fortalecen su capacidad para establecer relaciones más pertinentes y generar propuestas de valor alineadas con las necesidades del mercado. 





























</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
