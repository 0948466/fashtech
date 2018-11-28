<template>
  <section class="business">
    <h2 class="business__title">
      {{ $t('business.title') }}
    </h2>
    <p class="business__text">
      {{ $t('business.text1') }}
    </p>
    <p class="business__text">
      {{ $t('business.text2') }}
    </p>
    <p class="business__text">
      {{ $t('business.text3') }}
    </p>
    <p class="business__text">
      {{ $t('business.text4') }}
    </p>
  </section>
</template>

<script>
  export default {
    name: 'Business',
  }
</script>

<style lang="scss" scoped>
  .business {
    @include popupPadding;
    position: relative;
    z-index: 5;
    &__title {
      position: relative;
      z-index: 1;
      @include titleFuturePopup;
    }
    &__text {
      position: relative;
      z-index: 1;
      @include textFuturePopup;
      margin-bottom: 1em;
      line-height: 1.588;
    }
  }
</style>
