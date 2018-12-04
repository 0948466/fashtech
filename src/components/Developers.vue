<template functional>
  <section class="developers">
    <h2 class="developers__title">
      {{ parent.$i18n.t('developers.title') }}
    </h2>
    <p class="developers__text">
      {{ parent.$i18n.t('developers.text1') }}
    </p>
  </section>
</template>

<script>
  export default {
    name: 'Developers',
  }
</script>

<style lang="scss" scoped>
  .developers {
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
