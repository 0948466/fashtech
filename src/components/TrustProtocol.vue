<template>
  <section class="trust-protocol">
    <h2 class="trust-protocol__title">
      {{ $t('trustProtocol.title') }}
    </h2>
    <p class="trust-protocol__text">
      {{ $t('trustProtocol.text1') }}
    </p>
    <p class="trust-protocol__text">
      {{ $t('trustProtocol.text2') }}
    </p>
    <p class="trust-protocol__text">
      {{ $t('trustProtocol.text3') }}
    </p>
    <p class="trust-protocol__text">
      {{ $t('trustProtocol.text4') }}
    </p>
    <p class="trust-protocol__text">
      {{ $t('trustProtocol.text5') }}
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
