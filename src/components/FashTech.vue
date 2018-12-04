<template functional>
  <section class="fash-tech">
    <h2 class="fash-tech__title">
      {{ parent.$i18n.t('fashTech.title') }}
    </h2>
    <p class="fash-tech__text">
      {{ parent.$i18n.t('fashTech.text1') }}
    </p>
    <p class="fash-tech__text">
      {{ parent.$i18n.t('fashTech.text2') }}
    </p>
    <p class="fash-tech__text">
      {{ parent.$i18n.t('fashTech.text3') }}
    </p>
  </section>
</template>

<script>
  export default {
    name: 'FashTech',
  }
</script>

<style lang="scss" scoped>
  .fash-tech {
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
      margin-bottom: 1.5em;
    }
  }
</style>
