<template functional>
  <section class="trust-protocol">
    <h2 class="trust-protocol__title">
      {{ parent.$i18n.t('trustProtocol.title') }}
    </h2>
    <p class="trust-protocol__text">
      {{ parent.$i18n.t('trustProtocol.text1') }}
    </p>
    <p class="trust-protocol__text">
      {{ parent.$i18n.t('trustProtocol.text2') }}
    </p>
    <p class="trust-protocol__text">
      {{ parent.$i18n.t('trustProtocol.text3') }}
    </p>
    <p class="trust-protocol__text">
      {{ parent.$i18n.t('trustProtocol.text4') }}
    </p>
    <p class="trust-protocol__text">
      {{ parent.$i18n.t('trustProtocol.text5') }}
    </p>
  </section>
</template>

<script>
  export default {
    name: 'TrustProtocol',
  }
</script>

<style lang="scss" scoped>
  .trust-protocol {
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
