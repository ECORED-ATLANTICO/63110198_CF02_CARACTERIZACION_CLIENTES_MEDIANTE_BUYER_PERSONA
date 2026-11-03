<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 #[em Lead scoring]

    img(data-aos="fade-up", src="@/assets/curso/tema2/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 El #[em lead scoring] constituye una metodología que permite asignar una valoración objetiva a los prospectos según la probabilidad de que se conviertan en clientes.  

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A diferencia de una simple clasificación, este proceso integra criterios previamente definidos para priorizar las oportunidades comerciales y orientar de manera más eficiente las acciones del equipo de marketing y ventas. Su aplicación contribuye a optimizar recursos, mejorar la oportunidad en la atención y favorecer la toma de decisiones basada en información. 

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p El #[em lead scoring] es una metodología utilizada para evaluar y clasificar prospectos mediante la asignación de una puntuación basada en características previamente definidas por la organización, esta valoración considera aspectos como el perfil del prospecto, su comportamiento frente a la marca y el nivel de interés demostrado durante su interacción con los diferentes canales de comunicación.  
        .bg-primario-p5.p-4.rounded-4.py-3.mb-3
          p.mb-0 El propósito es identificar cuáles prospectos presentan una mayor probabilidad de convertirse en clientes y, por tanto, requieren una atención prioritaria.  
        p.mb-4.mb-lg-0 La implementación del #[em lead scoring] permite sustituir decisiones basadas en la intuición por criterios objetivos y consistentes. De esta manera, las organizaciones pueden concentrar sus esfuerzos comerciales en las oportunidades con mayor potencial, mejorar la coordinación entre marketing y ventas y aumentar la eficiencia de los procesos de conversión. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/3.png", alt="")

    .row.justify-content-center.z-2
      .col-xl-10.bg-contenido-a5.rounded-4.p-4.p-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 El #[em lead scoring] transforma la información de los prospectos en un criterio objetivo para establecer prioridades comerciales y optimizar el proceso de conversión. 

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Clasificación de prospectos

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p La clasificación de prospectos consiste en agrupar los contactos comerciales según su nivel de afinidad con la oferta de la organización y la probabilidad de avanzar dentro del proceso de conversión. Este procedimiento facilita la priorización de las acciones comerciales al identificar qué prospectos requieren un seguimiento inmediato, cuáles necesitan procesos de nutrición y cuáles aún no reúnen las condiciones para convertirse en oportunidades de venta.  
        .bg-primario-p10.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 Una clasificación adecuada permite optimizar la asignación de recursos comerciales y establecer estrategias diferenciadas para cada grupo de prospectos. De esta manera, el equipo de marketing y ventas puede adaptar los mensajes, la frecuencia de contacto y las acciones de seguimiento de acuerdo con las características y el nivel de interés de cada segmento, favoreciendo una gestión más eficiente del proceso comercial. 
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/4.png", alt="")

    .fullwidth-bg.fullwidth-bg--6
    .titulo-sexto.color-acento-contenido.mb-4.z-2
      h5 Figura 1.
      span Clasificación general de prospectos según su nivel de interés
    img.mb-2.d-sm-none.z-2(data-aos="fade-up", src="@/assets/curso/tema2/5-mob.png", alt="La figura 1 describe la clasificación general de prospectos según su nivel de interés. Estos  se clasifican en tres tipos: prospectos fríos, tibios o calientes dependiendo del grado de interés, interacción e intención de compra.")
    img.mb-2.d-none.d-sm-block.z-2(data-aos="fade-up", src="@/assets/curso/tema2/5.png", alt="La figura 1 describe la clasificación general de prospectos según su nivel de interés. Estos  se clasifican en tres tipos: prospectos fríos, tibios o calientes dependiendo del grado de interés, interacción e intención de compra.")

    separador
    #t_2_3.titulo-segundo.color-acento-contenido.z-2(data-aos="flip-up")
      h2 2.3 Criterios y variables de valoración

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-7
        p La valoración de un prospecto requiere definir criterios objetivos que permitan analizar tanto sus características como su comportamiento. Estos criterios constituyen la base del lead scoring, ya que establecen las condiciones bajo las cuales un prospecto recibe una mayor o menor puntuación dentro del proceso comercial.  
        .bg-contenido-a5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 La utilización de criterios previamente definidos favorece la consistencia en la toma de decisiones y reduce la subjetividad durante la priorización de oportunidades. Las variables de valoración pueden agruparse en dos grandes categorías: 
      .col-sm-8.col-lg-5
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/6.png", alt="")

    .row.justify-content-center.z-2
      .col-lg-8.mb-4
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/7.png' alt='')
          .tarjeta.bg-secundario-s5
            .p-4
              p #[strong Variables de perfil]: consideran información como el cargo, el sector económico, la ubicación geográfica o el tamaño de la organización. Permiten establecer las características generales del prospecto y determinar qué tan alineado se encuentra con el perfil de cliente definido por la organización.
      .col-lg-8
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/8.png' alt='')
          .tarjeta.bg-secundario-s5
            .p-4
              p #[strong Variables de comportamiento]: analizan las acciones realizadas por el prospecto, como visitar el sitio web, descargar contenidos, abrir correos electrónicos, interactuar con comunicaciones o solicitar información comercial. Permiten identificar su nivel de interés y reconocer señales que indiquen una mayor disposición hacia la oferta. 

    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        .bg-secundario-s20.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p #[strong NovaMarket S.A.S.] asigna una mayor puntuación a los prospectos que pertenecen a empresas del sector deportivo, ocupan cargos relacionados con la toma de decisiones comerciales y han interactuado recientemente con el catálogo digital o solicitado una demostración de productos,  esta combinación entre variables de perfil y comportamiento permite identificar con mayor precisión cuáles contactos representan oportunidades comerciales prioritarias.

    .fullwidth-bg.fullwidth-bg--1
    .row.justify-content-center.z-2
      .col-xl-10.bg-contenido-a5.rounded-4.p-4.p-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 La eficacia del #[em lead scoring] depende de establecer criterios de valoración objetivos que integren tanto las características del prospecto como su comportamiento durante el proceso comercial. 

    separador
    #t_2_4.titulo-segundo.color-acento-contenido.z-2(data-aos="flip-up")
      h2 2.4 Priorización comercial

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p La priorización comercial consiste en establecer el orden en que los prospectos serán atendidos por el equipo comercial, tomando como base la información obtenida durante el proceso de valoración y la puntuación asignada mediante el lead scoring.
        .bg-terciario-t5.p-4.rounded-4.py-3.mb-3
          p.mb-0 Su propósito es orientar los esfuerzos de la organización hacia aquellos prospectos que presentan mayores probabilidades de convertirse en clientes, optimizando el uso del tiempo, los recursos y las estrategias de contacto. La priorización no implica descartar los prospectos con menor valoración, sino definir acciones diferenciadas para cada grupo.  
        p.mb-4.mb-lg-0 Mientras los prospectos con mayor puntuación pueden requerir una gestión comercial inmediata, aquellos con menor potencial pueden incorporarse a estrategias de seguimiento o nutrición que fortalezcan progresivamente su interés. De esta manera, la organización desarrolla un proceso comercial más organizado, eficiente y alineado con sus objetivos. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/9.png", alt="")
    
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Teniendo en cuenta el contexto

    .row.justify-content-center.z-2.mb-4
      .col-xl-10.bg-contenido-a5.rounded-4.p-4.ps-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/4.png", alt="" data-aos="fade-up")
          .col-lg-10
            p Después de aplicar su modelo de lead scoring, #[strong NovaMarket S.A.S.] identifica que cien prospectos cumplen los criterios definidos para la campaña de lanzamiento de una nueva línea de productos deportivos. Con base en la puntuación obtenida, el equipo comercial establece tres niveles de prioridad: alta, media y baja.  
            p.mb-0 Los prospectos con prioridad alta reciben contacto personalizado durante las primeras veinticuatro horas, mientras que los demás ingresan a estrategias de seguimiento mediante correo electrónico y contenidos especializados, optimizando así la gestión comercial. 

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-adicional.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/18.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo.  
              p.mb-0 Priorizar prospectos significa administrar responsablemente los recursos de la organización. Cuando las decisiones se fundamentan en información objetiva y criterios previamente definidos, el proceso comercial se vuelve más eficiente, fortalece la confianza del cliente y contribuye al logro de resultados sostenibles. 



























      
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
