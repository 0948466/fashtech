<template>
  <section class="fashion-industry">
    <h2 class="fashion-industry__title">
      {{ $t('fashionIndustry.title') }}
    </h2>
    <p class="fashion-industry__text">
      {{ $t('fashionIndustry.text1') }}
    </p>
    <p class="fashion-industry__text">
      {{ $t('fashionIndustry.text2') }}
    </p>
    <p class="fashion-industry__text">
      {{ $t('fashionIndustry.text3') }}
    </p>
  </section>
</template>

<script>
  export default {
    name: 'FashionIndustry',
  }
</script>

<style lang="scss" scoped>
  .fashion-industry {
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
