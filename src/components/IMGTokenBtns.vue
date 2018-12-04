<template functional>
  <div class="img-token-btns">
    <router-link
      :to="{name: 'imigize-token'}"
      tag="button"
      class="img-token-btns__btn">
      Imz Token
    </router-link>
    <router-link
      :to="{name: 'imigize-apps'}"
      tag="button"
      class="img-token-btns__btn img-token-btns__btn_active">
      Expore Apps
    </router-link>
  </div>
</template>

<script>

    export default {
        name: 'IMGTokenBtns',
    }
</script>

<style lang="scss" scoped>
    .img-token-btns {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
      @include w320-767 {
        justify-content: space-around;
      }
        &__btn {
            @include btnLink;

          &_active {
            border-color: $color2;
            color: $color1;
          }

          @include w320-767 {
            margin-bottom: 1em;
          }

          @include w768 {
            margin-left: 70px;
          }
        }
    }
</style>
