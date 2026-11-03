<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de prospectación

    img(data-aos="fade-up", src="@/assets/curso/tema4/1.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.bg-secundario-s5.mb-3
          p.mb-0 Las técnicas de prospectación comprenden el conjunto de procedimientos utilizados para identificar, contactar y dar seguimiento a clientes potenciales de manera organizada.  
    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Su aplicación permite ampliar las oportunidades comerciales, fortalecer la relación con los prospectos y facilitar la construcción de una base de clientes con mayor potencial de conversión.  
    .bg-contenido-a20.p-4.rounded-4.py-3
      p.mb-0 La selección de las técnicas depende de las características del mercado, el perfil del cliente y los objetivos comerciales de la organización.  
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Identificación de oportunidades

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p La identificación de oportunidades consiste en reconocer personas, empresas o segmentos de mercado que presentan características compatibles con la oferta de la organización. Este proceso parte del análisis de información proveniente de diferentes fuentes, como bases de datos, redes sociales, eventos comerciales, recomendaciones, formularios de contacto y canales digitales, con el propósito de detectar posibles clientes interesados en los productos o servicios ofrecidos.  
        .bg-contenido-a5.p-4.rounded-4.py-3.mb-4.mb-lg-0
          p.mb-0 Una adecuada identificación de oportunidades permite orientar los esfuerzos comerciales hacia prospectos con mayores posibilidades de generar relaciones comerciales. Para ello, resulta indispensable establecer criterios claros de búsqueda, analizar la información disponible y mantener actualizada la base de datos de prospectos, favoreciendo una gestión comercial más organizada y eficiente. 
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/3.png", alt="")

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Teniendo en cuenta el contexto

    .row.justify-content-center.z-2.mb-4
      .col-xl-10.bg-primario-p5.rounded-4.p-4.ps-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/4.png", alt="" data-aos="fade-up")
          .col-lg-10
            p #[strong NovaMarket S.A.S.] identifica oportunidades comerciales mediante el análisis de los registros obtenidos en su tienda virtual, formularios de contacto, campañas en redes sociales y participación en ferias deportivas. Posteriormente, clasifica la información recopilada para determinar cuáles empresas cumplen las características definidas dentro de su mercado objetivo. 

    .row.justify-content-center.z-2
      .col-xl-10.bg-contenido-a5.rounded-4.p-4.p-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-2.d-none.d-lg-block
            figure
              img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/tema1/10.png", alt="" data-aos="fade-up")
          .col-lg-10
            h5 Clave estratégica. 
            p.mb-0 Identificar oportunidades significa reconocer prospectos que presentan condiciones favorables para establecer una futura relación comercial con la organización. 

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Seguimiento comercial

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema4/4.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p El seguimiento comercial comprende las acciones realizadas para mantener el contacto con los prospectos después de la primera interacción. Su finalidad es fortalecer la relación, resolver inquietudes, suministrar información relevante y acompañar al prospecto durante su proceso de decisión. Un seguimiento oportuno contribuye a mantener el interés y evita que oportunidades comerciales se pierdan por falta de comunicación.  
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-3
          p.mb-0 Las actividades de seguimiento pueden desarrollarse mediante llamadas telefónicas, correos electrónicos, reuniones virtuales, mensajería instantánea o plataformas de gestión comercial. Independientemente del medio utilizado, es importante que cada interacción responda a los intereses del prospecto y aporte información que facilite el avance dentro del proceso comercial. 

    .titulo-con-imagen.mb-5.z-2(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/curso/common/title-icon.png")
        h3.titulo-con-imagen__texto Medios utilizados para el seguimiento comercial

    .bg-secundario-s5.p-4.rounded-4.py-3.mb-5
      p.mb-0 El seguimiento comercial puede realizarse mediante diferentes medios de comunicación, seleccionados de acuerdo con las características del prospecto y el propósito del contacto. Explore algunos de los más utilizados. 

    TabsA.color-acento-botones.mb-4.z-2
      .tarjeta.bg-primario-p5.p-4(titulo="Correo electrónico ")
        .row.justify-content-center.align-items-center
          .col-lg-6
            p.mb-0 #[strong Propósito:] Compartir información, presentar la oferta comercial y mantener una comunicación formal y organizada con el prospecto. 
            p.mb-4.mb-lg-0 #[strong Ejemplo:] Envío de catálogos, propuestas comerciales, información de productos o servicios, novedades y contenidos de interés. 
          .col-sm-8.col-lg-5
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/tema4/5.png", alt="" data-aos="zoom-in-down")
      .tarjeta.bg-primario-p5.p-4(titulo="Llamada telefónica")
        .row.justify-content-center.align-items-center
          .col-lg-6
            p.mb-0 #[strong Propósito:] Resolver inquietudes, identificar necesidades y conocer el nivel de interés del prospecto. 
            p.mb-4.mb-lg-0 #[strong Ejemplo:] Seguimiento a una cotización, confirmación de una reunión, ampliación de información o validación de datos. 
          .col-sm-8.col-lg-5
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/tema4/6.png", alt="" data-aos="zoom-in-down")
      .tarjeta.bg-primario-p5.p-4(titulo="Mensajería instantánea")
        .row.justify-content-center.align-items-center
          .col-lg-6
            p.mb-0 #[strong Propósito:] Facilitar una comunicación rápida, directa y oportuna con el prospecto. 
            p.mb-4.mb-lg-0 #[strong Ejemplo:] Envío de recordatorios, respuesta a consultas, confirmación de citas o envío de información puntual sobre la oferta. 
          .col-sm-8.col-lg-5
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/tema4/7.png", alt="" data-aos="zoom-in-down")
      .tarjeta.bg-primario-p5.p-4(titulo="Reunión virtual")
        .row.justify-content-center.align-items-center
          .col-lg-6
            p.mb-0 #[strong Propósito:] Presentar soluciones, profundizar en las necesidades del prospecto y fortalecer la relación comercial. 
            p.mb-4.mb-lg-0 #[strong Ejemplo:] Demostración de productos o servicios, presentación de propuestas, resolución de inquietudes o asesoría personalizada. 
          .col-sm-8.col-lg-5
            figure
              img.mb-4.mb-lg-0(src="@/assets/curso/tema4/8.png", alt="" data-aos="zoom-in-down")

    .bg-terciario-t10.p-4.rounded-4.py-3.mb-4
      p.mb-0.text-center La elección del medio depende del propósito del seguimiento, las características del prospecto y el momento del proceso comercial. 

    .row.justify-content-center
      .col-xl-10
        .bg-primario-p10.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-155.mb-4.mb-lg-0(src="@/assets/curso/common/error-icon.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Error frecuente 
              p.mb-0 Establecer contacto con todos los prospectos utilizando el mismo mensaje, la misma frecuencia y canal de comunicación. Una estrategia uniforme puede disminuir el interés del prospecto y afectar la efectividad del proceso comercial, adaptar la comunicación según las características y necesidades de cada prospecto favorece relaciones más sólidas y aumenta las oportunidades de conversión.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Estrategias de contacto y relacionamiento

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        p Las estrategias de contacto y relacionamiento comprenden las acciones planificadas que permiten establecer, mantener y fortalecer la comunicación con los prospectos durante el proceso comercial, su finalidad es generar confianza, comprender las necesidades del cliente potencial y construir relaciones que favorezcan la continuidad de las interacciones comerciales.  
        .bg-terciario-t5.rounded-4.p-4.py-3.mb-3
          p.mb-0 Para ello, es necesario seleccionar los canales de comunicación adecuados y adaptar los mensajes según las características del prospecto y la etapa en la que se encuentra dentro del proceso de conversión.  
        p.mb-4.mb-lg-0 Un relacionamiento efectivo requiere que cada contacto aporte valor al prospecto mediante información pertinente, atención oportuna y respuestas claras a sus inquietudes, asimismo, la comunicación debe desarrollarse con respeto, coherencia y continuidad, permitiendo consolidar vínculos comerciales sostenibles que contribuyan al logro de los objetivos organizacionales. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema4/9.png", alt="")
    
    .row.justify-content-center.z-2.mb-4
      .col-xl-10
        .bg-secundario-s20.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img.imgw-145.mb-4.mb-lg-0(src="@/assets/curso/tema1/6.png", alt="" data-aos="zoom-in-down")
            .col-lg-10
              h5 Ejemplo aplicado. 
              p #[strong NovaMarket S.A.S.] diseña diferentes estrategias de contacto según el perfil de sus prospectos. Las empresas que descargan el catálogo digital reciben un correo electrónico con información complementaria y una invitación para agendar una reunión virtual.  
              p.mb-0 En cambio, los prospectos que solicitan una cotización son contactados directamente por un asesor comercial, quien resuelve sus inquietudes y presenta una propuesta ajustada a sus necesidades. Esta diferenciación permite ofrecer una experiencia más pertinente y fortalecer la relación comercial desde los primeros contactos. 

    .row.justify-content-center.mb-4.align-items-center
      .col-lg-5
        .bg-secundario-s10.p-4.rounded-4.py-lg-5.mb-4.mb-lg-0
          p.mb-0 Lo invitamos a consultar el pódcast “#[strong Técnicas de prospección estratégica]”, en el que conocerá cómo el análisis de información y la aplicación de técnicas de prospección contribuyen a identificar, priorizar y gestionar oportunidades comerciales. 
      .col-lg-7
        .bg-audio.rounded-4.px-4.py-4.py-lg-0
          .row.align-items-center.justify-content-center
            .col-8.col-sm-4
              figure
                img.imgw-190.mb-4.mb-sm-0(src="@/assets/curso/common/mic.png", alt="")
            .col-sm-8.col-lg-8
              p A continuación, lo invitamos a consultar el siguiente pódcast:
              TarjetaAudio.mb-3(
                texto="Actuar, verificar y mejorar: seguimiento de brotes en entornos penitenciarios"
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
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
