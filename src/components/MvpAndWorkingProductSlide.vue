<template>
  <div
    class="mvp-and-working-product-slide"
    @click="onSlideClick">
    <h3
      class="mvp-and-working-product-slide__title"
      v-html="title"/>
    <img
      :src="src"
      alt="slides"
      class="mvp-and-working-product-slide__img"
    >
  </div>
</template>

<script>
  export default {
    name: 'MvpAndWorkingProductSlide',
    props: {
      title: {
        required: true,
        type: String,
      },
      src: {
        required: true,
        type: String,
      },
    },
    methods: {
      onSlideClick() {
        this.$emit('slideClick')
      },
    },
  }
</script>

<style lang="scss" scoped>
  .mvp-and-working-product-slide {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
           margin: 0 10px;
           width: 100%;
           max-width: 444px;
           cursor: zoom-in;
    @include w320-767 {
      margin: 0;
    }

    &__title {
      @include textItem;
      color: $color2;
    }
    &__img {
      max-width: 100%;
      max-height: 30vw;
      width: 444px;
      height: 432px;
      @include w320-767 {
        max-height: 90vw;
      }
    }
  }
</style>

<style lang="scss">
  .mvp-and-working-product-slide__title span {
    color: #fff;
  }
</style>
