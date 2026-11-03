<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Calificación de prospectos

    img(data-aos="fade-up", src="@/assets/curso/tema1/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 La gestión comercial comienza con la identificación de personas u organizaciones que podrían convertirse en clientes; sin embargo, no todas representan el mismo nivel de oportunidad para una empresa.  

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Por esta razón, las organizaciones implementan procesos de calificación que permiten analizar la información disponible sobre cada prospecto y establecer prioridades de atención.  

    p.mb-0 Este capítulo presenta los fundamentos de la calificación de prospectos, los criterios utilizados para su priorización, los métodos de valoración y los elementos que permiten estimar su potencial de conversión dentro del proceso comercial. 

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p La calificación de prospectos es el proceso mediante el cual una organización analiza la información disponible sobre clientes potenciales para identificar cuáles representan mayores oportunidades comerciales. Este proceso permite diferenciar los prospectos según características como sus necesidades, nivel de interés, capacidad de compra o afinidad con la oferta de la empresa, facilitando la asignación estratégica de los recursos comerciales y mejorando la eficiencia de las acciones de ventas.  
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 Más que clasificar contactos, la calificación busca respaldar la toma de decisiones mediante criterios objetivos que reduzcan la incertidumbre en la gestión comercial. La información obtenida constituye el punto de partida para procesos posteriores como el lead scoring, la priorización comercial y la construcción de perfiles de clientes, fortaleciendo la planificación de estrategias orientadas a incrementar las probabilidades de conversión. 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/3.png", alt="")

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Teniendo en cuenta el contexto

    .row.justify-content-center.z-2
      .col-xl-10.bg-contenido-a5.rounded-4.p-4.ps-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/4.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 NovaMarket S.A.S.
            p Desarrolla campañas digitales para promocionar una nueva línea de implementos deportivos. Durante la primera semana obtiene más de 900 registros de personas interesadas mediante formularios en su sitio web. Aunque todos manifestaron interés en los productos, la empresa reconoce que no dispone de la capacidad operativa para contactar simultáneamente a todos los prospectos.  
            p Por esta razón, inicia un proceso de calificación en el que analiza variables como el tipo de producto consultado, la interacción con los contenidos digitales, la ubicación geográfica y el historial de contacto.  
            p.mb-0 Gracias a este análisis, el equipo comercial identifica cuáles prospectos presentan mayores posibilidades de compra y organiza sus acciones de seguimiento de forma priorizada. 

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Criterios de priorización

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p Los criterios de priorización corresponden al conjunto de variables que una organización utiliza para establecer el orden en que deben atenderse los prospectos identificados. Estos criterios permiten comparar objetivamente las oportunidades comerciales y concentrar los esfuerzos en aquellos clientes potenciales que presentan mayores probabilidades de convertirse en compradores. 
        .bg-primario-p10.rounded-4.p-4.py-3.mb-3
          p.mb-0 Entre los aspectos más frecuentes se encuentran el nivel de interés demostrado, la afinidad con el cliente ideal, la capacidad de compra y el grado de interacción con la organización. La utilización de criterios previamente definidos favorece la consistencia en la toma de decisiones comerciales, ya que todos los integrantes del equipo evalúan los prospectos bajo los mismos parámetros.  
        p.mb-0 Además de optimizar el uso del tiempo y los recursos disponibles, estos criterios constituyen la base para metodologías de valoración más avanzadas, permitiendo desarrollar procesos de priorización alineados con los objetivos estratégicos de la organización. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/5.png", alt="")

    .row.justify-content-center.mb-4.z-2
      .col-xl-10
        .bg-secundario-s20.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p En #[strong NovaMarket S.A.S.], los prospectos se priorizan mediante una matriz que considera cuatro variables principales: afinidad con el perfil del cliente ideal, nivel de interacción con los canales digitales, intención de compra identificada y capacidad estimada para adquirir los productos. Cada variable recibe una valoración que permite clasificar los prospectos en diferentes niveles de prioridad.  
              p.mb-0 Gracias a este procedimiento, el equipo comercial concentra inicialmente sus esfuerzos en aquellas oportunidades con mayor probabilidad de conversión, optimizando el tiempo disponible y mejorando la eficiencia de las campañas comerciales. 

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-contenido-a10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/7.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Frase para reflexionar 
              p.mb-0 ¿Por qué dos prospectos que manifiestan interés en un mismo producto pueden requerir niveles de atención comercial diferentes? ¿Qué riesgos asumiría una organización si todos los prospectos fueran tratados exactamente de la misma manera? 

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Valoración de prospectos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema1/8.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La valoración de prospectos consiste en analizar y estimar el nivel de oportunidad comercial que representa cada cliente potencial a partir de información previamente recopilada, este proceso integra diferentes variables, como el perfil del prospecto, sus necesidades, el comportamiento frente a la organización y su posible interés en la oferta comercial. La valoración permite asignar un nivel de importancia a cada oportunidad y establecer prioridades que faciliten la planificación de las acciones comerciales. 
        .bg-terciario-t10.p-4.rounded-4.py-3.mb-3
          p.mb-0 Una valoración adecuada proporciona información útil para orientar el seguimiento comercial y optimizar la utilización de los recursos disponibles.  
        p.mb-0 Además, facilita la identificación de prospectos que requieren atención inmediata y aquellos que necesitan procesos de maduración antes de avanzar hacia una posible compra. De esta manera, la organización fortalece la toma de decisiones comerciales mediante información objetiva y estructurada. 
 
    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Variables para la valoración de prospectos
        .tabla-a.color-secundario.tabla-a--text-left
          table
            thead
              tr(style="background-color: #E4FFFB")
                th(colspan="2") Variable
                th(colspan="3") Aspecto evaluado 
                th(colspan="3") Aporte a la valoración 
            tbody
              tr(style="background-color: #FFFFFF")
                th(colspan="2") #[strong Afinidad con la oferta]
                td(colspan="3") Correspondencia entre las necesidades del prospecto y la solución ofrecida. 
                td(colspan="3") Determina el grado de adecuación entre la oferta y la demanda potencial. 
              tr(style="background-color: #E9EEF5")
                th(colspan="2") #[strong Nivel de interés]
                td(colspan="3") Interacciones realizadas con contenidos, formularios o canales de contacto. 
                td(colspan="3") Permite identificar el compromiso demostrado por el prospecto. 
              tr(style="background-color: #FFFFFF")
                th(colspan="2") #[strong Capacidad de compra]
                td(colspan="3") Posibilidad económica o presupuestal para adquirir el producto o servicio. 
                td(colspan="3") Ayuda a estimar la viabilidad comercial de la oportunidad. 
              tr(style="background-color: #E9EEF5")
                th(colspan="2") #[strong Momento de compra]
                td(colspan="3") Cercanía de la decisión de adquisición. 
                td(colspan="3") Facilita establecer prioridades para el seguimiento comercial. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto En contexto

    .row.justify-content-center.mb-4
      .col-xl-10
        .bg-terciario-t5.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-190.mb-4.mb-lg-0(src="@/assets/curso/tema1/9.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              p En #[strong NovaMarket S.A.S.], dos prospectos manifiestan interés por una bicicleta de alto rendimiento, aunque ambos diligencian el formulario de contacto, uno solicita una cotización, consulta opciones de financiación y descarga la ficha técnica del producto, mientras que el otro únicamente visualiza la publicación inicial.  
              p.mb-0 Al valorar la información disponible, el equipo comercial identifica que el primer prospecto presenta un mayor nivel de preparación para la compra y prioriza su seguimiento. 

    .row.justify-content-center.z-2
      .col-xl-10.bg-contenido-a5.rounded-4.p-4.p-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 Valorar un prospecto significa analizar múltiples variables para comprender su nivel de oportunidad comercial, no únicamente medir su intención de compra. 

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Potencial de conversión

    img(data-aos="fade-up", src="@/assets/curso/tema1/11.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 El potencial de conversión corresponde a la probabilidad de que un prospecto complete la acción comercial esperada, como realizar una compra, solicitar una cotización o establecer una relación comercial con la organización. Esta estimación surge del análisis de la información recopilada durante las etapas de identificación, calificación y valoración, permitiendo orientar las acciones comerciales hacia las oportunidades con mayores posibilidades de éxito.  

    .fullwidth-bg.fullwidth-bg--2
    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5.z-2
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema1/12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Comprender el potencial de conversión facilita la planificación de estrategias diferenciadas para cada grupo de prospectos. Mientras algunos requieren un contacto inmediato por su alto interés y afinidad con la oferta, otros necesitan procesos de acompañamiento, entrega de información adicional o fortalecimiento de la relación comercial antes de avanzar hacia la decisión de compra. De esta forma, la organización optimiza sus recursos y mejora la eficiencia de sus procesos comerciales. 

    .row.justify-content-center.mb-5.z-2
      .col-xl-10
        .bg-primario-p5.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p Después de valorar los prospectos obtenidos en una campaña digital, #[strong NovaMarket S.A.S.] establece tres niveles de potencial de conversión. Los prospectos con potencial alto son contactados durante las primeras 24 horas; aquellos con potencial medio ingresan a una estrategia automatizada de seguimiento mediante correo electrónico, y los de potencial bajo reciben contenidos informativos que buscan fortalecer su interés hasta que estén preparados para avanzar en el proceso comercial.

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Aspectos que influyen en el potencial de conversión 

    .row.justify-content-center.mb-4.z-2.align-items-stretch
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .bg-primario-p5.rounded-4.shadow-sm.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3
              figure
                img.mb-4.mb-lg-0.imgw-60(src="@/assets/curso/tema1/13.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Afinidad entre las necesidades del prospecto y la oferta de la organización. 
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .bg-primario-p5.rounded-4.shadow-sm.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3
              figure
                img.mb-4.mb-lg-0.imgw-60(src="@/assets/curso/tema1/14.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Nivel de interacción con los canales de comunicación.  
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .bg-primario-p5.rounded-4.shadow-sm.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3
              figure
                img.mb-4.mb-lg-0.imgw-60(src="@/assets/curso/tema1/15.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Disponibilidad para realizar la compra.  
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .bg-primario-p5.rounded-4.shadow-sm.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3
              figure
                img.mb-4.mb-lg-0.imgw-60(src="@/assets/curso/tema1/16.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Calidad de la información recopilada durante la prospectación.   
      .col-sm-8.col-lg-6.col-xl-4.mb-4
        .bg-primario-p5.rounded-4.shadow-sm.p-4.py-3.h-100
          .row.justify-content-center.align-items-center
            .col-sm-6.col-lg-3
              figure
                img.mb-4.mb-lg-0.imgw-60(src="@/assets/curso/tema1/17.png", alt="" data-aos="zoom-in-down")
            .col-lg-9
              p.mb-0 Oportunidad y pertinencia del seguimiento comercial.    

    .row.justify-content-center.mb-5
      .col-xl-10
        .bg-contenido-a10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/18.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo.  
              p Calificar un prospecto implica mucho más que asignar una prioridad comercial; significa analizar la información con criterio, objetividad y respeto por las necesidades del cliente.  
              p.mb-0 Cuando las decisiones se sustentan en datos confiables y en principios de integridad, se fortalecen las relaciones comerciales y se construye confianza, uno de los activos más valiosos para cualquier organización. 


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
