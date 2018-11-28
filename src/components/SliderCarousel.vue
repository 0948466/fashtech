<template>
  <section class="introduction-carousel">
    <SliderTemplate
      :slides="slides"
      :pagination="true"
      :arrow="true"
    />
  </section>
</template>

<script>
  import SliderTemplate from '@/components/SliderTemplate.vue'
  import Introduction from '@/components/Introduction.vue'
  import Selection from '@/components/Selection.vue'

  export default {
    name: 'IntroductionCarousel',
    components: {
      SliderTemplate,
      Introduction,
      Selection,
    },

    data: () => ({
      slides: [
        { component: Introduction },
        { component: Selection },
      ],
    }),
  }
</script>

<style lang="scss" scoped>
  .introduction-carousel {
    position: relative;
    @include siteBackgroundColor;
    @include sectionPadding;
    padding: 2em 0;
  }
</style>

<style lang="scss">
  .introduction-carousel {
    .slider-wrapper {
      align-items: stretch;
    }
    .slider-item {
      height: auto;
    }
  }
</style>
