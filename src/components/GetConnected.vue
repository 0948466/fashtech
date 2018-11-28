<template>
  <div class="get-connected">
    <h3 class="get-connected__title">
      For Commitment Letters, Token Economy, Token design documents
    </h3>
    <button
      class="get-connected__btn"
      @click="onBtnClick">
      Get connected
    </button>
  </div>
</template>

<script>
  import { modal } from '@/api/constants'

  export default {
    name: 'GetConnected',
    data: () => ({
      popupShow: false,
    }),
    methods: {
      onBtnClick() {
        this.$router.push({ query: { modal: modal.SUBSCRIBE_BY_EMAIL } })
      },
    },
  }
</script>

<style lang="scss" scoped>
.get-connected {
  padding: 4em 12%;
  @include sectionPadding;
  &__title {
    margin-bottom: 1em;
    @include responsive-font-size(19);
    color: #fff;
  }

  &__btn {
    @include bigBtn;
    margin: 0 auto 1em;
  }
}
</style>
