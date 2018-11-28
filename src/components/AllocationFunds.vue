<template>
  <section class="allocation-funds">
    <h2 class="allocation-funds__title">
      {{ $t('allocationFunds.title') }}
    </h2>
    <div class="allocation-funds__wrap">
      <img
        :src="getImageSrc"
        class="allocation-funds__img"
        alt="Diagram">
      <div
        v-for="item in $t('allocationFunds.items')"
        :key="item.title"
        class="allocation-funds__item">
        <p
          class="allocation-funds__item__title"
          v-html="item.title"/>
        <p
          class="allocation-funds__item__text"
          v-html="item.text"/>
      </div>
    </div>
  </section>
</template>

<script>
  import diagrEn from '@/assets/img/allocation-funds/diagr-allocation-funds-en.png'
  import diagrRu from '@/assets/img/allocation-funds/diagr-allocation-funds-ru.png'

  export default {
    name: 'AllocationFunds',
    computed: {
      getImageSrc() {
        switch (this.$i18n.locale) {
          case 'ru': return diagrRu
          default: return diagrEn
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .allocation-funds {
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

    &__img {
      float: right;
      margin: 0 0 30px 30px;
      max-width: 100%;
      max-height: 72vw;
      width: 511px;
      height: 412px;
    }

    &__item__title {
      position: relative;
      z-index: 1;
      @include textFuturePopup;
      margin-bottom: 1em;
      line-height: 1.588;
    }
    &__item__text {
      position: relative;
      z-index: 1;
      @include textFuturePopup;
      margin-bottom: 1em;
      line-height: 1.588;
      color: #aec9cb;
    }

  }
</style>
