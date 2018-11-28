<template>
  <section class="data-store-blockchain">
    <h2 class="data-store-blockchain__title">
      {{ $t('dataStoreBlockchain.title') }}
    </h2>
    <p class="data-store-blockchain__text">
      {{ $t('dataStoreBlockchain.text1') }}
    </p>
    <p class="data-store-blockchain__text">
      {{ $t('dataStoreBlockchain.text2') }}
    </p>
    <p class="data-store-blockchain__text">
      {{ $t('dataStoreBlockchain.text3') }}
    </p>
    <h3 class="data-store-blockchain__scheme__title">
      {{ $t('dataStoreBlockchain.scheme.title') }}
    </h3>
    <div class="data-store-blockchain__scheme__wrap">
      <div class="data-store-blockchain__scheme__top">
        <div class="data-store-blockchain__arrow"/>
        <div class="data-store-blockchain__scheme__item">
          {{ $t('dataStoreBlockchain.scheme.item1') }}
        </div>
        <div class="data-store-blockchain__arrow"/>
        <div class="data-store-blockchain__scheme__item">
          {{ $t('dataStoreBlockchain.scheme.item2') }}
        </div>
        <div class="data-store-blockchain__arrow"/>
        <div class="data-store-blockchain__scheme__item">
          {{ $t('dataStoreBlockchain.scheme.item3') }}
        </div>
        <div class="data-store-blockchain__arrow"/>
        <div class="data-store-blockchain__scheme__item">
          {{ $t('dataStoreBlockchain.scheme.item4') }}
        </div>
        <div class="data-store-blockchain__arrow"/>
        <div class="data-store-blockchain__circle"/>
      </div>
      <div class="data-store-blockchain__scheme__bottom">
        <div class="data-store-blockchain__scheme__item data-store-blockchain__scheme__item_bottom">
          {{ $t('dataStoreBlockchain.scheme.item5') }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'DataStoreBlockchain',
  }
</script>

<style lang="scss" scoped>
  .data-store-blockchain {
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
      margin-bottom: 1em;
    }
    &__scheme__title {
      position: relative;
      z-index: 1;
      margin-bottom: 1em;
      @include responsive-font-size(19px);
      line-height: 1.5;
      color: #c6c6c6;
      letter-spacing: 0.015em;
    }

    &__scheme__wrap {
      display: flex;
      flex-direction: column;
    }

    &__scheme__top {
      display: flex;
      align-items: center;
      margin-bottom: 2em;
      @media only screen and (max-width: 1000px) {
        flex-wrap: wrap;
      }
    }

    &__scheme__item {
      position: relative;
      z-index: 1;
      @include textFuturePopup;
      @include linearGradient;
      margin-bottom: 10px;
      padding: 0.3em 2%;
      flex-basis: 160px;
      width: auto;
      text-align: center;
    }

    &__arrow {
      position: relative;
      margin: 0 10px 10px;
      flex-basis: 30px;
      flex-shrink: 0;
      height: 2px;
      background: #737373;
      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border: solid transparent;
        border-right: 0;
        top: -3px;
        right: -4px;
        border-left-color: #afafaf;
        border-width: 4px 0 4px 8px;
      }
      @media only screen and (max-width: 1000px) {
        &:first-of-type {
          display: none;
        }
      }
    }
    $circleInnerWidth: 46%;

    &__circle {
      position: relative;
      margin-bottom: 10px;
      width: 24px;
      height: 24px;
      border: 2px solid #afafaf;
      border-radius: 50%;
      flex-shrink: 0;
      box-sizing: border-box;
      &::after {
        content: '';
        position: absolute;
        top: calc(50% - #{$circleInnerWidth} / 2);
        left: calc(50% - #{$circleInnerWidth} / 2);
        width: $circleInnerWidth;
        height: $circleInnerWidth;
        background-color: #00ffff;
        border-radius: 50%;
      }
    }
  }
</style>
