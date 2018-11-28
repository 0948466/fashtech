<template>
  <section class="vision-page">
    <Vision/>
    <Press/>
    <ReviewedBy/>
  </section>
</template>

<script>
  import Vision from '@/components/Vision.vue'
  import Press from '@/components/Press.vue'
  import ReviewedBy from '@/components/ReviewedBy.vue'

  export default {
    name: 'VisionPage',
    metaInfo: {
      title: 'Vision',
    },
    components: { ReviewedBy, Press, Vision },
  }
</script>
