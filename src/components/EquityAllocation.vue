<template>
  <section class="equity-allocation">
    <h2 class="equity-allocation__title">
      {{ $t('equityAllocation.title') }}
    </h2>

    <div class="equity-allocation__wrap">
      <img
        :src="getImgSrc"
        class="equity-allocation__img"
        alt="diagram">
      <p
        class="equity-allocation__text"
        v-html="$t('equityAllocation.textTop1')"/>
      <p
        class="equity-allocation__text"
        v-html="$t('equityAllocation.textTop2')"/>
      <p
        class="equity-allocation__text"
        v-html="$t('equityAllocation.textTop3')"/>
      <p class="equity-allocation__text">
        {{ $t('equityAllocation.text1') }}
        <br>
        {{ $t('equityAllocation.text2') }}
        <br>
        {{ $t('equityAllocation.text3') }}
        <br>
        {{ $t('equityAllocation.text4') }}
        <br>
        {{ $t('equityAllocation.text5') }}
        <br>
        {{ $t('equityAllocation.text6') }}
        <br>
        {{ $t('equityAllocation.text7') }}
      </p>
    </div>
    <p class="equity-allocation__text-bottom">
      {{ $t('equityAllocation.textBottom1') }}
      <br>
      1. {{ $t('equityAllocation.textBottom2') }}
      <br>
      2. {{ $t('equityAllocation.textBottom3') }}
      amount)
      <br>
      {{ $t('equityAllocation.textBottom4') }}
    </p>

  </section>
</template>

<script>
  import DiagrEn from '@/assets/img/equity-allocation/equity-allocation-diagr-en.png'
  import DiagrRu from '@/assets/img/equity-allocation/equity-allocation-diagr-ru.png'

  export default {
    name: 'EquityAllocation',
    computed: {
      getImgSrc() {
        switch (this.$i18n.locale) {
          case 'ru': return DiagrRu
          default: return DiagrEn
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .equity-allocation {
    @include popupPadding;
    padding-left: 5%;
    padding-right: 5%;
    position: relative;
    z-index: 5;
    &__title {
      position: relative;
      z-index: 1;
      @include titleFuturePopup;
    }

    &__wrap {
      margin-bottom: 2em;
    }

    &__img {
      float: right;
      margin: 0 0 30px 30px;
      max-width: 100%;
      max-height: 63vw;
      width: 641px;
      height: 451px;
    }

    &__text {
      position: relative;
      z-index: 1;
      @include textFuturePopup;
      margin-bottom: 1em;
      line-height: 1.588;
    }

    &__text-bottom {
      position: relative;
      z-index: 1;
      margin-bottom: 1em;
      @include responsive-font-size(15);
      line-height: 1.8;
      color: #676767;
      text-align: left;
    }
  }
</style>
