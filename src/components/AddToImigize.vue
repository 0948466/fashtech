<template>
  <section class="add-to-imigize">
    <p class="add-to-imigize__text">
      {{ $t('introduction.textBottom') }}
    </p>

    <p class="add-to-imigize__text add-to-imigize__text_color">
      ADD TO Imigize
    </p>
    <button
      class="add-to-imigize__btn"
      type="button"
      @click="onBtnClick">
      Request access to testnet
    </button>
  </section>
</template>

<script>
  import { modal } from '@/api/constants'

  export default {
    name: 'AddToImigize',
    methods: {
      onBtnClick() {
        this.$router.push({ query: { modal: modal.SUBSCRIBE_BY_EMAIL } })
      },
    },
  }
</script>

<style lang="scss" scoped>
  .add-to-imigize {
    @include sectionPadding;
    background-color: $color3;
    &__text {
      @include responsive-font-size(19);
      margin-bottom: 1em;
      font-weight: 400;
      line-height: 1.5;
      color: #fff;
    }

    &__text_color {
      color: $color2;
    }
    &__btn {
      @include bigBtn;
      @include lineForBackgroundColor3;
      text-transform: uppercase;
    }
  }
</style>
