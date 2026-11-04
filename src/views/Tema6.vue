<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 #[em Buyer persona]

    img(data-aos="fade-up", src="@/assets/curso/tema6/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 El #[em buyer persona] es una representación semificticia de la cliente ideal construida a partir del análisis de información relacionada con sus características, comportamientos, necesidades y motivaciones.  

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p Su elaboración permite comprender con mayor profundidad a los clientes potenciales y diseñar estrategias de comunicación, #[em marketing] y ventas más pertinentes.
        .bg-terciario-t5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 A diferencia de una descripción general del mercado, el #[em buyer persona] integra variables cualitativas y cuantitativas que facilitan la toma de decisiones orientadas al fortalecimiento de las relaciones comerciales. 
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/2.png", alt="")
    
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El #[em buyer persona] es un perfil que representa a un cliente ideal mediante la integración de información demográfica, conductual, motivacional y contextual, su construcción parte del análisis de datos obtenidos a través de investigaciones, entrevistas, observación del comportamiento de los clientes y otras fuentes de información relevantes para la organización.  
        .bg-secundario-s5.p-4.rounded-4.py-3
          p.mb-0 La finalidad del #[em buyer persona] es comprender cómo piensan, qué necesitan y cuáles son los factores que influyen en las decisiones de los clientes potenciales. Esta información facilita el diseño de estrategias comerciales más personalizadas, mejora la comunicación con el mercado objetivo y fortalece la capacidad de la organización para ofrecer soluciones acordes con las expectativas de sus clientes. 

    .row.justify-content-center.z-2
      .col-xl-10.bg-contenido-a5.rounded-4.p-4.py-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 El #[em buyer persona] representa de manera estructurada al cliente ideal y facilita la planificación de estrategias comerciales centradas en sus necesidades y comportamientos. 

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Características

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p El #[em buyer persona] se caracteriza por integrar información que permite comprender al cliente potencial desde una perspectiva amplia, este perfil no se limita a describir datos personales, sino que incorpora aspectos relacionados con el contexto, las necesidades, los hábitos de consumo, las motivaciones, los objetivos y las dificultades que influyen en el proceso de decisión de compra. Una de las principales características del #[em buyer persona] es que se construye con información basada en evidencias y no en suposiciones. 
        .bg-primario-p5.p-4.rounded-4.py-3
          p.mb-0 Por esta razón, las organizaciones recopilan y analizan datos provenientes de clientes, investigaciones de mercado, herramientas digitales y procesos comerciales, con el propósito de elaborar perfiles que reflejen de manera objetiva las particularidades de su público. 

    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Características generales de un #[em buyer persona]
        .tabla-a.color-secundario.tabla-a--text-left
          table
            thead
              tr(style="background-color: #E4FFFB")
                th(colspan="2") Etapa 
                th(colspan="3") Propósito  
                th(colspan="3") Ejemplo de acción 
            tbody
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong Basado en información]
                td(colspan="3") Se construye utilizando datos obtenidos de fuentes confiables. 
                td(colspan="3") Reduce la subjetividad en el conocimiento del cliente. 
              tr(style="background-color: #E9EEF5")
                td(colspan="2") #[strong Representativo]
                td(colspan="3") Resume las características comunes de un grupo de clientes potenciales. 
                td(colspan="3") Facilita la segmentación del mercado. 
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong Dinámico]
                td(colspan="3") Puede actualizarse conforme cambian los clientes y el mercado. 
                td(colspan="3") Mantiene la pertinencia de las estrategias comerciales. 
              tr(style="background-color: #E9EEF5")
                td(colspan="2") #[strong Estratégico]
                td(colspan="3") Sirve como apoyo para la toma de decisiones de #[em marketing] y ventas. 
                td(colspan="3") Orienta acciones comerciales más efectivas.

    .row.justify-content-center.z-2
      .col-xl-10
        .tarjeta.bg-secundario-s5.p-4.py-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.position-relative.d-none.d-lg-block
              figure.position-relative
                img.imgw-90(src="@/assets/curso/tema6/stats.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 #[em Buyer persona] 
                  p.mb-0 Lo invitamos a consultar el siguiente video, en el que podrá profundizar en la temática abordada y conocer cómo se caracteriza un #[em buyer persona]. 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=6wN7nsKOlk0" target="_blank")
                    span Ir al recurso
                    i.fas.fa-file-download

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Importancia estratégica

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p El #[em buyer persona] constituye una herramienta estratégica porque permite comprender con mayor profundidad las características y necesidades de los clientes potenciales, facilitando la planificación de acciones comerciales más precisas. Al disponer de un perfil claramente definido, las organizaciones pueden orientar sus esfuerzos hacia segmentos con mayor afinidad con su oferta, optimizando la utilización de recursos y fortaleciendo la efectividad de sus estrategias de #[em marketing], ventas y comunicación.  
        .bg-terciario-t5.p-4.rounded-4.py-3
          p.mb-0 Además de favorecer la segmentación del mercado, el #[em buyer persona] contribuye a mejorar la toma de decisiones en diferentes procesos organizacionales, como el desarrollo de productos, la generación de contenidos, la selección de canales de comunicación y el diseño de experiencias para el cliente. Su utilización permite construir relaciones comerciales más cercanas y responder de manera más pertinente a las expectativas del mercado. 

    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        .bg-secundario-s20.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p #[strong NovaMarket S.A.S.] desarrolla diferentes perfiles de #[em buyer persona] para los segmentos que atiende, como distribuidores deportivos, gimnasios y tiendas especializadas, esta información orienta la elaboración de campañas digitales, la selección de canales de comunicación y la creación de propuestas comerciales ajustadas a las necesidades de cada segmento, incrementando la efectividad de sus acciones comerciales.

    .row.justify-content-center.z-2
      .col-xl-10.bg-terciario-t5.rounded-4.p-4.py-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 El #[em buyer persona] fortalece la planeación estratégica al proporcionar información que permite comprender mejor al cliente potencial y orientar las decisiones comerciales. 

    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Motivaciones

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Las motivaciones corresponden a los factores que impulsan al cliente potencial a buscar una solución, adquirir un producto o contratar un servicio. Estas pueden originarse por necesidades funcionales, intereses personales, expectativas de crecimiento, ahorro de tiempo, mejora de resultados o cualquier otro beneficio que el cliente considere valioso durante su proceso de decisión.  
        .bg-primario-p5.p-4.rounded-4.py-3
          p.mb-0 Identificar las motivaciones del #[em buyer persona] permite comprender las razones que influyen en su comportamiento y facilita la construcción de mensajes comerciales más relevantes. Cuando la organización conoce qué impulsa las decisiones de sus clientes potenciales, puede diseñar propuestas de valor alineadas con sus expectativas y fortalecer la efectividad de las estrategias de comunicación. 
 
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Motivaciones de un #[em buyer persona]

    p.mb-5 Las motivaciones permiten comprender las razones que impulsan las decisiones de un #[em buyer persona]. Explore algunos ejemplos y su aplicación en diferentes situaciones comerciales. 

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-lg-8
        SlyderF(columnas="col-xl-6")
          .tarjeta.tarjeta--gris.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema6/7.png' alt='')
            h5.mb-4.text-center Optimización de recursos
            p.mb-0 Busca reducir tiempo, costos o esfuerzos. 
            p.mb-0 #[strong Ejemplo:] Automatizar procesos comerciales mediante herramientas digitales. 
          .tarjeta.tarjeta--gris.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema6/8.png' alt='')
            h5.mb-4.text-center Crecimiento del negocio 
            p.mb-0 Busca incrementar las ventas o mejorar los resultados. 
            p.mb-0 #[strong Ejemplo:] Implementar estrategias para captar nuevos clientes. 
          .tarjeta.tarjeta--gris.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema6/9.png' alt='')
            h5.mb-4.text-center Solución de necesidades 
            p.mb-0 Busca resolver una situación o necesidad específica. 
            p.mb-0 #[strong Ejemplo:] Encontrar un proveedor confiable para abastecer su negocio. 
          .tarjeta.tarjeta--gris.p-4.pt-5.bg-sistema-h
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95(src='@/assets/curso/tema6/10.png' alt='')
            h5.mb-4.text-center Desarrollo profesional 
            p.mb-0 Busca fortalecer sus conocimientos o competencias. 
            p.mb-0 #[strong Ejemplo:] Capacitarse en estrategias de #[em marketing] y ventas.             
      .col-lg-4.d-none.d-lg-block
        figure
          img.imgw-324.mb-4.mb-lg-0(src='@/assets/curso/tema6/11.png', alt='')

    .bg-contenido.rounded-4.p-4.py-3
      p.mb-0 Identificar estas motivaciones contribuye a construir un #[em buyer persona] más preciso y a orientar las acciones comerciales de acuerdo con sus necesidades e intereses. 

    separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Frustraciones

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/12.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Las frustraciones corresponden a las dificultades, obstáculos o experiencias negativas que experimenta el cliente potencial durante la búsqueda, evaluación o adquisición de un producto o servicio. Estos aspectos influyen directamente en su proceso de decisión, ya que pueden generar desconfianza, retrasar la compra o motivar la búsqueda de alternativas que respondan mejor a sus necesidades.  
        .bg-primario-p5.p-4.rounded-4.py-3
          p.mb-0 Identificar las frustraciones del #[em buyer persona] permite a las organizaciones anticipar posibles objeciones y diseñar estrategias orientadas a disminuir las barreras que afectan la experiencia del cliente. De esta manera, es posible desarrollar propuestas de valor más pertinentes, fortalecer la comunicación comercial y ofrecer soluciones que respondan de manera efectiva a las expectativas del mercado. 
 
    .row.justify-content-center
      .col-xl-10
        .bg-primario-p10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/common/error-icon.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Error frecuente 
              p.mb-0 Construir un #[em buyer persona] considerando únicamente sus intereses y necesidades, sin identificar las dificultades que enfrenta durante su proceso de decisión. Comprender las frustraciones permite diseñar estrategias que respondan de manera más efectiva a los desafíos del cliente potencial. 

    separador
    #t_6_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.6 Objetivos del cliente

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-7.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/13.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Los objetivos del cliente representan los resultados que el #[em buyer persona] espera alcanzar mediante la adquisición de un producto o servicio, estos objetivos pueden relacionarse con el crecimiento de su negocio, la solución de un problema, la optimización de recursos, el incremento de la productividad o la satisfacción de una necesidad específica.  
        .bg-primario-p5.p-4.rounded-4.py-3
          p.mb-0 Comprender los objetivos del cliente facilita la construcción de propuestas comerciales alineadas con sus expectativas. En lugar de centrar la comunicación en las características del producto, la organización puede demostrar cómo su oferta contribuye al logro de los resultados que el cliente desea obtener, fortaleciendo así la relevancia de la propuesta de valor. 

    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        .bg-secundario-s20.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p Antes de presentar una propuesta comercial, #[strong NovaMarket S.A.S.] identifica los objetivos de cada cliente potencial mediante entrevistas y formularios de diagnóstico, con esta información adapta sus recomendaciones, destacando cómo sus productos pueden contribuir a mejorar la exhibición de artículos deportivos, aumentar las ventas o fortalecer la experiencia de compra de los consumidores. 

    .row.justify-content-center.z-2
      .col-xl-10.bg-terciario-t5.rounded-4.p-4.py-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 Conocer los objetivos del #[em buyer persona] permite orientar las propuestas comerciales hacia los resultados que el cliente espera alcanzar, más que hacia las características del producto o servicio. 

    separador
    #t_6_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.7 Diferencias entre cliente ideal y público objetivo

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p Aunque los conceptos de cliente ideal y público objetivo están relacionados, no representan el mismo nivel de análisis. El público objetivo hace referencia al conjunto de personas o empresas que comparten características generales y constituyen el mercado al que la organización dirige sus estrategias comerciales.  
        .bg-primario-p10.p-4.rounded-4.py-3.mb-3
          p.mb-0 En contraste, el cliente ideal corresponde al perfil específico del comprador que reúne las condiciones más favorables para adquirir los productos o servicios ofrecidos. El #[em buyer persona] profundiza aún más este análisis, ya que incorpora información relacionada con comportamientos, motivaciones, objetivos, necesidades y frustraciones del cliente potencial.  
        p.mb-0 Esta diferencia permite a las organizaciones diseñar estrategias más personalizadas y desarrollar acciones comerciales ajustadas a las características particulares de sus clientes. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/14.png", alt="")
    
    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Diferencias entre público objetivo y cliente ideal
        .tabla-a.color-secundario.tabla-a--text-left
          table
            thead
              tr(style="background-color: #E4FFFB")
                th(colspan="2") Aspecto 
                th(colspan="3") Público objetivo 
                th(colspan="3") Cliente ideal 
            tbody
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong Alcance]
                td(colspan="3") Grupo amplio de personas o empresas con características comunes. 
                td(colspan="3") Perfil específico del comprador con mayor afinidad hacia la oferta. 
              tr(style="background-color: #E9EEF5")
                td(colspan="2") #[strong Nivel de detalle]
                td(colspan="3") Describe características generales del mercado. 
                td(colspan="3") Incorpora información detallada sobre necesidades y comportamiento. 
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong Finalidad]
                td(colspan="3") Orientar la segmentación del mercado. 
                td(colspan="3") Facilitar la personalización de las estrategias comerciales. 
              tr(style="background-color: #E9EEF5")
                td(colspan="2") #[strong Aplicación]
                td(colspan="3") Planeación de campañas y definición del mercado objetivo. 
                td(colspan="3") Diseño de propuestas de valor y procesos de venta. 

    separador
    #t_6_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.8 Herramientas digitales de perfilamiento de clientes

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/15.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Las herramientas digitales de perfilamiento de clientes son aplicaciones y plataformas que permiten recopilar, organizar y analizar información relevante sobre los clientes potenciales. Su utilización facilita la construcción del buyer persona al integrar datos provenientes de diferentes puntos de contacto, como formularios, redes sociales, sitios web, sistemas de gestión comercial y campañas digitales.
        .bg-contenido-a10.rounded-4.p-4.py-3
          p.mb-0 Estas herramientas contribuyen a mejorar la precisión del perfilamiento, ya que permiten identificar patrones de comportamiento, intereses, necesidades y preferencias de los clientes potenciales. Asimismo, facilitan la actualización permanente de la información, permitiendo que las organizaciones ajusten sus estrategias comerciales conforme evolucionan las características del mercado. 

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Herramientas digitales utilizadas para el perfilamiento de clientes
        .tabla-a.color-secundario.tabla-a--text-left
          table
            thead
              tr(style="background-color: #E4FFFB")
                th(colspan="2") Herramienta
                th(colspan="3") Información que aporta
                th(colspan="3") Aplicación en el #[em buyer persona]
            tbody
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong CRM]
                td(colspan="3") Historial de interacciones, consultas y oportunidades comerciales. 
                td(colspan="3") Identificar el comportamiento y el nivel de interés del cliente potencial. 
              tr(style="background-color: #E9EEF5")
                td(colspan="2") #[strong Analítica web]
                td(colspan="3") Navegación, páginas visitadas y permanencia en el sitio web. 
                td(colspan="3") Reconocer intereses y contenidos de mayor relevancia. 
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong Redes sociales]
                td(colspan="3") Interacciones, preferencias y participación en contenidos. 
                td(colspan="3") Comprender hábitos de comunicación y temas de interés. 
              tr(style="background-color: #E9EEF5")
                td(colspan="2") #[strong Formularios digitales]
                td(colspan="3") Datos de contacto, necesidades y requerimientos específicos. 
                td(colspan="3") Complementar la caracterización del cliente potencial. 
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong Plataformas de automatización de #[em marketing]]
                td(colspan="3") Respuesta a campañas, apertura de correos y descargas de contenidos. 
                td(colspan="3") Evaluar el nivel de interacción y compromiso del prospecto. 

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-adicional.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/18.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo.  
              p Comprender a las personas siempre será más valioso que asumir quiénes son. El #[em buyer persona] se construye a partir del análisis de información y no de suposiciones.  
              p.mb-0 Conocer las motivaciones, necesidades y expectativas de los clientes potenciales permite desarrollar estrategias comerciales más pertinentes y construir relaciones basadas en la comprensión y el valor mutuo. 

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
