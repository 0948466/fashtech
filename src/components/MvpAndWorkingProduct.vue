<template>
  <div class="mvp-and-working-product">
    <h1 class="mvp-and-working-product__title">MVP & working platform</h1>
    <SliderTemplate
      :slides="slides"
      :pagination="true"
      :arrow="true"/>
  </div>
</template>

<script>
  import { modal } from '@/api/constants'
  import { mapGetters } from 'vuex'
  import SliderTemplate from '@/components/SliderTemplate.vue'
  import MvpAndWorkingProductSlide from '@/components/MvpAndWorkingProductSlide.vue'
  import SliderImages from '@/components/SliderImages.vue'
  import Image1 from '@/assets/img/mvp-and-working-product/01.png'
  import Image2 from '@/assets/img/mvp-and-working-product/02.png'
  import Image3 from '@/assets/img/mvp-and-working-product/03.png'
  import Image4 from '@/assets/img/mvp-and-working-product/04.png'
  import Image5 from '@/assets/img/mvp-and-working-product/05.png'
  import Image6 from '@/assets/img/mvp-and-working-product/06.png'

  const slidesMobile = [
    {
      component: {
        render: h => h(MvpAndWorkingProductSlide, {
          props: {
            title: 'Product page. <span>Comfort assessment widget</span>',
            src: Image1,
          },
        }),
      },
    },
    {
      component: {
        render: h => h(MvpAndWorkingProductSlide, {
          props: {
            title: 'Catalog page. <span>Comfort assessment widget</span>',
            src: Image2,
          },
        }),
      },
    },
    {
      component: {
        render: h => h(MvpAndWorkingProductSlide, {
          props: {
            title: 'Mobile App',
            src: Image3,
          },
        }),
      },
    },
    {
      component: {
        render: h => h(MvpAndWorkingProductSlide, {
          props: {
            title: 'Cryptowallet in Mobile App',
            src: Image4,
          },
        }),
      },
    },
    {
      component: {
        render: h => h(MvpAndWorkingProductSlide, {
          props: {
            title: '3D scanner in Mobile App ',
            src: Image5,
          },
        }),
      },
    },
    {
      component: {
        render: h => h(MvpAndWorkingProductSlide, {
          props: {
            title: 'ScanPoint for shoppers ',
            src: Image6,
          },
        }),
      },
    },
  ]

  export default {
    name: 'MvpAndWorkingProduct',
    components: {
      SliderTemplate,
      MvpAndWorkingProductSlide,
      SliderImages,
    },
    computed: {
      ...mapGetters([
        'isMobile',
        'isDesktop',
      ]),
      slides() {
        if (this.isMobile) {
          return slidesMobile
        }
        return this.getSlidesDesktop
      },

      getSlidesDesktop() {
        return [
          {
            component: {
              render: h => h('div', {
                class: 'mvp-and-working-product__slide-wrap',
              }, [
                h(MvpAndWorkingProductSlide, {
                  props: {
                    title: 'Product page. <span>Comfort assessment widget</span>',
                    src: Image1,
                  },
                  on: {
                    slideClick: () => this.clickSlideWrap(0),
                  },
                }),
                h(MvpAndWorkingProductSlide, {
                  props: {
                    title: 'Catalog page. <span>Comfort assessment widget</span>',
                    src: Image2,
                  },
                  on: {
                    slideClick: () => this.clickSlideWrap(1),
                  },
                }),
                h(MvpAndWorkingProductSlide, {
                  props: {
                    title: 'Mobile App',
                    src: Image3,
                  },
                  on: {
                    slideClick: () => this.clickSlideWrap(2),
                  },
                }),
              ]),
            },
          },
          {
            component: {
              render: h => h('div', {
                class: 'mvp-and-working-product__slide-wrap',
              }, [
                h(MvpAndWorkingProductSlide, {
                  props: {
                    title: 'Cryptowallet in Mobile App',
                    src: Image4,
                  },
                  on: {
                    slideClick: () => this.clickSlideWrap(3),
                  },
                }),
                h(MvpAndWorkingProductSlide, {
                  props: {
                    title: '3D scanner in Mobile App ',
                    src: Image5,
                  },
                  on: {
                    slideClick: () => this.clickSlideWrap(4),
                  },
                }),
                h(MvpAndWorkingProductSlide, {
                  props: {
                    title: 'ScanPoint for shoppers ',
                    src: Image6,
                  },
                  on: {
                    slideClick: () => this.clickSlideWrap(5),
                  },
                }),
              ]),
            },
          },
        ]
      },
    },
    methods: {
      clickSlideWrap(i) {
        this.$router.push({ query: { modal: modal.SLIDER_IMAGES }, params: { sliderImagePage: i } })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .mvp-and-working-product {
    position: relative;
    @include sectionPadding;
    @include siteBackgroundColor;
    background: url("../assets/img/mvp-and-working-product/background-mvp-and-working-product.png")
    no-repeat right 50%;
    &__title {
      @include titleSection2;
      text-transform: uppercase;
    }

    &__slide__title {
      @include textItem;
    }
    &__slide__img {
      max-width: 100%;
      max-height: 90vw;
      width: 444px;
      height: 432px;
    }
  }
</style>
<style lang="scss">
  .mvp-and-working-product {
    &__slide-wrap {
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-around;
    }
  }
</style>
