<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4
      .col-sm-6.col-lg-4
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/intro.png", alt="" data-aos="zoom-in-down")
      .col-lg-8
        p En los entornos comerciales actuales, identificar clientes potenciales ya no es suficiente para alcanzar resultados sostenibles. Las organizaciones requieren procesos que les permitan analizar la información disponible, comprender las características de cada prospecto y establecer prioridades que orienten eficientemente los esfuerzos comerciales.
        .bg-secundario-s5.p-4.rounded-4.py-3.mb-3
          p.mb-0 El perfilamiento estratégico responde a esta necesidad mediante herramientas y metodologías que facilitan la valoración de oportunidades, la comprensión del comportamiento del cliente y la toma de decisiones fundamentadas en criterios objetivos. 
        p.mb-0 Este componente desarrolla los fundamentos del perfilamiento estratégico aplicados a la gestión comercial, abordando procesos como la calificación de prospectos, el #[em lead scoring], el embudo de conversión, las técnicas de prospectación y la construcción del #[em buyer persona].
    p.mb-4 A través de estos contenidos, el aprendiz fortalecerá su capacidad para analizar información comercial, estructurar perfiles de clientes potenciales y respaldar decisiones orientadas a incrementar la efectividad de las estrategias comerciales y la generación de oportunidades de negocio. 

    .row.justify-content-center
      .col-xl-10
        .bg-terciario-t5.p-4.rounded-4(data-aos="zoom-in-down")
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block.p-0
              figure
                img.mb-4.mb-lg-0(src="@/assets/curso/intro-1.png", alt="")
            .col-lg-10
              p #[strong NovaMarket S.A.S.] es una empresa colombiana ficticia dedicada a la comercialización de artículos deportivos mediante canales digitales y comercio electrónico, durante el desarrollo del componente, esta organización servirá como contexto de referencia para ejemplificar procesos de calificación de prospectos, aplicación de metodologías de lead scoring, construcción de perfiles de clientes, formulación de estrategias comerciales y toma de decisiones orientadas a mejorar la conversión de oportunidades de negocio. Su utilización tiene una finalidad exclusivamente didáctica y busca facilitar la integración progresiva de los conceptos desarrollados, favoreciendo una comprensión contextualizada sin reemplazar el análisis conceptual propio de cada temática.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
