<template>
  <div class="slider-images">
    <SliderTemplate
      :slides="slides"
      :pagination="true"
      :arrow="true"
      :set-current-page="setCurrentPage"/>
  </div>
</template>

<script>
  import SliderTemplate from '@/components/SliderTemplate.vue'
  import imgBig1 from '@/assets/img/mvp-and-working-product/01-big.jpg'
  import imgBig2 from '@/assets/img/mvp-and-working-product/02-big.jpg'
  import imgBig3 from '@/assets/img/mvp-and-working-product/03-big.jpg'
  import imgBig4 from '@/assets/img/mvp-and-working-product/04-big.jpg'
  import imgBig5 from '@/assets/img/mvp-and-working-product/05-big.jpg'
  import imgBig6 from '@/assets/img/mvp-and-working-product/06-big.jpg'

  const slides = [
    {
      html: `<img
            src=${imgBig1}
            :alt="Image1"
          >`,
    },
    {
      html: `<img
            src=${imgBig2}
            :alt="imgBig2"
          >`,
    },
    {
      html: `<img
            src=${imgBig3}
            :alt="imgBig3"
          >`,
    },
    {
      html: `<img
            src=${imgBig4}
            :alt="imgBig4"
          >`,
    },
    {
      html: `<img
            src=${imgBig5}
            :alt="imgBig5"
          >`,
    },
    {
      html: `<img
            src=${imgBig6}
            :alt="imgBig6"
          >`,
    },
  ]

  export default {
    name: 'SliderImages',
    components: {
      SliderTemplate,
    },
    props: {
      setCurrentPage: {
        default: 0,
        type: Number,
      },
    },
    data: () => ({
      slides: [],
    }),

    beforeMount() {
      this.slides = slides
    },
  }
</script>

<style lang="scss">
  .slider-images {

    max-height: 90vh;
    .slider-template__item {
      overflow: hidden;
    }
    img {
      width: 100%;
      max-width: 100%;
    }
  }
</style>
