<template>
  <section class="selection">
    <h2 class="selection__title">
      {{ $t('selection.title') }}
    </h2>
    <div class="selection__wrap">
      <div class="selection__left"/>
      <div class="selection__right">
        <p class="selection__text">
          {{ $t('selection.text1') }}
        </p>
        <p class="selection__text">
          {{ $t('selection.text2') }}
        </p>
        <p class="selection__text">
          {{ $t('selection.text3') }}
        </p>
        <p class="selection__text">
          {{ $t('selection.text4') }}
        </p>
      </div>
    </div>
    <IMGTokenBtns class="selection__btns"/>
  </section>
</template>

<script>
  import IMGTokenBtns from '@/components/IMGTokenBtns.vue'

  export default {
    name: 'Introduction',
      components: { IMGTokenBtns },
  }
</script>

<style lang="scss" scoped>
  .selection {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    &__title {
      @include titleSection2;
    }

    &__wrap {
      display: flex;
      justify-content: center;
      align-items: stretch;
      margin-bottom: 2em;
      padding: 1em 0;
      width: 100%;
      box-sizing: border-box;

      @include w320-767 {
        flex-wrap: wrap;
      }
    }

    &__left {
      padding: 0 5%;
      flex-basis: 45%;
      background: url("../assets/img/selection/background-selection.png") no-repeat center;
      background-size: contain;
      @include w320-767 {
        flex-basis: 500px;
        height: 60vw;
      }
      img {
        width: 100%;
      }
    }

    &__right {
      position: relative;
      max-width: 760px;
      flex-basis: 55%;
      padding: 1em 5% 1em 1%;
      box-sizing: border-box;
      background: rgba(5, 32, 44, 0.87)
      url("../assets/img/background/backgroung-grid.png") no-repeat top right;
      @include w320-767 {
        flex-grow: 1;
        padding: 1em 4%;
      }
    }

    &__text {
      @include textItem;
      margin-bottom: 2em;
      &:last-of-type {
        margin-bottom: 0;
      }
    }

    &__btns {
      margin-top: auto;
    }
  }
</style>
