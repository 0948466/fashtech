<template functional>
  <section class="democratization">
    <h2 class="democratization__title">
      {{ parent.$i18n.t('democratization.title') }}
    </h2>
    <p class="democratization__text">
      {{ parent.$i18n.t('democratization.text1') }}
    </p>
    <p class="democratization__text">
      {{ parent.$i18n.t('democratization.text2') }}
    </p>
    <p class="democratization__text">
      {{ parent.$i18n.t('democratization.text3') }}
    </p>
    <p class="democratization__text">
      {{ parent.$i18n.t('democratization.text4') }}
    </p>
    <p class="democratization__text">
      {{ parent.$i18n.t('democratization.text5') }}
    </p>
  </section>
</template>

<script>
  export default {
    name: 'Democratization',
  }
</script>

<style lang="scss" scoped>
  .democratization {
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
