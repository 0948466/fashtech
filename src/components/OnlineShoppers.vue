<template functional>
  <section class="online-shoppers">
    <h2 class="online-shoppers__title">
      {{ parent.$i18n.t('onlineShoppers.title') }}
    </h2>
    <p class="online-shoppers__text">
      {{ parent.$i18n.t('onlineShoppers.text1') }}
    </p>
    <p class="online-shoppers__text">
      {{ parent.$i18n.t('onlineShoppers.text2') }}
    </p>
    <p class="online-shoppers__text">
      {{ parent.$i18n.t('onlineShoppers.text3') }}
    </p>
    <p class="online-shoppers__text">
      {{ parent.$i18n.t('onlineShoppers.text4') }}
    </p>
  </section>
</template>

<script>
  export default {
    name: 'OnlineShoppers',
  }
</script>

<style lang="scss" scoped>
  .online-shoppers {
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
