<template>
  <section class="direct-ads">
    <h2 class="direct-ads__title">
      {{ $t('directAds.title') }}
    </h2>
    <p class="direct-ads__text">
      {{ $t('directAds.text1') }}
    </p>
    <p class="direct-ads__text">
      {{ $t('directAds.text2') }}
    </p>
    <p class="direct-ads__text">
      {{ $t('directAds.text3') }}
    </p>
    <p class="direct-ads__text">
      {{ $t('directAds.text4') }}
    </p>
  </section>
</template>

<script>
  export default {
    name: 'DirectAds',
  }
</script>

<style lang="scss" scoped>
  .direct-ads {
    @include popupPadding;
    &__title {
      position: relative;
      z-index: 1;
      @include titleFuturePopup;
    }
    &__text {
      position: relative;
      z-index: 1;
      @include textFuturePopup;
    }
  }
</style>
