<template>
  <section class="slider-template">
    <slider
      ref="slider"
      :class="{'slider-template__slider_with-pagination': options.pagination}"
      :options="options"
      class="slider-template__slider"
      @slide="slide">
      <slideritem
        v-for="(item,index) in slides"
        :key="index"
        :style="item.style"
        class="slider-template__item">
        <div
          v-if="item.component"
          :is="item.component"/>
        <div
          v-else
          v-html="item.html"/>
      </slideritem>
      <div slot="loading">loading...</div>
    </slider>
    <Arrow
      v-if="arrow"
      class="slider-template__arrow slider-template__arrow_left"
      @click="slidePre"/>
    <Arrow
      v-if="arrow"
      class="slider-template__arrow slider-template__arrow_right"
      @click="slideNext"/>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex'
  import { slider, slideritem } from 'vue-concise-slider'
  import Arrow from '@/components/Arrow.vue'

  export default {
    name: 'SliderTemplate',
    components: {
      slider,
      slideritem,
      Arrow,
    },
    props: {
      slides: {
        required: true,
        type: Array,
      },
      setCurrentPage: {
        default: 0,
        type: Number,
      },
      pagination: {
        default: false,
        type: Boolean,
      },

      arrow: {
        default: false,
        type: Boolean,
      },
    },
    data: () => ({
      options: {
        currentPage: 0,
        loop: true,
        direction: 'horizontal',
        loopedSlides: 1,
        slidesToScroll: 1,
        timingFunction: 'ease',
        speed: 300,
        pagination: false,
        preventDocumentMove: false,
        thresholdDistance: 100,
        thresholdTime: 500,
      },
    }),
    computed: {
      ...mapGetters(['isMobile']),
    },
    mounted() {
      if (window.PRERENDER_INJECTED) {
        this.toggleClassSliderTouchFix('add')
      } else {
        this.toggleClassSliderTouchFix('remove')
      }
    },

    beforeMount() {
      this.options.currentPage = this.setCurrentPage
      this.options.pagination = this.pagination
      this.options.preventDocumentMove = !this.isMobile
      if (this.Mobile) {
        this.options.thresholdDistance = 2
        this.options.thresholdTime = 5
      }
    },
    methods: {
      toggleClassSliderTouchFix(method) {
        const { children } = this.$refs.slider.$el
        let sliderTouch = null
        if (children && children.length) {
          sliderTouch = [...children].find(item => /slider-touch/ig.test(item.className))
        }
        if (sliderTouch) {
          sliderTouch.classList[method]('slider-touch_fix')
        }
      },
      // Listener event
      slide(data) {
        this.$emit('changedCurrantPage', data.currentPage)
      },
      slideNext() {
        this.$refs.slider.$emit('slideNext')
      },
      slidePre() {
        this.$refs.slider.$emit('slidePre')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .slider-template {
    position: relative;

    &__slider {
      white-space: normal;

      &_with-pagination {
        padding-bottom: 40px;
      }
    }

    &__item {
      max-width: 100%;
      padding: 5px;
      box-sizing: border-box;
      cursor: pointer;
    }

    &__arrow {
      position: absolute;
      top: 50%;
      z-index: 4;

      &_left {
        left: 0;
        transform: translateY(-50%) rotate(90deg);
      }

      &_right {
        right: 0;
        transform: translateY(-50%) rotate(-90deg);
      }
    }
  }
</style>
<style lang="scss">
  .slider-template {
    .slider-pagination-bullets {
      bottom: 0 !important;
    }

    .slider-touch_fix {
      transform: translate3d(-100%, 0px, 0px) !important;
    }

    .slider-item {
      font-size: initial !important;
    }

    .slider-pagination-bullet {
      height: 11px !important;
      width: 11px !important;
      box-sizing: border-box !important;
      border-radius: 0 !important;
      background: transparent !important;
      border: 2px solid #bcbcbc !important;
      opacity: 1 !important;
      outline: none !important;

      &-active {
        border-color: #0abfca !important;
      }
    }
  }
</style>
