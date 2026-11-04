<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Prospectación comercial y <em>buyer persona</em>.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la comprensión de los conceptos, metodologías y herramientas relacionadas con la prospectación comercial, la calificación de prospectos y la construcción del <em>buyer persona</em> mediante la resolución de preguntas de selección múltiple con única respuesta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la prospectación comercial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Diseñar campañas publicitarias masivas para nuevos mercados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar clientes potenciales con oportunidades comerciales reales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Elaborar presupuestos financieros para proyectos empresariales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Organizar inventarios según disponibilidad de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué permite establecer la calificación de prospectos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Priorizar oportunidades según criterios previamente definidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Determinar precios finales para nuevos productos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Elaborar cronogramas para campañas institucionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Controlar existencias durante procesos logísticos comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué evalúa principalmente el potencial de conversión?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El presupuesto disponible para publicidad institucional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La cantidad de vendedores disponibles diariamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La probabilidad de convertirse en cliente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El número de competidores presentes en el mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es la función principal del lead scoring?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear contenidos para redes sociales corporativas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Administrar inventarios según demanda comercial prevista.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organizar reuniones entre equipos comerciales internos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Asignar prioridades mediante valoración de prospectos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué criterio fortalece la priorización comercial de prospectos?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar información relevante para tomar decisiones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incrementar automáticamente el presupuesto publicitario anual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir permanentemente los canales de comunicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar continuamente el catálogo de productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué representa el embudo de conversión comercial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El recorrido del prospecto hasta convertirse en cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La clasificación de proveedores según costos logísticos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La organización de inventarios para distribución comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El análisis financiero de campañas promocionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué busca identificar la prospectación comercial estratégica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las oportunidades comerciales con clientes potenciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los procesos internos de producción industrial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los cambios en la legislación tributaria nacional.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Las condiciones de almacenamiento de mercancías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál etapa sucede después del primer contacto comercial?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluación definitiva de proveedores estratégicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seguimiento del interés mostrado por el prospecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Priorización de oportunidades mediante criterios establecidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Avance progresivo dentro del embudo de conversión.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué favorece un adecuado seguimiento comercial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener comunicación continua con el prospecto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el número de contactos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar registros del historial del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender acciones durante la negociación inicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué fortalece las estrategias de relacionamiento comercial?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar únicamente las promociones comerciales disponibles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personalizar la comunicación según cada prospecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminuir el análisis del comportamiento del cliente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir completamente los canales digitales existentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué permite el análisis de prospectos comerciales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir rutas para distribución física de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Valorar información para apoyar decisiones comerciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elaborar manuales de contratación del personal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Programar actividades de mantenimiento preventivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué caracteriza a un <em>buyer persona</em>?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un perfil construido con información analizada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Es un listado general de clientes frecuentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Es una representación del cliente ideal.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Es una estrategia para fijar precios comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué información incluyen las variables demográficas del cliente?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Edad, ubicación, ocupación y nivel educativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Preferencias musicales y actividades recreativas únicamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Indicadores financieros de la organización comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costos logísticos de distribución internacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué representan los pain points del cliente potencial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las oportunidades para ampliar mercados internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las dificultades que buscan una solución.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Los indicadores financieros del proceso comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los recursos tecnológicos de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Por qué deben analizarse las expectativas del cliente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para modificar permanentemente los procesos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para reducir el número de canales comerciales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para diseñar propuestas de valor pertinentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para incrementar automáticamente las ventas mensuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué finalidad tiene construir un <em>buyer persona</em>?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar los procesos contables de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprender mejor al cliente potencial objetivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Calcular los costos de producción empresarial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elaborar informes financieros para la gerencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué aspecto analizan las variables motivacionales del cliente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las razones que impulsan sus decisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ubicación física de sus oficinas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los motivos que orientan su comportamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El inventario disponible para comercialización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué aporta la priorización estratégica de clientes potenciales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Concentrar esfuerzos en oportunidades con mayor valor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar automáticamente el número de vendedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente los canales comerciales existentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar las actividades de seguimiento comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué beneficio ofrece analizar las expectativas del cliente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el tiempo destinado a la prospectación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir únicamente estrategias de promoción masiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diseñar propuestas alineadas con sus necesidades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fortalecer la propuesta de valor comercial.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué contribuye a mejorar la toma de decisiones comerciales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Analizar información objetiva sobre los prospectos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar el número de productos disponibles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modificar continuamente los canales de distribución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el presupuesto anual de publicidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
