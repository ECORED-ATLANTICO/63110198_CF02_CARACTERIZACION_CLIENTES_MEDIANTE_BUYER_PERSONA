<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El Componente Formativo #[strong Perfilamiento estratégico] ofrece al aprendiz los conocimientos necesarios para comprender el proceso de prospectación comercial, identificar oportunidades de negocio y aplicar criterios para calificar y priorizar prospectos. Asimismo, desarrolla conceptos relacionados con el #[em lead scoring], el embudo de conversión y las técnicas de prospectación, proporcionando fundamentos para analizar clientes potenciales y orientar las acciones comerciales de acuerdo con las necesidades organizacionales y las características del mercado. 
    p.mb-5 Además, el componente aborda las metodologías para construir #[em buyer persona] y analizar las variables que conforman el perfil del cliente potencial, integrando aspectos demográficos, motivacionales, conductuales y psicográficos. Estos conocimientos permiten fortalecer la toma de decisiones comerciales, diseñar estrategias de relacionamiento más pertinentes y comprender las necesidades, expectativas y comportamientos de los clientes potenciales para apoyar procesos de #[em marketing] y ventas con un enfoque estratégico.

    .row.justify-content-center
      .col-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="El componente formativo Perfilamiento estratégico,  aborda la prospectación comercial, calificación y priorización de prospectos, lead scoring, embudo de conversión y construcción del buyer persona como fundamentos para analizar clientes potenciales y orientar decisiones y estrategias comerciales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
