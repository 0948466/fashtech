<template>
  <section class="introduction">
    <h1 class="introduction__title">
      {{ $t('introduction.title') }}
    </h1>
    <div class="introduction__slide">
      <div
        ref="right"
        class="introduction__right">
        <div
          ref="triangle"
          class="introduction__triangle"/>
        <div class="introduction__text-wrap">
          <p class="introduction__text">
            {{ $t('introduction.text1') }}
          </p>
          <p class="introduction__text">
            {{ $t('introduction.text2') }}
          </p>
          <p class="introduction__text">
            {{ $t('introduction.text3') }}
          </p>
          <p class="introduction__text">
            {{ $t('introduction.text4') }}
          </p>
        </div>
      </div>
    </div>
    <IMGTokenBtns
      class="introduction__btn"
      @popupShow="$emit('popupShow')"/>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import IMGTokenBtns from '@/components/IMGTokenBtns.vue'

  export default {
    name: 'Introduction',
    components: { IMGTokenBtns },
    computed: {
      ...mapGetters(['isMobile', 'windowWidth']),
    },

    watch: {
      windowWidth() {
        if (!this.isMobile) {
          this.initHeightTriangle()
        }
      },
    },
    mounted() {
      if (!this.isMobile && !window.PRERENDER_INJECTED) {
        setTimeout(() => {
          this.initHeightTriangle()
        }, 0)
      }
    },
    methods: {
      initHeightTriangle() {
        const rightHeight = this.$refs.right.clientHeight

        this.$refs.triangle.style.borderBottom = `${rightHeight}px solid #03151D`
        this.$refs.triangle.style.borderLeft = `${rightHeight / 6}px solid transparent`
      },
    },
  }
</script>

<style lang="scss" scoped>
  .introduction {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    &__title {
      @include titleSection2;
    }

    &__slide {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-bottom: 2em;
      padding: 1em 0;
      @include siteBackgroundColor;
      background-repeat: no-repeat;
      background-color: #1f3336;
      @include w320-767 {
        background-image: url("../assets/img/introduction/background-introduction-mobile.jpg");
      }
      @include w768 {
        background-image: url("../assets/img/introduction/background-introduction.jpg");
      }

      @include w320-767 {
        flex-wrap: wrap;
        background-size: contain;
        padding-top: 50vw;
      }
      @include w768-1299 {
        background-size: cover;
        background-position: -30vw
      }
      @include w1300 {
        background-size: 53%;
        background-position: left;
      }
    }

    &__right {
      position: relative;
      flex-basis: 49%;
      padding: 1.5em 5% 1.5em 1%;
      box-sizing: border-box;
      background: #{$color3}
      url("../assets/img/background/backgroung-grid.png") no-repeat top right;
      @include w320-767 {
        flex-grow: 1;
        padding: 1em 4%;
      }
    }

    &__triangle {
      position: absolute;
      top: 0;
      right: 100%;
      width: 0;
      height: 0;
    }

    &__text-wrap {
      max-width: 705px;
    }

    &__text {
      @include textItem;
      margin-bottom: 2em;
      color: #bdbdbd;
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    &__btn {
      margin-top: auto;
    }
  }
</style>
