<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Toma de decisiones comerciales

    img(data-aos="fade-up", src="@/assets/curso/tema5/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 La toma de decisiones comerciales corresponde al proceso mediante el cual una organización analiza la información disponible para seleccionar las acciones más adecuadas frente a sus oportunidades de negocio.  
    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el contexto de la prospectación, este proceso permite determinar qué clientes potenciales deben ser atendidos prioritariamente, qué estrategias de acercamiento son más convenientes y cómo distribuir los recursos comerciales de manera eficiente para contribuir al logro de los objetivos organizacionales. 

    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Análisis de prospectos

    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-lg-8
        p El análisis de prospectos consiste en examinar la información recopilada durante el proceso de prospectación para identificar el potencial comercial de cada cliente potencial. Este análisis considera aspectos relacionados con el perfil del prospecto, sus necesidades, el nivel de interés demostrado y la posibilidad de establecer una relación comercial beneficiosa para ambas partes. 
        .bg-contenido-a5.p-4.py-3.mb-4.mb-lg-0
          p.mb-0 Realizar un análisis sistemático facilita la identificación de oportunidades con mayor probabilidad de éxito y reduce la incertidumbre durante la toma de decisiones, asimismo, permite orientar las estrategias comerciales hacia aquellos prospectos que presentan un mayor nivel de afinidad con la oferta de la organización, favoreciendo una gestión más eficiente de los recursos disponibles. 
      .col-sm-6.col-lg-4
        figure
          img(data-aos="fade-up", src="@/assets/curso/tema5/3.png", alt="")

    .row.justify-content-center.z-2
      .col-xl-10.bg-contenido-a5.rounded-4.p-4.p-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 El análisis de prospectos transforma la información recopilada durante la prospectación en un insumo para la toma de decisiones comerciales. 
    
    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Criterios de selección

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down", src="@/assets/curso/tema5/4.png", alt="")
      .col-lg-8
        p Los criterios de selección corresponden a los parámetros definidos por la organización para determinar cuáles prospectos representan las mejores oportunidades comerciales. Estos criterios deben responder a los objetivos estratégicos de la empresa y considerar variables objetivas que permitan comparar los diferentes prospectos de manera consistente y transparente.  
        .bg-secundario-s5.p-4.py-3.rounded-4
          p.mb-0 Entre los criterios más utilizados se encuentran el nivel de interés manifestado por el prospecto, la compatibilidad con el mercado objetivo, la capacidad de compra, la posibilidad de establecer relaciones comerciales de largo plazo y la afinidad con los productos o servicios ofrecidos. La aplicación de criterios previamente establecidos contribuye a disminuir la subjetividad y favorece decisiones comerciales sustentadas en información verificable. 
    
    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Criterios para seleccionar prospectos

    .bg-terciario-t5.rounded-4.p-4.mb-5
      p.mb-0 La selección de prospectos permite orientar los esfuerzos comerciales hacia clientes potenciales con mayores posibilidades de avanzar en el proceso comercial. Explore algunos criterios que pueden apoyar esta selección. 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-4.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema5/5.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        .bg-slider-2.p-4.mb-4
          SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
            div
              h5 Afinidad con el mercado objetivo
              p #[strong Aspecto evaluado]: Correspondencia entre las características, necesidades y condiciones del prospecto y el segmento de mercado definido por la organización. 
              p #[strong Finalidad]: Priorizar clientes potenciales que presenten mayor alineación con el perfil de cliente y con la estrategia comercial establecida. 
            div
              h5 Nivel de interés
              p #[strong Aspecto evaluado]: Grado de interacción del prospecto con los canales de comunicación, contenidos y acciones comerciales de la organización. 
              p #[strong Finalidad]: Identificar prospectos con mayor disposición para recibir información, establecer contacto y avanzar en el proceso comercial. 
            div
              h5 Capacidad de compra
              p #[strong Aspecto evaluado]: Posibilidad del prospecto de adquirir los productos o servicios ofrecidos, considerando sus condiciones y necesidades comerciales. 
              p #[strong Finalidad]: Orientar los esfuerzos hacia oportunidades que presenten condiciones favorables y posibilidades reales de conversión. 
            div
              h5 Potencial de crecimiento
              p #[strong Aspecto evaluado]: Posibilidad de desarrollar y ampliar la relación comercial con el prospecto a corto, mediano o largo plazo. 
              p #[strong Finalidad]: Favorecer la identificación de oportunidades con posibilidades de generar relaciones comerciales sostenibles y de mayor valor para la organización. 

    .bg-contenido-a10.rounded-4.p-4
      p.mb-0 La aplicación conjunta de estos criterios facilita una selección de prospectos coherente con las oportunidades del mercado y los objetivos comerciales de la organización. 

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Priorización estratégica de clientes potenciales

    img(data-aos="fade-up", src="@/assets/curso/tema5/6.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 La priorización estratégica de clientes potenciales consiste en organizar los prospectos según su contribución al cumplimiento de los objetivos comerciales de la organización, este proceso integra la información obtenida durante la prospectación, la calificación, el análisis y la selección de prospectos para establecer el orden en que serán gestionadas las oportunidades comerciales. Su finalidad es concentrar los esfuerzos en aquellos clientes potenciales que ofrecen mayores posibilidades de generar resultados favorables para la organización.  

    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La priorización estratégica requiere evaluar de manera conjunta diferentes criterios, como el nivel de interés del prospecto, su afinidad con el mercado objetivo, el potencial de crecimiento de la relación comercial y el valor que puede aportar a la organización. Esta evaluación permite distribuir adecuadamente los recursos comerciales, optimizar la planificación de las acciones de seguimiento y fortalecer la eficiencia del proceso de ventas.  
    
    .row.justify-content-center.z-2.mb-5
      .col-xl-10
        .bg-secundario-s20.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p #[strong NovaMarket S.A.S.] revisa periódicamente su base de clientes potenciales para establecer prioridades comerciales. Los prospectos que pertenecen a distribuidores de artículos deportivos presentan alta interacción con los canales digitales y cuentan con capacidad para realizar compras recurrentes son clasificados como prioridad estratégica.
              p.mb-0 En consecuencia, reciben atención personalizada, seguimiento permanente y propuestas comerciales adaptadas a sus necesidades, mientras que los demás prospectos continúan en procesos de acompañamiento hasta demostrar un mayor potencial comercial. 

    .row.justify-content-center.mb-5
      .col-xl-10
        .bg-primario-p10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/common/error-icon.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Error frecuente 
              p.mb-0 Priorizar clientes potenciales únicamente por el volumen esperado de compra, una decisión estratégica debe considerar múltiples criterios, como el nivel de interés, la afinidad con el mercado objetivo, la posibilidad de establecer relaciones comerciales sostenibles y la alineación con los objetivos de la organización.

    .row.justify-content-center.mb-5.align-items-center
      .col-lg-5
        .bg-secundario-s10.p-4.rounded-4.py-lg-5.mb-4.mb-lg-0
          p.mb-0 Lo invitamos a consultar el pódcast #[strong “Decisiones comerciales estratégicas”], en el que conocerá cómo el análisis de información e indicadores contribuye a tomar decisiones comerciales fundamentadas y orientar las estrategias de la organización. 
      .col-lg-7
        .bg-audio.rounded-4.px-4.py-4.py-lg-0
          .row.align-items-center.justify-content-center
            .col-8.col-sm-4
              figure
                img.imgw-190.mb-4.mb-sm-0(src="@/assets/curso/common/mic.png", alt="")
            .col-sm-8.col-lg-8
              p A continuación, lo invitamos a consultar el siguiente pódcast:
              TarjetaAudio.mb-3(
                texto="Decisiones comerciales estratégicas"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false")

    .row.justify-content-center.z-2
      .col-xl-10
        .bg-adicional.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/18.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Reflexión del capítulo.  
              p.mb-0 La prospectación es más efectiva cuando el contacto con los clientes potenciales se fundamenta en la escucha, la oportunidad y la construcción de confianza. Cada interacción representa una oportunidad para fortalecer la relación comercial y avanzar hacia decisiones que beneficien tanto a la organización como al cliente. 

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
