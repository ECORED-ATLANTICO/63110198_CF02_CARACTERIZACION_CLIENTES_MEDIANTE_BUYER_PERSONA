<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Variables del perfil del cliente

    img(data-aos="fade-up", src="@/assets/curso/tema8/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 Las variables del perfil del cliente corresponden a los diferentes aspectos que permiten comprender de manera integral las características, necesidades y comportamientos de los clientes potenciales.  

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema8/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Su análisis facilita la construcción de buyer persona más precisos y proporciona información útil para segmentar mercados, diseñar estrategias comerciales y fortalecer la relación entre la organización y sus clientes. La integración de estas variables permite orientar las decisiones comerciales con base en información objetiva y relevante. 
    
    .fullwidth-bg.fullwidth-bg--1
    separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1 Demográficas

    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Variables demográficas utilizadas en el perfil del cliente 
        .tabla-a.color-secundario.tabla-a--text-left
          table
            thead
              tr(style="background-color: #E4FFFB")
                th(colspan="2") Variable 
                th(colspan="3") Información que aporta  
                th(colspan="3") Aplicación comercial 
            tbody
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong Edad]
                td(colspan="3") Rango de edad del cliente potencial. 
                td(colspan="3") Adaptar la comunicación y la oferta. 
              tr(style="background-color: #E9EEF5")
                th(colspan="2") #[strong Ubicación geográfica]
                td(colspan="3") Lugar donde reside o desarrolla su actividad. 
                td(colspan="3") Definir cobertura y estrategias regionales. 
              tr(style="background-color: #FFFFFF")
                th(colspan="2") #[strong Nivel educativo]
                td(colspan="3") Formación académica alcanzada. 
                td(colspan="3") Ajustar el nivel técnico de la comunicación. 
              tr(style="background-color: #E9EEF5")
                th(colspan="2") #[strong Ocupación]
                td(colspan="3") Actividad laboral o profesional. 
                td(colspan="3") Comprender el contexto del cliente. 
              tr(style="background-color: #FFFFFF")
                th(colspan="2") #[strong Nivel de ingresos]
                td(colspan="3") Capacidad económica aproximada. 
                td(colspan="3") Orientar la propuesta comercial. 

    separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.2 Motivacionales

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/3.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Las variables motivacionales permiten comprender las razones que impulsan al cliente potencial a buscar una solución, evaluar alternativas y tomar decisiones de compra. Estas variables incluyen intereses, necesidades, aspiraciones, expectativas y beneficios esperados, proporcionando información sobre los factores que generan valor para el cliente.  
        .bg-primario-p10.p-4.rounded-4.py-3.mb-3
          p.mb-0 El análisis de las variables motivacionales facilita el diseño de propuestas comerciales centradas en las expectativas del cliente y fortalece la personalización de las estrategias de comunicación. Comprender qué motiva a un cliente potencial permite establecer mensajes más relevantes y construir relaciones comerciales orientadas a generar valor. 

    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Ejemplos de variables motivacionales 
        .tabla-a.color-secundario.tabla-a--text-left
          table
            thead
              tr(style="background-color: #E4FFFB")
                th(colspan="2") Variable motivacional 
                th(colspan="3") ¿Qué permite comprender?  
                th(colspan="3") Ejemplo 
            tbody
              tr(style="background-color: #FFFFFF")
                td(colspan="2") #[strong Necesidades]
                td(colspan="3") Problemas que el cliente desea resolver. 
                td(colspan="3") Optimizar el proceso de ventas. 
              tr(style="background-color: #E9EEF5")
                th(colspan="2") #[strong Intereses]
                td(colspan="3") Temas o soluciones que llaman su atención. 
                td(colspan="3") Herramientas de #[em marketing] digital. 
              tr(style="background-color: #FFFFFF")
                th(colspan="2") #[strong Aspiraciones]
                td(colspan="3") Resultados que espera alcanzar. 
                td(colspan="3") Incrementar la competitividad del negocio. 
              tr(style="background-color: #E9EEF5")
                th(colspan="2") #[strong Beneficios esperados]
                td(colspan="3") Valor que espera obtener con la compra. 
                td(colspan="3") Ahorrar tiempo y mejorar la productividad. 

    separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.3 Conductuales y psicográficas

    img(data-aos="fade-up", src="@/assets/curso/tema8/4.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 Las variables conductuales y psicográficas permiten comprender cómo actúa el cliente potencial y cuáles son los factores personales que influyen en sus decisiones. Mientras las variables conductuales analizan los hábitos, las interacciones y el comportamiento durante el proceso de compra, las variables psicográficas se enfocan en aspectos como los valores, el estilo de vida, la personalidad y las preferencias del cliente. 

    .row.justify-content-center.z-2
      .col-xl-10
        p.mb-5 La combinación de ambas proporciona una visión más completa del perfil y facilita el diseño de estrategias comerciales personalizadas. El análisis conjunto de estas variables permite anticipar comportamientos, seleccionar los canales de comunicación más adecuados y adaptar las propuestas de valor a las características del cliente potencial. De esta manera, las organizaciones fortalecen la pertinencia de sus acciones comerciales y mejoran la experiencia ofrecida durante todo el proceso de relacionamiento.   

    .fullwidth-bg.fullwidth-bg--5
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Variables conductuales y psicográficas del perfil del cliente
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema8/5-mob.png", alt="La figura 2 ilustra las variables conductuales y psicográficas del perfil del cliente. Estas se clasifican en conductuales y psicográficas. Las conductuales analizan la frecuencia de compra, interacción con contenidos respuesta a campañas y proceso de decisión. Por su parte, las psico gráficas, analizan aspectos como los valores, el estilo de vida, los intereses, personalidad y preferencias del cliente. ")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema8/5.png", alt="La figura 2 ilustra las variables conductuales y psicográficas del perfil del cliente. Estas se clasifican en conductuales y psicográficas. Las conductuales analizan la frecuencia de compra, interacción con contenidos respuesta a campañas y proceso de decisión. Por su parte, las psico gráficas, analizan aspectos como los valores, el estilo de vida, los intereses, personalidad y preferencias del cliente. ")

    .row.justify-content-center.z-2
      .col-xl-10.bg-terciario-t5.rounded-4.p-4.py-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 Las variables conductuales explican cómo actúa el cliente; las psicográficas ayudan a comprender por qué actúa de esa manera. 

    separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.4 #[em Pain points]

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/6.png", alt="" data-aos="zoom-in-down")
      .col-lg-7
        p Los #[em pain points] o puntos de dolor corresponden a los problemas, dificultades, necesidades insatisfechas o barreras que experimenta el cliente potencial y que motivan la búsqueda de una solución. Su identificación constituye un elemento fundamental para la construcción del #[em buyer persona], ya que permite comprender las situaciones que afectan la experiencia del cliente y orientar la propuesta de valor hacia la resolución de esas necesidades.  
        .bg-primario-p10.p-4.rounded-4.py-3.mb-3
          p.mb-0 Reconocer los #[em pain points] facilita el desarrollo de estrategias comerciales más relevantes, puesto que la comunicación puede enfocarse en demostrar cómo un producto o servicio contribuye a solucionar problemas específicos, esta información también apoya el diseño de contenidos, campañas y argumentos comerciales que respondan directamente a las expectativas del cliente potencial.
  
    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        .bg-secundario-s20.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p #[strong NovaMarket S.A.S.] identifica que muchos de sus clientes potenciales manifiestan dificultades para encontrar proveedores que entreguen información técnica clara y respondan oportunamente a las solicitudes de cotización.


    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        p.mb-0 A partir de este hallazgo, la organización fortalece sus canales de atención, optimiza los tiempos de respuesta y desarrolla fichas técnicas más completas para disminuir estas barreras y mejorar la experiencia comercial.   

    .row.justify-content-center.z-2
      .col-xl-10.bg-terciario-t5.rounded-4.p-4.py-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 Los #[em pain points] representan las necesidades o problemas que el cliente desea resolver y constituyen una oportunidad para generar propuestas de valor diferenciadas. 

    separador
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.5 Intereses

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema8/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p Los intereses corresponden a los temas, actividades, productos, servicios o contenidos que despiertan la atención del cliente potencial y orientan su comportamiento durante la búsqueda de información y la toma de decisiones, estos intereses pueden estar relacionados con necesidades personales, objetivos profesionales, tendencias del mercado o situaciones específicas que motivan la interacción con una organización.  
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-3
          p.mb-0 Identificar los intereses del cliente permite desarrollar contenidos, campañas y propuestas comerciales más pertinentes, asimismo, facilita la selección de canales de comunicación y la definición de mensajes alineados con los temas que generan mayor valor para el buyer persona, fortaleciendo la relación entre la organización y sus clientes potenciales.  

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Diferencia entre intereses, motivaciones y objetivos
        .tabla-a.color-secundario.tabla-a--text-left
          table
            thead
              tr(style="background-color: #E4FFFB")
                th Aspecto 
                th Intereses
                th Motivaciones
                th Objetivos
            tbody
              tr(style="background-color: #E9EEF5")
                td #[strong ¿Qué representan?]
                td Temas o soluciones que llaman la atención del cliente.
                td Razones que impulsan su comportamiento.
                td Resultados que espera alcanzar.
              tr(style="background-color: #FFFFFF")
                th #[strong Responden a la pregunta]
                td ¿Qué le interesa? 
                td ¿Por qué actúa? 
                td ¿Qué desea lograr? 
              tr(style="background-color: #E9EEF5")
                th #[strong Utilidad en el #[em buyer persona]]
                td Identificar contenidos y canales de comunicación. 
                td Comprender los impulsores de la decisión. 
                td Orientar la propuesta de valor hacia resultados concretos. 

    .row.justify-content-center
      .col-xl-10
        .bg-terciario-t5.p-4.rounded-4.py-3
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-125.mb-4.mb-lg-0(src="@/assets/curso/tema8/10.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 ¿Sabía que...? 
              p.mb-0 Los intereses de un cliente potencial pueden cambiar con el tiempo debido a factores como la evolución de su actividad económica, la incorporación de nuevas tecnologías, las tendencias del mercado o las experiencias obtenidas durante su proceso de compra; por esta razón, el #[em buyer persona] debe actualizarse periódicamente. 

    separador
    #t_8_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.6 Expectativas

    img(data-aos="fade-up", src="@/assets/curso/tema8/8.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 Las expectativas corresponden a las percepciones que tiene el cliente potencial sobre el valor, la calidad y los resultados que espera obtener al establecer una relación comercial con una organización. Estas expectativas influyen directamente en la evaluación de las alternativas disponibles y en la satisfacción generada durante la experiencia de compra.  

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema8/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprender las expectativas permite diseñar propuestas comerciales coherentes con las necesidades del cliente y fortalecer la confianza durante el proceso de decisión. Cuando existe correspondencia entre lo que la organización comunica y lo que realmente entrega, se incrementan las posibilidades de establecer relaciones comerciales sostenibles y de largo plazo. 

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-adicional.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/18.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo.  
              p Conocer los datos de un cliente permite identificarlo; comprender sus necesidades y expectativas permite servirle mejor. El análisis de las variables del perfil del cliente transforma la información en conocimiento para la toma de decisiones comerciales.
              p.mb-0 Cuando la organización interpreta estas variables de manera integral, puede construir propuestas de valor más pertinentes, fortalecer la relación con sus clientes potenciales y orientar sus estrategias hacia resultados sostenibles. 


</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
